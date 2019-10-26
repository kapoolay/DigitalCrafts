async function fetchAllBreeds(){
    let response = await fetch('https://dog.ceo/api/breeds/list/all');
    let responseObject = await response.json();
    console.log(responseObject);
    let content = dropdownContent(responseObject);

    document.getElementById('typeHTML').innerHTML = 'TYPE';
    document.getElementById('drop-down').innerHTML = content;

  }


function dropdownContent(responseObject){
let allBreeds = Object.keys(responseObject.message)
console.log(allBreeds);
// console.log(allBreeds[0]);
let dropDown = '<select id="breed-dropdown">';

    for (let i = 0; i < allBreeds.length; i++) {
        dropDown += `<option value="${allBreeds[i]}">${allBreeds[i]}</option>`;
    }
    
dropDown += '</select>';
return dropDown;
console.log(dropDown);
}


async function fetchDoggo(element) {
element.value = "Generating doggo...";

let dropdownBreed = document.getElementById('breed-dropdown');


if (dropdownBreed == null) {
    var response = await fetch('https://dog.ceo/api/breeds/image/random');
} else {
    selectedbreed = dropdownBreed.selectedOptions[0].value;
    var response = await fetch('https://dog.ceo/api/breed/' + selectedbreed + '/images/random');

    console.log(response)
}

// let response = await fetch('https://dog.ceo/api/breeds/image/random');
let responseObject = await response.json();
console.log(responseObject);
let content = renderDoggo(responseObject);
document.getElementById("content").innerHTML += content;
element.value = "Fetch Doggo...";
}



function renderDoggo(responseObject) {
return `<img src="${responseObject.message}"
style="
max-width:300px;
max-height:300px;
padding:10px;
"/>`
}