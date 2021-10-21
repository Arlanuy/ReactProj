import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App2() {
    return (
        <>
        <Hello></Hello>
        <Hello2></Hello2>
        </>
    );
}

function Hello2() {
    function updateCounter() {
        console.log("Button was clicked");
        setCounter(counter + 1);
    }

    var ret = useState(0);
    console.log(ret);
    var counter=ret[0];

    var setCounter=ret[1];
    console.log("counter is ", counter, "and setcounter is ", setCounter);


    return(
        <>
        <button onClick={updateCounter}>Click</button>
        <h1>Hello React! {counter}</h1>
        </>
    )
}

export default class Hello extends React.Component {
    constructor() {
        super();
        this.state={counter:0}
    }

    updateCounter=()=> {
        this.setState({counter:this.state.counter + 1});
    }
    
    render() {
        return(
            <>
            <button onClick={this.updateCounter}>Click</button>
            <h1>Hello React! {this.state.counter}</h1>
            </>
        )
    }

}