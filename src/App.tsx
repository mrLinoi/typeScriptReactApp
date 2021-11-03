import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accrodion";
import {Rating} from "./components/Rating/Rating";

//function declaration
function App() {
    //что-то делает
    //обязана вернуть JSX
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={2}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={4}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>;
}

export default App;
