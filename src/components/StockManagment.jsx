export default function StockManagment(props) {
    
    function showDetails() {
        return props.salaryDetails.length > 0 ?
            <h3>First Salary from Function was {props.salaryDetails[0]}</h3> :
            <h3>Employee has not received the salary yet....</h3>

    }
    
    return (
        <div>
            <h1>Welcome to TechoFunnel {props.details.userName}</h1>
            <h2>User Age is {props.details.userAge}</h2>
            Output One: {props.salaryDetails.length > 0 && <h3>First Salary was {props.salaryDetails[0]}</h3>}
            Output Two (Used for Heavy Logical Calculations): {showDetails()}<br /><hr />
            
            <h4>Ternary Operator: </h4>
            {props.salaryDetails.length > 0 ?
            <h3>First Salary from Function was {props.salaryDetails[0]}</h3> :
            <h3>Employee has not received the salary yet....</h3>}
        </div>
    )
}


// import ReactDOM from "react-dom";
// import StockManagment from "./components/StockManagment";

// var root = ReactDOM.createRoot(document.getElementById("root"));

// var mySalaryArray = [6];
// var myDetails = {
//     userName: "Mayank",
//     userAge: 20,
//     userDesignation: "Developer"
// }

// root.render(<StockManagment salaryDetails={mySalaryArray} details={myDetails}></StockManagment>);
 