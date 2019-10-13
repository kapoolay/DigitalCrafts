// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

document.getElementById('myButton').addEventListener('click', function() {
    let box = document.getElementsByClassName('box');

    for (let i = 0; i < box.length; i++) {
        box[i].style.background = 'blue';
    }
})