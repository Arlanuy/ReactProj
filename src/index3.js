import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './hello.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

const emp1 = {
  name: 'Jack',
  salary: 1000
}

const emp2 = {
  name: 'Jane',
  salary: 2000
}

const dept1 = {
  name: 'Finance',
  exp:3
}

const dept2 = {
  name: 'Facilities',
  exp:2
}

function increment(salary) {
  salary += 1000
  return salary;
}

class Employee extends React.Component{
  constructor(props) {
    super(props)
    this.state={salary:this.props.personal.salary}
  }

  handleIncrement= () => {
    this.setState({salary:this.state.salary + 1000});
    this.setState((prevState) => {return this.state.salary =  increment(prevState.salary)});
    this.setState((prevState) => {return this.state.salary = increment(prevState.salary)});
    console.log("Button was clicked");
  }

  render() {  
    return (<div>
      <h1>{this.props.personal.name}</h1>
        <b>{this.state.salary}</b>
          <Department deptName={this.props.dept.name} exp={this.props.dept.exp}/>
          <button onClick = {this.handleIncrement}>Increment Salary</button>

    </div>)
  }
}

class Department extends React.Component{

  constructor(props) {
    super(props)
  }

  render() {
    return(<ol>
      <li>{this.props.deptName}</li>
      <li>Working since {this.props.exp} years</li>
    </ol>)
  }
}

function handleIncrement2() {
  console.log("Button was clicked");
}

function Employee2(props) {
  console.log(props)
  if (props.personal != undefined && props.dept != undefined)
  return (
    <div>
      <h1>{props.personal.name}</h1>
        <b>{props.personal.salary}</b>
          <Department deptName={props.dept.name} exp={props.dept.exp}/>
          <button onClick = {handleIncrement2}>Increment Salary</button>

    </div>
  )
}

function Department2(props) {
  return (
    <ol>
      <li>{props.deptName}</li>
      <li>Working since {props.exp} years</li>
    </ol>
  )
}

//props introduction
const element= <div><Employee personal={emp1} dept={dept1} /><Employee personal={emp2} dept={dept2}/></div>;
ReactDOM.render(
  element,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
