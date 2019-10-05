import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  console.log("props in App : " , props);
  return (
    <div className="App">
      <p>Demo_REDUX</p>
      <p>{props.user}</p>
      <button onClick={() => props.updateUser("KIM SOOYOUNG")}>액션디스패치</button>
    </div>
  );
}

// store의 state를 props로 mapping해야함.
const mapStateToProps = (state) => (
  // 왼쪽은 props, 오른쪽은 store의 state
  {
    products : state.products,
    user : state.user,
  }
);

// action을 dispatch해주는 function이 props를 매핑
const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 action을 dispatch해주는 function
  updateUser : (name) => dispatch(updateUser(name))
});

// export default App;

// 커링펑션, HoC
export default connect(mapStateToProps , mapActionToProps)(App);