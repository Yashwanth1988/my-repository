export default function(state={},action){
	console.log('calling selectPost : reducer');
	if(action.type == 'SELECT_POST'){
		return action.selectedPost;
	} 
	return state;
}