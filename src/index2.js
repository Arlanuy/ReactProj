import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './hello.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

function calculate(a, b) {
  if (a < b) {
    return <i>React</i>
  }

  return <i>Angular</i>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')


);

var courseNames=['React', 'Angular', 'Javascript']
var jsxArray = []

function generateJSX() {
  for (let i = 0; i < courseNames.length; i++) {
    jsxArray.push(<li>{courseNames[i]}</li>)
  }

  return jsxArray;
}

function displayList() {
  return (
    <ol>
      {courseNames.map((topic, index) => <li key={index}>{topic}</li>)}
    </ol>
  )
}

function generateJSX2() {
  
  return courseNames.map(course=> <li>{course}</li>)
}
const element2 = <ol>{generateJSX2()}</ol>

var instyle = {
  'border-radius': '5px',
  'border-color': 'blue'
}

function createCard(emp) {
  var note = null;
  if (emp.age < 25) {
    note = <span className="text-info"></span>
  }

  return (
    <div key={emp.empId} className="card" style={{"width": 200}}>
      <img className="card-img-top" src={emp.image} height="200" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title text-center">{emp.empName}</h5>
        <p className="card-text">
          <span>Id: {emp.empId}</span><br/>
          <span>Age: {emp.age}</span>{note}<br/>
          <span>Salary: {emp.salary}</span><br/>
        </p>
        <a href="#" className="btn btn-primary">Edit Details</a>
      </div>
    </div>
  )
}

function getEmployeeDetails() {
  const emp1 = {
    "empId": 100,
    "empName": "Jack",
    "age": 24,
    "salary": 40000,
    "image": "emp1.png"
  }

  const emp2 = {
    "empId": 101,
    "empName": "Jane",
    "age": 24,
    "salary": 40000,
    "image": "emp2.png" 
  }

  const empArr = [emp1, emp2];

  const element = (
    <div>
      <h3 className="text-center text-primary">Employee details</h3>
      {empArr.map(emp=> createCard(emp))}

    </div>
  )

  return element;
}

function createBook(book) {
  var note = null;

  return (
    <div key={book.prodId} className="book" style={{"width": 200}}>
      <div className="book-body">
        <h5 className="book-title text-center">{book.title}</h5>
        <ol className="book-text">
          <li>Price: {book.price}</li><br/>
          <li>Publisher: {book.publisher}</li>{note}<br/>
          <li>Authory: {book.author}</li><br/>
        </ol>
      </div>
    </div>
  )
}

function getBookDetails() {
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

  const bookArr = [book1, book2];

  const element = (
    <div>
      <h3 className="text-center text-primary">Book details</h3>
      {bookArr.map(book=> createBook(book))}

    </div>
  )

  return element;
}

const element=<h1 className="text-success helloworld" style={instyle}>Hello World {calculate(1, 2)}</h1>
ReactDOM.render(
  getBookDetails(),
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
