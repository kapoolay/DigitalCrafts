// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp



window.addEventListener('load', function() {
    let myButton = document.getElementById('section-header');
    let count=0;

    myButton.addEventListener('click', function() {
        document.getElementById('section').style.display='none'
        count += 1;
        if (count % 2) {
            section.style.display='block';
        } 
    })
})

// window.addEventListener('load', function() {
//     let displayingSection = true;


// })