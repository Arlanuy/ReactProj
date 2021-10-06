import React from 'react';
import ReactDOM from 'react-dom';

var courseunits = [
    {"id": 1, "name": "Angular", "educator": "Rob"},
    {"id": 2, "name": "ReactJS", "educator": "John"},
    {"id": 3, "name": "Ajax", "educator": "Mack"}
];

class Educator extends React.Component {
    constructor(props) {
        super(props);

        this.state = { courseData: courseunits, selected: false};

        console.log("Initialization phase: 'constructor()' executed");
    }

    componentWillMount = () => {
        console.log("Mounting phase: 'componentWillMount()' executed");
    }

    render = () => {
        var users = this.state.courseData;
        console.log("Mounting phase: 'render' executed");

        return (
            <div>
                <h4> UI Courses list</h4>
                <div> {
                    users.map((userDetails) => {
                        return (<div key={userDetails.id}>
                        <b>Course: </b>{userDetails.name} <br/>
                        <b>Educator: </b>{userDetails.educator} <br/>
                        <button onClick={this.clickHandler}>Details</button></div>);
                    })}
                
                
                </div>
                <button onClick={this.exitComponent}>Exit</button>
            </div>
        );
    }

    componentDidMount = () => {
        console.log("Mounting phase: 'componentDidDmount()' executed");
    }

    clickHandler = () => {
        console.log("Details button is clicked, state will change");
        this.setState({selected: true});
    }

    exitComponent = () => {
        console.log("Exit button is clicked, component will be destroyed");
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    }

    componentWillUnmount = () => {
        console.log("Un-mounting phase: 'componentwillunmount()' executed");
    }
}

export default Educator;

