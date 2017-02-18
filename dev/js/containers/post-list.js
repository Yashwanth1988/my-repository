import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {selectPostAction , fetchPosts} from '../actions/index'

class PostList extends Component{
	createPostList(){
		console.error(this.props.errorMsg);

		if(this.props.error){
			return (
				<h2>Error : {this.props.errorMsg}</h2>
			)	
		}

		if(this.props.fetching){
			return (
				<h1>Please Wait...While fetching records...!</h1>
			)	
		}

		let myStyle = {
			border: "1px solid red",
			background : "blue",
			color : "#fff",
			fontWeight : "bold",
			padding : "20px",
			margin : "10px",
			textTransform : "uppercase"
		}

		return this.props.posts.map((post) => {
			return (
					<div key={post.id}
						onClick={() => this.props.selectPostAction(post)}>
						<div style={myStyle}>{post.title}</div>
					</div>
				)
		})
	}

	render(){
		return(
			<div>
				{this.createPostList()} <br/>
				<button onClick={() => this.props.getPosts()}>Get Posts</button>
			</div>
		)
	} 
}


function mapStateToProps(state){
	console.log(state);
	return {
		posts : state.postList.posts,
		error : state.postList.error,
		errorMsg : state.postList.errorMessage,
		fetching : state.postList.isFetching
	}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
    		selectPostAction:selectPostAction,
    		getPosts:fetchPosts
    	}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PostList);


