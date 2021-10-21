import React, {useState} from 'react';
import AddEmployee from './AddEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


const Employees = () => {
    const [employees, setEmployees] = useState([])

    const addEmployee = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    };

    return (<React.Fragment>
        <table style={{width: '60%'} } className='table'>
              <thead className="thead-light">
                  <tr>
                      <th>EmpID</th>
                      <th>Name</th>
                      <th>Designation</th>
                  </tr>
              </thead>
              <tbody>
                  {employees.map(employee => {
                      return (<tr>
                          <td>{employee.empId}</td>
                          <td>{employee.name}</td>
                          <td>{employee.designation}</td>
                      </tr>);
                  })}
              </tbody>
        </table>
        <AddEmployee addEmployee={addEmployee}/>
    </React.Fragment>);
}


export default Employees;