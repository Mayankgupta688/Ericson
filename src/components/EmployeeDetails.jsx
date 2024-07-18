import { useState } from "react";

export default function EmployeeDetails() {
    debugger;
    
    var nameData = "Mayank"
    var [name, setName] = useState("Mayank");
    var [count, setCount] = useState(0);
    var [color, setColor] = useState("grey");
    var [currentTime, setCurrentTime] = useState(setTime());
    
    setTimeout(() => {
        setCurrentTime(setTime());
        setCount(count + 1);
    }, 1000)
    
    function setTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds()
    }
    
    function changeColor() {
        setColor(color == "grey" ? "black" : "grey");
    }
    
    function buttonClicked() { setName("Mayank Gupta") }
    
    return (
        <div>
            
            <h1 style={{color: color}}>Current Time is: {currentTime}</h1>
            <h2>Current Count is {count}</h2>
            <div className="card" style={{ width: "18rem", color: "grey"}}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxe097xgIuRJ3O6kLNFxj69adDgSCKWysgg&s" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <input type="button" onClick={buttonClicked} value="Click to Change Name" />
                    <input type="button" onClick={changeColor} value="Change Color" />
                </div>
            </div>
        </div>
    )
}