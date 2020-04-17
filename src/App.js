import React, {Component} from 'react';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';
import home  from './pages/home';
import detail from './pages/detail';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component{
    render(){
        return (
        	<Provider store={store}>
        		<div>
        			<Header />
        			<BrowserRouter>
        				<div>
	        				<Route path='/' exact component={home}></Route>
	        				<Route path='/detail' exact component={detail}></Route>
        				</div>
        			</BrowserRouter>
        		</div>
            </Provider>
            )
    }
}

export default App;
