import { useState, useEffect } from "react";
import Axios from "axios";

export default function EmployeeList() {
    var imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxe097xgIuRJ3O6kLNFxj69adDgSCKWysgg&s";
    var [employeeList, setEmployeeList] = useState([]);
    var [count, setCount] = useState(setTime());
    var [countData, setCountData] = useState(setTime());
    
    function getEmployeeList() {
        Axios.get("http://localhost:8000/employees").then((response) => {
            setEmployeeList(response.data)
        })
    }
    
    function setTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds()
    }
    
    function deleteEmployee(event) {
        Axios.delete("http://localhost:8000/employees/" + event.target.name).then(() => {
            var newEmp = employeeList.filter((employee) => {
                return employee.id == event.target.name ? false : true;
            })
            setEmployeeList(newEmp)
        })
    }
    
    useEffect(() => {
        console.log("sdgfhsdkfg")
    });
    
    useEffect(() => {
        getEmployeeList()
        console.log("Use Effect 1");
        setInterval(() => {
            setCount(setTime())
        }, 1000)
    }, []);
    
    useEffect(() => {
        console.log("Use Effect 2")
    }, []);
    
    useEffect(() => {
        console.log("Use Effect 3")
    }, []);
    
    useEffect(() => {
        if (employeeList.length < 3) {
        }
    }, [employeeList]);
    
    useEffect(() => {
        if (employeeList.length < 3) {
        }
    }, [countData, count]);
    
    useEffect(() => {
        if (employeeList.length < 3) {
        }
    }, [countData, count]);

    return (
        <div>
            <h1>Employee List is given Below: {count}</h1><hr/>
            {employeeList.map((employee) => {
                return (
                    <div style={{margin: "5px", display: "inline-block"}}>
                        <div className="card" style={{ width: "18rem", color: "grey"}}>
                            <img src={imageUrl} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{employee.name}</h5>
                                <p className="card-text">Some quick example text to build on the card title.</p>
                                <input type="button" onClick={deleteEmployee} name={employee.id} value={"Delete " + employee.name} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}