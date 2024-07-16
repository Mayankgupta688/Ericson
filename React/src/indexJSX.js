import ReactDOM from "react-dom";
import React from "react";

var root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<h1>Hello From React Compiler...</h1>);

{/* <div>
    <div>THis is Header</div>
    <div>
        <b>ahsgdiukh</b>
        <h2>sdgjasd</h2>
    </div>
    <div>This is Footer</div>
</div> */}

root.render(React.createElement("div", { id: "my-div" }, [
    React.createElement("div", {}, "THis is Header"),
    React.createElement("div", {}, [
        React.createElement("b", {}, "This is Bold Element"),
        React.createElement("h2", {}, "This is H2 Element")
    ]),
    React.createElement("div", {}, "This is Footer")
]));

//root.render(React.createElement("h1", { id: "Mayank", className: "mayank-class"}, "Hello From React Compiler..."));