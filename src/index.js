import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
ReactDOM.render(

  //React.createElement('div',null,"Hello world from create element"),
  React.createElement('div',null,React.createElement('span',null,"hellow inside span")),//when we provide small character it will built in component. if we provide Large this is custome tage 
  //rhia is critical methon we make tage inside tages like this
  document.getElementById('root')
); */
 ReactDOM.render(
  //make attributes like
  <div><App name="Ghulam Abbas" age={24} /></div>, //by default it is string if you want number  then use curly brackets


 // <App/>,

  //<div>hello world</div> ,//this is javascript objeect 
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  //  <div>hellow world</div>,  //behind the scence javascript create javascript Object
  document.getElementById('root')
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
