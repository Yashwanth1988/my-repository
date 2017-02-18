import React, {Component} from 'react'
import {connect} from 'react-redux'

class PostDetails extends Component {
	render(){

		console.error(this.props.selectedPost.id);

		if(this.props.selectedPost.id){
			return(
					<div>
						<h1>You have selected the below post</h1>
						<h3>{this.props.selectedPost.title}</h3>
						<p>{this.props.selectedPost.body}</p>
					</div>
				)
	    } 

	    if(!this.props.selectedPost.id){
			return(
					<div>
						<h1>You have NOT selected any post</h1>
					</div>
				)
	    } 
	}
}


function mapStateToProps(state){
	return {
		selectedPost : state.postSelected
	}
}

export default connect(mapStateToProps)(PostDetails);