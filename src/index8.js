import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './hello.css'; 
import App from './App';
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import axios from 'axios'


class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      empId: '',
      name: '',
      message: '',
      errorMsg: ''
    }
  }

  componentDidMount() {
    axios
    .get("http://localhost:3000/employee/1000")
    .then(response=> {
      this.setState({empId: response.data.empId, name: response.data.empName});
    })
    .catch(error=> {
      if (error.response) {
        this.setState({errorMsg: error.response.data});
        console.log(error.response.data);
      }
    });
  }

  register=()=>{

    let empDetails={
      name:"Jack",
      age: 23
    }
    axios
    .post("http://localhost:3000/register", empDetails)
    .then(response=> {
      this.setState({message:response.data.message});
    })
  }


  render() {
    return (
      <div>
      <h4>{this.state.empId},{this.state.name}, {this.state.errorMsg}</h4>
      <button type="button" onClick={this.register}>Register</button>
      <h4>The response from server was {this.state.message}</h4>
      </div>
    );
  }

}

ReactDOM.render(
    <BrowserRouter>
      <Employee />
    </BrowserRouter>,
    document.getElementById('root')
  
  
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
