import React from 'react';

class Employee extends React.Component {
    constructor() {
        super();
        this.state = {
            achievements: null,
        };
    }


    render() {
        var note = null;
        var redirect = null;

        if (this.props.emp.age < 25) {
            console.log("In card, salary", this.props.emp.salary)
            note = <span className="text-info">- Fresher</span>
        }

    
        return (
        <div  className="card" style={{"width": 200}}>
            <img className="card-img-top" src={"./emp1.png"} height="200" alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title text-center">{this.props.emp.empName}</h5>
            <p className="card-text">
                <span>Id: {this.props.emp.empId}</span><br/>
                <span>Age: {this.props.emp.age}</span>{note}<br/>
                <span>Salary: {this.props.emp.salary}</span><br/>
            </p>
            <p>
                <i>{this.state.achievements}</i>

            </p>
            <button className="btn btn-success"
            onClick={() => {this.setState({ achievements: this.props.emp.achievements});
        }}>View</button>
        <button className="btn btn-success"
        onClick={() => {this.setState({ achievements: null});
        }}>Hide</button>
        {redirect}
            </div>
        </div>
        );
    }
  }

  export default Employee