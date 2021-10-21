import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './hello.css';
import EditEmployee from './EditEmployee';
import MyComponent from './MyComponent';   
import App from './App';
import { BrowserRouter, Route } from "react-router-dom"
import reportWebVitals from './reportWebVitals';

class Registration extends React.Component {
  constructor() {
    super();

    this.state = {
      nameError:'',
      ageError:'',
      nameValid:false,
      ageValid:false,
      successMessage:''
    }
  }

  validateName=(event)=>{
    var name=event.target.value;

    if (name.length < 5) {
      this.setState({nameError: "Name is invalid", nameValid:false});
    }

    else {
      this.setState({nameError: "Name is valid", nameValid:true});
    }
  }

  validateAge=(event)=>{
    var age=event.target.value;

    if (age< 25) {
      this.setState({ageError: "Age is invalid", ageValid:false});
    }

    else {
      this.setState({ageError: "Age is valid", ageValid:true});
    }
  }

  register=(event)=>{ 
    event.preventDefault();
    this.setState({successMsg: 'The registration was successful'});
  }

  edit_employee=(event)=>{
    event.preventDefault();
  }



  render() {
    var element = <button  type="edit_emp" >Edit Employee</button>;

    return (
      <div>
      <form onSubmit={this.register}>
        <input onChange={this.validateName}/> <span>{this.state.nameError}</span><br></br>
        <input onChange={this.validateAge} type="number"/><span>{this.state.ageError}</span><br/>
        <button  type="submit" disabled={!(this.state.ageValid && this.state.nameValid)}>Register</button>
        <h4>{this.state.successMessage}</h4>
        
      </form>,
      <EditEmployee/>,
      </div>
    )
  }
}



ReactDOM.render(
    <BrowserRouter>
      <Registration/>
      <Route
        path='/edit/'
        render={ props => <MyComponent {...props} />}
      />
    </BrowserRouter>,
    document.getElementById('root')
  
  
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
