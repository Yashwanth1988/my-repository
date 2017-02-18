
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider as Prov} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {allReducers} from './reducers'
import App from './components/index'


//const store = createStore(allReducers);
/*const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(allReducers);*/

//const store = createStore( allReducers, applyMiddleware( reduxThunk ));



const store = createStore( allReducers , applyMiddleware( thunkMiddleware ));

//store.dispatch(fetchPosts());

ReactDOM.render(
		<Prov store={store}>
			<App />
		</Prov>, document.getElementById('root')
	)