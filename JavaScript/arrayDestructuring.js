function data() {
    return ["Mayank1", "TechnoFunnel1", "ABC", "jhdsgfj", "jhfsd"];
}

// Array Destructuring
var [a, b, ...c] = data();

console.log(a, b)

console.log(c)