import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './hello.css'; 
import App from './App';
import { BrowserRouter, Route, Link, Switch, Redirect} from "react-router-dom"
import reportWebVitals from './reportWebVitals';

function Hello() {
  return <h1>Hello</h1>
}

function World(props) {  
  var result;
  var courseName = props.match.params.course;
  if (courseName == 'react') {
      result = <h1>React Rocks! </h1>

  }

  else {
      result = <h1>Not as good as React :)</h1>
  }
  return result;
}

function Random(props) {      
  return <h1>Random{props.match.params.data}</h1>
}


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Link to={"/hello"}> Hello</Link><br/>
      <Link to={"/world"}>World</Link>
    <Switch>
    <Route exact path="/" render={()=><Redirect to="/hello"/>}/>
    <Route path="/hello" component={Hello}/>
    <Route exact path="/world/:course" component={World}/>
    <Route path="/:data" component={Random}/>
    </Switch>
    </div>
    </BrowserRouter>,
    document.getElementById('root')
  
  
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
