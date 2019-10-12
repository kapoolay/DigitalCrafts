// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

let button = document.getElementById("myButton");

button.addEventListener('click', function() {
    let boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.background = "#0000ff";
    }
})