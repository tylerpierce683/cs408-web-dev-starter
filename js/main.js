//window.onload = loaded;
let helloButton = document.getElementById("hello").onclick = sayHello;

/**
 * This function alerts the user with message 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    alert('Hello fellow CS 408 Classmates! :)');
    return 'hello';
}