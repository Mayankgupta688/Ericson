import React from "react";
import { BrowserRouter, Route, Link, HashRouter } from "react-router-dom";

export default function SinglePageApplication() {

    return (
        <BrowserRouter>
            <>
                <h1>This is the Main Application Header</h1><hr/>
                
                <input type="text"></input>
                
                
                
                <nav>
                    <Link style={{marginLeft: "10px"}} to="/"><img src="" /></Link>
                    <Link style={{marginLeft: "10px"}} to="/help">Help</Link>
                    <Link style={{ marginLeft: "10px" }} to="/about">About</Link>
                    <Link style={{ marginLeft: "10px" }} to="/employee/1">Emp 1</Link>
                    <Link style={{marginLeft: "10px"}} to="/employee/2">Emp 2</Link>
                </nav><hr/>
                
                <nav>
                    <a style={{marginLeft: "10px"}} href="/">Home</a>
                    <a style={{marginLeft: "10px"}} href="/help">Help</a>
                    <a style={{marginLeft: "10px"}} href="/about">About</a>
                </nav>
                
                <div style={{ width: "100%", height: "400px", border: "2px solid red", padding: "50px"}}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/help" component={Help} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/employee/:employeeDetails" component={Employee} />
                </div>
                
                <h3>This is the Main Application Header</h3>
            </>
        </BrowserRouter>
    )
}

function Home() {
    return <h2>This is Home Component</h2>
}

function Employee(props) {
    debugger
    return <h2>This is Employee Component {props.match.params.employeeDetails}</h2>
}

function Help() {
    return <h2>This is Help Component</h2>
}

function About() {
    return <h2>This is About Component</h2>
}