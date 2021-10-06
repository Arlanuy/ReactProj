import logo from './logo.svg';
import './App.css';
import React from 'react';
import Employee from './Employee'

export default class Card extends React.Component {
  constructor() {
      super();
      this.fetchEmployees = this.fetchEmployees.bind(this);
  }

  fetchEmployees = () => {
      var employeeDetails = [
          {"empId": 101, "empName": "Claire", "achievements": "Has got 3 bravo awards and 1 MVP award. Has worked on cutting edge technologies as well", "salary": 50000, "age": 30, "image": "emp1.png"},
          {"empId": 102, "empName": "John", "achievements": "Has got 3 bravo awards and 1 MVP award. Has worked on cutting edge technologies as well", "salary": 50000, "age": 25, "image": "emp2.png"},
          {"empId": 103, "empName": "Daphne", "achievements": "Has got 3 bravo awards and 1 MVP award. Has worked on cutting edge technologies as well", "salary": 80000, "age": 27, "image": "emp3.png"},
          {"empId": 104, "empName": "Matt", "achievements": "Has got 3 bravo awards and 1 MVP award. Has worked on cutting edge technologies as well", "salary": 90000, "age": 31, "image": "emp4.png"},
          {"empId": 105, "empName": "Peter", "achievements": "Has got 3 bravo awards and 1 MVP award. Has worked on cutting edge technologies as well", "salary": 150000, "age": 29, "image": "emp5.png"}
        ]

      return employeeDetails.map(emp => <Employee key={emp.empId} emp={emp}/>)
  }

  render() {
      return (
          <div>
              <h3 className="text-primary"> Employee Details</h3>
              
              {this.fetchEmployees()}
          </div>
      )
  }
}
