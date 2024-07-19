import "./AddEmployee.css";
import { useState } from "react";

export default function AddEmployee(props) {
    
    var [employee, setEmployee] = useState({
        userName: "",
        userAge: "",
        userId: ""
    });
    
    function updateUserData(event) {
        setEmployee({
            ...employee,
            [event.target.id]: event.target.value
        })
    }
    
    function resetEmployee() {
        setEmployee({
            userName: "",
            userAge: "",
            userId: ""
        })
    }
    
    return (
        <>
            <h1>Entered Name is </h1>
            <div><label>Enter Name</label><input placeholder="Enter Name"  id="userName" value={employee.userName} onChange={updateUserData} type="text"></input><br /></div>
            <div><label>Enter Age</label><input  placeholder="Enter Age" id="userAge" value={employee.userAge} onChange={updateUserData} type="text"></input><br /></div>
            <div><label>Enter Id</label><input   placeholder="Enter Id" id="userId" value={employee.userId}  onChange={updateUserData} type="text"></input><br /></div>
            
            <div><input type="button" value="Add Employee" onClick={function () {
                props.addEmployeeToDatabase({
                    name: employee.userName,
                    age: employee.userAge,
                    id: employee.userId
                })
                
                resetEmployee()
            }} /></div>
        </>
    )
}
