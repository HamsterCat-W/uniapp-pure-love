<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {  
			text: 'text'  
		}
	}
</script>

<style>
	/*每个页面公共css */
	
</style>
