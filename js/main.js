window.onload = loaded;
let helloButton = document.getElementsByClassName("hello");

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    // const hello = sayHello();
    // console.log(hello);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    alert('hello');
}

if(helloButton != null) {
    helloButton.addEventListener('click', function(e) {
        sayHello();
    })
}