import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accrodion";


function hello() {
    alert('hello it-incubator');
}

// hello();

//function declaration
function App() {
    //что-то делает
    //обязана вернуть JSX
    console.log("App rendering")
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>"This is APP component"</>;
}

function Rating() {
    console.log("Rating rendering");
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    );
}

function Star() {
    console.log("Star rendering");
    return (
        <div>star</div>
    );
}

export default App;
