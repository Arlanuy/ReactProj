import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App3() {
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
        setCounter2(counter2 + 30)    }

    function updateCounter2() {
        console.log("Button was clicked");
        setCounter2(counter2 + 30);
    }

    var[counter, setCounter] = useState(0);
    var [counter2, setCounter2] = useState(10);
    useEffect(()=> console.log("Component did mount"), []) //will run only once
    useEffect(()=>console.log("Component did update/mount"), [counter]) //will run with state value works like a component date object

    
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
            <button onClick={this.updateCounter2}>Click2</button>
            <h1>Hello React! {this.state.counter}{this.state.counter2}</h1>
            </>
        )
    }

}