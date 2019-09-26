/*********************************
 * Hello, you! Part 2

Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously.
 */

 function hello(name = 'world') {
     console.log('Hello, ' + name + '!');
 }


/*
function hello2(name) {
  if (name == undefined) {
    console.log("Hello World");
  } else {
    console.log("Hello " + name);
  }
}
*/

 hello();