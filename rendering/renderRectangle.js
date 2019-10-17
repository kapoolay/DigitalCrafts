
function renderRectangle(rectangle) {
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(rectangle)}</code>
        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}