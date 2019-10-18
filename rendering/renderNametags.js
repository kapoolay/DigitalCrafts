
function renderNametags(nametags) {
    let names ='';

    for (let i = 0; i < nametags.length; i++) {
        names += `
        <div class='tag'>
            <div class='bluetag'>Hello, my name is:</div>
            <div class='name'>${nametags[i]}</div>
        </div>
        `
    }
    return names;
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}