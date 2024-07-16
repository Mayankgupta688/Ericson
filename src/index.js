import ReactDOM from "react-dom";
import CompanyDetails from "./components/CompanyDetails";

var root = ReactDOM.createRoot(document.getElementById("root"));

var userNames = ["Mayank", "Ankit", "Ashish"];
var userDetails = [{
    userName: "Mayank",
    userAge: 20,
    userDesignation: "Developer"
}, {
    userName: "Meha",
    userAge: 20,
    userDesignation: "Developer"
}, {
    userName: "Ankit",
    userAge: 20,
    userDesignation: "Developer"
}]

root.render(<CompanyDetails userNames={userNames} userDetails={userDetails}></CompanyDetails>);
 