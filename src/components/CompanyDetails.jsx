import React, { Fragment } from "react";

export function CompanyDetails(props) {
    
    function iterateEmployee() {
        var newJSXArray = props.userNames.map(function(name) {
            return <h4>Employee Name is {name}</h4>
        });
        
        return newJSXArray;
    }
    
    function iterateEmployeeDetails() {
        var userDetailsJSX = props.userDetails.map(function (user) {
            return (
                <React.Fragment>
                    <h3>User Name is {user.userName}</h3>
                    <h4>User Age is {user.userAge}</h4><hr/>
                </React.Fragment>
            )
         })
        
        return userDetailsJSX;
    }
    
    return (
        <>
            <h1>List of Employees is the company:</h1>
            
            {iterateEmployee()}<hr /><hr />
            
            {iterateEmployeeDetails()}<hr /><hr />
            
            <h1>This is Inline Iteration:</h1>
            
            {props.userDetails.map((user) => {
                return (
                    <Fragment>
                        <h3>User Name is {user.userName}</h3>
                        <h4>User Age is {user.userAge}</h4><hr />
                    </Fragment>
                )
            })}
        </>
    )
}

// Filter, Map, foreach, sort - Higher Order Function in JavaScript