import axios from 'axios';

export const selectPostAction = (post) => {
	return {
		type : 'SELECT_POST',
		selectedPost : post
	}
}



export const fetchPosts = () => {
	console.log('calling fetchPosts : action');
	return function (dispatch) {
		dispatch(fetching())
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((response) => dispatch(fetched(response))).catch((err) => {
			dispatch(fetchingError("Oops Error fetching post...!"))
		})
	}
}



function fetching(){
	return {
		type : 'FETCHING_POSTS',
		response : ''
	}
}

function fetched(res){
	return {
		type : 'FETCHED_POSTS',
		response : res
	}
}

function fetchingError(errMsg){
	return {
		type : 'FECTHING_FAILED',
		response : "Oops Error fetching post...!"
	}
}