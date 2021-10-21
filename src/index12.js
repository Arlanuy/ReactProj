import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './hello.css'; 

import { useEffect, useState } from 'react';


function Sample2() {
    const[name, setName] = useState("Jack");
    const[age, setAge] = useState(20);

    useEffect(()=>{
        console.log("use Effect called");
    }, [age]);

    return(
        <div>
            <h1>Your name is: {name}</h1><br></br>
            <h1>Your age is {age}</h1><br></br>
            <button onClick={()=>setName("Jill")}>Change Name</button>
            <button onClick={()=>setAge(age + 1)}>Change Age</button>
        </div>
    );
}




ReactDOM.render(
    <Sample2/>,
    document.getElementById('root')
  
  
  );


