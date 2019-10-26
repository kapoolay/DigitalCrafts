async function fetchAllBreeds(){
    let response = await fetch('https://dog.ceo/api/breeds/list/all');
    let responseObject = await response.json();
    console.log(responseObject);
    let content = dropdownContent(responseObject);
    document.getElementById('drop-down').innerHTML = content;
  }
  function dropdownContent(responseObject){
    /**
     * 
     * code here.
     * 
     * */
    let allBreeds = Object.keys(responseObject.message)
    console.log(allBreeds);
    console.log(allBreeds[0]);
    let dropDown = '<select>';
      /// my logic for drop down options 
      // for(){
        // dropdown += `option`;
      // }
      //
      //
      
    dropDown += '</select>';
    return dropDown;
  }
  async function fetchDoggo(element) {
    element.value = "Generating doggo...";
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let responseObject = await response.json();
    console.log(responseObject);
    let content = renderDoggo(responseObject);
    document.getElementById("content").innerHTML += content;
    element.value = "Fetch Doggo...";
  }
  function renderDoggo(responseObject) {
    return `<img src="${responseObject.message}" style="max-width:300px;"/>`
  }