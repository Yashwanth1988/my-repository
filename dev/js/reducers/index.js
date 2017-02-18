import {combineReducers} from 'redux';
import ListOfPosts from './post-list-reducer'
import SelectedPost from './select-post'

export const allReducers = combineReducers({
	postList : ListOfPosts,
	postSelected : SelectedPost
})

//export default allReducers;