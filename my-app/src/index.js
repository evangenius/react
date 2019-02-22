import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import "./style/common.scss";
// import App from './App';
// import ShowName from './ShowName';
import * as serviceWorker from './serviceWorker';
import * as constants from './constants';
console.log({constants})
// ReactDOM.render(<ShowName />, document.getElementById('root'));
// 建立 Clock 組件
function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
