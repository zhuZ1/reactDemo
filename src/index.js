import React from 'react'; // react核心库
import ReactDOM from 'react-dom'; // 提供与dom相关的功能
// import './index.css'; 公共css样式
import App from './App';
import * as serviceWorker from './serviceWorker'; // 加快react运行速度的组件

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
