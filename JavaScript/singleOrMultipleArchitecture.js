// Single Threaded...

// Single Threaded Execution Model - Synchronous. - Waiting

// With Multiple thread is background for Asynchronous Task - Asynchronous / Time Consumer / On the fly

http://latentflip.com/loupe/?code=c2V0VGltZW91dChmdW5jdGlvbiBvbmUoKSB7CiAgICBjb25zb2xlLmxvZygiYWJjIikKfSwgMTAwMDApCgpzZXRUaW1lb3V0KGZ1bmN0aW9uIHR3bygpIHsKICAgIGNvbnNvbGUubG9nKCJhYmMiKQp9LCA1MDAwKQoKc2V0VGltZW91dChmdW5jdGlvbiB0aHJlZSgpIHsKICAgIGNvbnNvbGUubG9nKCJhYmMiKQp9LCAwKQoKc2V0VGltZW91dChmdW5jdGlvbiBmb3VyKCkgewogICAgY29uc29sZS5sb2coImFiYyIpCn0sIDMwMDAwKQoKc2V0VGltZW91dChmdW5jdGlvbiBmaXZlKCkgewogICAgY29uc29sZS5sb2coImFiYyIpCn0sIDUwMDAwKQoKZm9yKHZhciBpID0gMCA7IGk8IDU7IGkrKykgewogICAgY29uc29sZS5sb2coaSkKfQoKZnVuY3Rpb24gYWJjKCkgewogICAgdmFyIHN1bSA9IDAKICAgIGZvcih2YXIgaSA9IDAgOyBpPCAxNTsgaSsrKSB7CiAgICAgICAgc3VtID0gc3VtICsgaTsKICAgIH0KfQoKYWJjKCk%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

setTimeout(function one() {
    console.log("abc")
}, 10000);

setTimeout(function two() {
    console.log("abc")
}, 5000)

setTimeout(function three() {
    console.log("abc")
}, 0)

setTimeout(function four() {
    console.log("abc")
}, 30000)

setTimeout(function five() {
    console.log("abc")
}, 50000)

for(var i = 0 ; i< 5; i++) {
    console.log(i)
}

function abc() {
    var sum = 0
    for(var i = 0 ; i< 15; i++) {
        sum = sum + i;
    }
}

abc()