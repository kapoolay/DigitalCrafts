
function renderRectangle(arrayEl) {
    return `
        <div class="text-center mt-5">
            <div style="width:${arrayEl.width}px;height:${arrayEl.height}px;background-color:${arrayEl.color}"></div>
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