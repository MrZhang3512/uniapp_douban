import Vue from 'vue'
import Vuex from 'vuex'
//导入腾讯地图API 引入SDK核心类
import QQMapWX from '../static/js/qqmap-wx-jssdk.min.js'
import {getNowMovie,getSoonMovie,getNewBestMovie,getTOP250Movie} from "../apis/api.js"
Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		//当前城市
		city:"",
		//当前上映的电影
		nowPlayingList:[],
		//即将上映的电影
		soonPlayingList:[],
		//新片榜
		newBestPlayingList:[],
		//Top250
		top250PlayingList:[],
		//标题
		title:"",
		title2:"",
		title3:"",
		title4:""
	},
	actions:{
		//获取当前位置
		getCity(context){
			uni.showLoading({
			    title: '加载中'
			});
			//授权,适用于小程序
			uni.authorize({
			    scope: 'scope.userLocation',
			    success() {
					// 实例化API核心类
					let qqmapsdk = new QQMapWX({
					         key: 'SP6BZ-W7PK3-TSC3I-YT2YK-PDQNK-AEBMJ'
					    });
					uni.getLocation({
					    type: 'gcj02',
					    success: function (res) {
					        // console.log('当前位置的经度：' + res.longitude);
					        // console.log('当前位置的纬度：' + res.latitude);
							qqmapsdk.reverseGeocoder({
								location: { 
								latitude: res.latitude,
								longitude: res.longitude
								},
								success(res){
									context.state.city=res.result.address_component.city
									context.dispatch('getNowPlayingList')
									context.dispatch('getSoonPlayingList')
									context.dispatch('getnewBestPlayingList')
									context.dispatch('getTop250PlayingList')
									uni.hideLoading();
								}
							})
					    }
					});
					
			    },
				fail(res){
					console.log(res)
					//如果没有授权,给出用户提示
					uni.showToast({
						icon:'none',
					    title: '需要获取您的位置,否则部分功能无法使用',
					    duration: 2000
					});
				}
			})
		},
		//获取当前热映的电影
		getNowPlayingList(context){
			getNowMovie({
				start:"0",
				count:"8",
				city:"context.state.city"
				
			}).then((result)=>{
				let [error, data1]  = result;
						context.state.nowPlayingList=data1.data.subjects;
						context.state.title=data1.data.title;
						
						
			})
	    },
		//获取即将上映的电影
		getSoonPlayingList(context){
			getSoonMovie({
				start:"0",
				count:"8",
				city:"context.state.city"
			}).then((result)=>{
				let [error,data1]=result;
				context.state.soonPlayingList=data1.data.subjects;
				context.state.title2=data1.data.title
				// console.log(data1.data.subjects)
				// console.log(data1.data.title)
			})
		},
		//获取新片榜
		getnewBestPlayingList(context){
			getNewBestMovie({
				start:"0",
				count:"8",
				city:"context.state.city"
			}).then((result)=>{
				let [error,data1]=result;
				context.state.newBestPlayingList=data1.data.subjects;
				context.state.title3=data1.data.title
				// console.log(data1.data.subjects)
				//  console.log(data1.data.title)
			})
		},
		//获取Top250
		getTop250PlayingList(context){
			getTOP250Movie({
				start:"0",
				count:"8",
				city:"context.state.city"
			}).then((result)=>{
				let [error,data1]=result;
				context.state.top250PlayingList=data1.data.subjects;
				context.state.title4=data1.data.title
				// console.log(data1.data.subjects)
				//  console.log(data1.data.title)
			})
		}
	    
},
})