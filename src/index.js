import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {productReducer} from "./redux/reducers/product";
import {userReducer} from "./redux/reducers/user";
import {allReducers} from "./redux/reducers";
import {store} from "./redux/store";
import {updateUser} from "./redux/actions";

// pure function
// const reducer = (state , action) => {
// 	if(action.type === 'changeState') {
// 		return action.payload.newState;
// 	}
// 	return 'State';
// }

// default parameter 문법 사용







// store.getState()의 결과는 잘 기억해 둡시다!

console.log("store in index : " , store);
console.log("store.getState() in index : " , store.getState());



// store.dispatch(updateUser);

console.log("store.getState() in index : " , store.getState());
// {
// 	products : [],
// 		user : 'KIM SOOYOUNG',
// }

// const action = {
// 	type : 'changeState' ,
// 	payload : {
// 		newState : 'New State',
// 	}
// }

// store.subscribe(() => console.log('subscribe : ' , store.getState()));
// store.dispatch(action);
// console.log("store.getState() in index : " , store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
