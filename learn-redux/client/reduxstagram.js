// let's go!
import React from 'react';

//Allows us to render React to HTML
import { render } from 'react-dom';

//Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

//here is where we are going to write out all the routes that we want to match
 const router = (
 	<Provider store = {store}>
 	<Router history = {history}>
 	<Route path = "/" component={App}>
 	<IndexRoute component={PhotoGrid}> </IndexRoute>
 	<Route path = "/view/:postId" component={Single}></Route>
 	</Route>
 	</Router>
 	</Provider>
 )

render(router, document.getElementById('root'));