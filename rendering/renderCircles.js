
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    let myCircles = '';

    for (let i = 0; i < circles.length; i++) {
        myCircles += `<div style="width:${circles[i].radius}px;height:${circles[i].radius}px;background-color:${circles[i].color};border-radius:50%;"></div>`
    }
    return myCircles;


    // return `
    //     <div class="text-center mt-5">
    //         <code>${JSON.stringify(circles)}</code>
    //     </div>
    // `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}