import { useState } from "react";

function higherOrderFunction(ComponentInput) {
    return function InnerComponent() {
        var [userName, setUserName] = useState("Mayank");
        
        function getDataForEmployees() {
            return userName;
        }
        
        return (
            <>
                <h1>This is Generic Component</h1>
                <ComponentInput userName={userName}></ComponentInput>
            </>
        )
    }
}


function HR(props) {
    return <h1>One: Hello All from {props.userName}</h1>
}

function Manager(props) {
    return <h1>Two: Hello All from {props.userName}</h1>
}

export var ComponentHR = higherOrderFunction(HR);
export var ComponentManager = higherOrderFunction(Manager)