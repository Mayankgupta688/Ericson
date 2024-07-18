import { useState, useRef } from "react";

export default function VirtualDOM() {
    var [name, setName] = useState("Mayank");
    var [age, setAge] = useState(0);
    
    let uncontrolledElement = useRef(null);
    
    function updateName() {
        setAge(10)
        setName("Anshul");
        uncontrolledElement.current.value = "398402";
        uncontrolledElement.current.style.color = "red";
    }
    
    return (
        <>
            <h1>User Name is: {name}</h1>
            <h2>This is Random DIV</h2>
            <input type="text" ref={uncontrolledElement} />
            <input type="button" value="Click to Update" onClick={updateName} />
        </>
    )
}