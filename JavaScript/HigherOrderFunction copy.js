// Higher Order Function

// 1. Either take function as input function
// 2. Return Function out of the function

function AbortController() {
    function xyz() {
        alert("Hi")
    }
    
    return xyz;
}

// Scenerio 2


function one() { }
function two() { }

function three(a, b) {
    // Do something
    
    one(1);
    
    return a;
}

three(one, two);

// employees.map(function(emp) { })