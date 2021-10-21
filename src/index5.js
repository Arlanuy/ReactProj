import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './hello.css'; 
import App from './App';
import { BrowserRouter } from "react-router-dom"
import reportWebVitals from './reportWebVitals';


class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      txtEmpName: 'Jack'
    }
  }

  handleChange = (event) => {
    console.log("Input changed", event.target.value);
    this.setState({txtEmpName:event.target.value});
  }

  render() {
    return (
      <form>
        <input value={this.state.txtEmpName} onChange={this.handleChange}/>
      </form>
    )
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
