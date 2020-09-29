<template>
	<view class="container" v-if="Object.keys(details).length!==0">
		<image class="repeat-img" :src="details.images.small"></image>
		<view class="shade">
			<image  class="repeat-img1" :src="details.images.small"></image>
			   <view class="nar">
				   <view class="title">
					   {{details.title}}
				   </view>
				   <view class="eva">
					   <view>评分:{{details.rating.average}}</view>
				   </view>
				   <view class="des">
					   <view>摘要</view>
				   </view>
				   <view class="cont">
					   <text>
						   {{details.summary}}
					   </text>
				   </view>
			   </view>
		</view>
	</view>
</template>

<script>
	import {getDetailMovie} from '../apis/api.js'
	export default {
		data() {
			return {	
				details:{}
			}
		},
		onLoad(option) {
			uni.showLoading({
			    title: '加载中'
			});
			getDetailMovie(option.id).then((res)=>{
				let [err,data]=res
				this.details=data.data
				uni.hideLoading({
				    title: '加载中'
				});
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.container{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	.repeat-img{
		width: 100%;
		height: 100%;
	}
	.repeat-img1{
		width: 70%;
		height: 70%;
	}
	.shade{
		width: 100%;
		height: 100%;
		z-index: 100;
		overflow-x: auto;
		position: absolute;
		background: rgba(255,255,255,0.7);
		top: 0;
		text-align: center;
		.image{
			width: 640upx;
			height: 800upx;
			margin-top: 40upx;
		}
	}
	.nar{
		color: #444;
		padding: 0 60upx;
		.title{
			font-size: 40upx;
			text-align: center;
		}
		.eva{
			font-size: 30upx;
			text-align: left;
			view{
				margin-top: 20upx;
			}
		}
		.des{
			font-size: 40upx;
			text-align: left;
			font-weight: bold;
			margin-top: 20upx;
		}
	}
}
</style>
