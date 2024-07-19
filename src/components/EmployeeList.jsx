import { useState, useEffect } from "react";
import Axios from "axios";
import Employee from "./Employee";
import EmployeeListCount from "./EmployeeListCount";
import AddEmployee from "./AddEmployee";

export default function EmployeeList() {
    var imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxe097xgIuRJ3O6kLNFxj69adDgSCKWysgg&s";
    var [employeeList, setEmployeeList] = useState([]);
    
    useEffect(() => {
        getEmployeeList();
    }, []);
    
    function getEmployeeList() {
        Axios.get("http://localhost:8000/employees").then((response) => {
            setEmployeeList(response.data)
        })
    }
    
    function deleteEmployeeWithName(employeeId, employeeName) {
        Axios.delete("http://localhost:8000/employees/" + employeeId).then(() => {
            var newEmp = employeeList.filter((employee) => {
                return employee.id == employeeId ? false : true;
            })
            
            alert("Employee " + employeeName + " Deleted")
            setEmployeeList(newEmp)
        })
    }

    function deleteEmployee(event) {
        Axios.delete("http://localhost:8000/employees/" + event.target.name).then(() => {
            var newEmp = employeeList.filter((employee) => {
                return employee.id == event.target.name ? false : true;
            })
            setEmployeeList(newEmp)
        })
    }
    function addEmployeeToDatabase(data) {
        debugger;
        if (data) {
            Axios.post("http://localhost:8000/employees/", data).then((response) => {
                getEmployeeList();
            })
        }
    }

    return (
        <div>
            <EmployeeListCount employeeList={employeeList}></EmployeeListCount>
            {employeeList.map((employee) => {
                return <Employee employee={employee} imageUrl={imageUrl} deleteEmployee={deleteEmployee} deleteEmployeeWithName={deleteEmployeeWithName}></Employee>
            })}<br/><br/><hr/>
            
            <AddEmployee addEmployeeToDatabase={addEmployeeToDatabase}></AddEmployee>
            
        </div>
    )
}