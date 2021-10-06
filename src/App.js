import logo from './logo.svg';
import './App.css';
import React from 'react';
import Employee from './Employee'
import Educator from './Employee2'
import Book from './Book'

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

  fetchEmployees2 = () => {
    

    return  <Educator/>
  }

  fetchEmployees3 = () => {
    const book1 = {
      "title": "Angels and Demons",
      "publisher": "Penguin Random House",
      "author": "Dan Brown",
      "price": 409,
      "prodId": 2012
      }
  
    const book2 = {
    "title": "Norse Mythology",
    "publisher": "Bloomsbury Publishing",
    "author": "Neil Gaiman",
    "price": 300,
    "prodId": 2019
    }
  
  var bookDetails = [book1, book2];

    return bookDetails.map(book => <Book key={book.prodId} book={book}/>)

  }

  render() {
      return (
          <div>
              <h3 className="text-primary"> Course Details</h3>
            
              {this.fetchEmployees3()}
          </div>
      )
  }
}
