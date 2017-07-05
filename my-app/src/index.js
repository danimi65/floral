import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Calendar from './containers/Calendar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


ReactDOM.render(
	<Router>
	<div>
		<div className="nav-div">
		<Link to="/">Home </Link> 
        <Link to="/calendar">| Calendar</Link>
		</div>
	<Route exact path="/" component={ App } />
  	<Route path="/calendar" component={ Calendar } />
	</div>
	</Router>,
	 document.getElementById('root'));
registerServiceWorker();
