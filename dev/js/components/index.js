import React from 'react'
import PostDetails from '../containers/post-details'
import PostList from '../containers/post-list'

const App = () => (
		<div>
			<h2>Post List</h2>
			<PostList />
			<hr />
			<h2>Post Details</h2>
			<PostDetails />
		</div>
	)


export default App;