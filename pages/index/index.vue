<template>
	<view class="content" v-if="nowPlayingList.length!==0" > 
		<image :src="nowPlayingList[0].images.medium" mode="aspectFit" class="my-image"></image>
		<button @click="toFirst" type="primary">立即体验</button>
	</view>
</template>

<script>
	// import  permision from '../../permission.js'
	export default {
		data() {
			return {
				// permisionID:"android.permission.ACCESS_FINE_LOCATION"
			}
		},
		onLoad() {

		},
		onReady() {
			// this.requestAndroidPermission(this.permisionID)
			this.$store.dispatch('getCity')
		},
		computed:{
			nowPlayingList(){
				// console.log(this.$store.state.nowPlayingList)
				return this.$store.state.nowPlayingList;
			}
		},
		methods: {
			//获取Android设备上当前App是否有某项权限
			// async requestAndroidPermission(permisionID) {
			//     var result = await permision.requestAndroidPermission(permisionID)
			//     var strStatus
			//     if (result == 1) {
			//         strStatus = "已获得授权"
			// 		this.$store.dispatch('getCity');
			//     } else if (result == 0) {
			//         strStatus = "未获得授权"
			//     } else {
			//         strStatus = "被永久拒绝权限"
			//     }
			//     uni.showModal({
			//         content: permisionID + strStatus,
			//         showCancel: false
			//     });
			// },
			toFirst(){
				uni.redirectTo({
				    url: '../../first/first'
				});
			}	
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
        right: 0;
		.my-image{
			width: 100%;
			height: 90%;
		}
	}
</style>
