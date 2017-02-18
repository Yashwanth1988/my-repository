let initialState = {
	isFetching : false,
	posts : [],
	error : false
}

export default function(state=initialState,action) {
    console.log('logging...!');
	switch(action.type){
		case 'FETCHING_POSTS': {
			return Object.assign({},state,{
				isFetching  : true,
				error : false
			})
		}
		case 'FETCHED_POSTS': {
			console.log(action.response);
			return Object.assign({},state,{
				isFetching  : false,
				error : false,
				posts : action.response.data
			})
		}	
		case 'FECTHING_FAILED': {
			return Object.assign({},state,{
				isFetching  : false,
				error : true,
				errorMessage : action.response
			})
		}
		default : 
			return state;
	}

	return state;
}