<template>
	<view class="container">
		<view class="bannerList">
		<swiper class="swiper" 
		        indicator-dots="true" 
				autoplay="true" 
				interval="5000">
		    <swiper-item
					v-for="(item,index) in nowPlayingList"
					:key="index">
		        <image 
				      :src="item.images.small" 
					  mode="widthFix" 
					  @click="toDetail(item.id)"
					  class="slider"
				      >
				</image>
		    </swiper-item>
		</swiper>
		</view>
		<scroll-view scroll-y="true" show-scrollbar="true">
		<!-- 正在上映的电影 -->
		<view class="list">
		<view class="title">{{title}}<text @click="toClass(title)">></text></view>
		<view>
		    <scroll-view style="white-space: nowrap;" scroll-x="true" >
		        <view id="demo1" style="background: red;width: 180px;height: 100px;display: inline-block;"
		    	      v-for="(item,index) in nowPlayingList"
		    		  :key="index"
					  class="slider">
		    		<image :src="item.images.small" 
		    		       mode="aspectFill"
		    			   @click="toDetail(item.id)"></image>
		    		<view class="name">{{item.title}}</view>
		    	</view>
		    </scroll-view>
		</view>
		</view>
		<!-- /正在上映的电影 -->
		<!-- 即将上映的电影 -->
		<view class="list">
		<view class="title">{{title2}}<text @click="toClass(title2)">></text></view>
		<view>
		    <scroll-view style="white-space: nowrap;" scroll-x="true" >
		        <view id="demo1" style="background: red;width: 180px;height: 100px;display: inline-block;"
				      v-for="(item,index) in soonPlayingList"
					  :key="index"
					  class="slider">
					<image :src="item.images.small" 
					       mode="aspectFill"
						   @click="toDetail(item.id)"></image>
					<view class="name">{{item.title}}</view>
				</view>
		    </scroll-view>
		</view>
		</view>
		<!-- /即将上映的电影 -->
		<!-- 新片榜 -->
		<view class="list">
		<view class="title">{{title3}}<text @click="toClass(title3)">></text></view>
		<view>
		    <scroll-view style="white-space: nowrap;" scroll-x="true" >
		        <view id="demo1" style="background: red;width: 180px;height: 100px;display: inline-block;"
				      v-for="(item,index) in newBestPlayingList"
					  :key="index"
					  class="slider">
					<image :src="item.images.small" mode="aspectFill" @click="toDetail(item.id)"></image>
					<view class="name">{{item.title}}</view>
				</view>
		    </scroll-view>
		</view>
		</view>
		<!-- /新片榜 -->
		<!-- TOP250-->
		<view class="list">
		<view class="title">{{title4}}<text @click="toClass(title4)">></text></view>
		<view>
		    <scroll-view style="white-space: nowrap;" scroll-x="true" >
		        <view id="demo1" style="background: red;width: 180px;height: 100px;display: inline-block;"
				      v-for="(item,index) in top250PlayingList"
					  :key="index"
					  class="slider">
					<image :src="item.images.small" mode="aspectFill" @click="toDetail(item.id)"></image>
					<view class="name">{{item.title}}</view>
				</view>
		    </scroll-view>
		</view>
		</view>
		<!-- /TOP250 -->
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toDetail(id){
				uni.navigateTo({
				    url: "../detail/detail?id="+id
				});
			},
			toClass(title){
				uni.navigateTo({
					url:"../class/class?title="+title
				})
			}
		},
		computed:{
			//从仓库中获取当前城市
			city(){
				return this.$store.state.city
			},
			//从仓库中获取当前热映的电影
			nowPlayingList(){
				return this.$store.state.nowPlayingList
			},
			title(){
				return this.$store.state.title
			},
			title2(){
				return this.$store.state.title2
			},
			title3(){
				return this.$store.state.title3
			},
			title4(){
				return this.$store.state.title4
			},
			//从仓库中获取即将上映的电影
			soonPlayingList(){
				return this.$store.state.soonPlayingList
			},
			//从仓库中获取新片榜
			newBestPlayingList(){
				return this.$store.state.newBestPlayingList
			},
			//获取Top250
			top250PlayingList(){
				return this.$store.state.top250PlayingList
			}
		}
	}
</script>

<style scoped lang="scss">
	.container{
		background: #2C405A;
		.bannerList{
			.swiper{
				height: 400upx;
				.slider{
					width: 100%;
				}
			}
		}
		.list{
			margin-top: 40upx;
			background: #2e4461;
			.title{
				color: #fff;
				margin-left: 20upx;
				padding: 10upx 0;
				text{
					float: right;
					padding: 0 10upx;
				}
			}
			.slider{
				width: 180upx;
				margin-left: 20upx;
				display: inline-block;
				text-overflow: ellipsis;
				image{
					width: 100%;
					height: 550upx;
				}
				.name{
					text-align: center;
					color: #fff;
					overflow: hidden;
				}
			}
		}
	}

</style>
