const baseUrl="http://douban.uieee.com"
//正在上映的接口
export const getNowMovie=params=>(
		uni.request({
		    url: `${baseUrl}/v2/movie/in_theaters`, 
		    data: params,
		    header: {
		        'Content-Type': 'json' 
		    }
			//不加success 默认直接返回一个promise
		    // success: (res) => {
		    //     console.log(res.data);
		    // }
		})
	
)
//即将上映的接口
export const getSoonMovie=params=>(
		uni.request({
		    url: `${baseUrl}/v2/movie/coming_soon`, 
		    data: params,
		    header: {
		        'Content-Type': 'json' 
		    }
		})
	
)
//新片榜
export const getNewBestMovie=params=>(
		uni.request({
		    url: `${baseUrl}/v2/movie/new_movies`, 
		    data: params,
		    header: {
		        'Content-Type': 'json' 
		    }
		})
	
)
//TOP250电影
export const getTOP250Movie=params=>(
		uni.request({
		    url: `${baseUrl}/v2/movie/top250`, 
		    data: params,
		    header: {
		        'Content-Type': 'json' 
		    }
		})
	
)
//电影详情
export const getDetailMovie=id=>(
		uni.request({
		    url: `${baseUrl}/v2/movie/subject/${id}`, 
		    header: {
		        'Content-Type': 'json' 
		    }
		})
	
)