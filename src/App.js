import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
// function App(props) {
  function App({name,age}){  //this is called distructing this is new javascript property
   //return <div>hellow world form j.s name {props.name} Who age is {props.age}</div> //this is not html nor tag this is now JSX javascript xml code
    return <div>hellow world from j.s {name} who age is {age-5}

              <br/>
              <Hello firstname={name} age={age}/>
            </div>
   // you can add multi tangs in div but not outside the div 
   //(
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
