<template>
	<view class="container">
		<scroll-view class="scroll" scroll-y="true">
		<view class="wrap" v-for="(item,index) in moviesList" :key="index">
			<view class="left">
				<image mode="aspectFill" :src="item.images.small"></image>
			</view>
			<view class="right">
				<view class="title">{{item.title}}<text class="scro">{{item.rating.average||"即将上映"}}</text></view>
				<view>{{item.year}}</view>
				<view>{{item.genres.join()}}</view>
			</view>
		</view>
		<view style="text-align: center; font-size: 16px; color: #FFFFFF;">没有更多数据了</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				moviesList:[]
			}
		},
		onLoad(option){
			console.log(option.title)
			this.moviesList=this.soonPlayingList
			console.log(this.moviesList)
			
			
		},
		methods: {
		},
		computed:{
			soonPlayingList(){
				return this.$store.state.soonPlayingList
			}
		}
	}
</script>

<style lang="scss">
	.container{
		background: #2C405A;
		overflow: hidden;
		.scroll{
			height: 667*2upx;
		}
		.wrap{
			display: flex;
			border-bottom: 1px solid #C8C7CC;
			padding: 20upx 30upx;
			.left{
				width: 168upx;
				height:208upx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.right{
				flex: 1;
				margin-left: 20upx;
				.title{
					font-size: 40upx;
					color: black;
					
				}
				view{
					font-size: 30upx;
					color: #C0C0C0;
				}
				.scro{
					background: rgba(247,76,49,1);
					padding: 2upx 6px;
					border-radius: 6px;
					color: #fff;
					float: right;
					font-size: 25upx;
				}
			}
			
		}
	}

</style>
