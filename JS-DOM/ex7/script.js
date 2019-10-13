// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

window.addEventListener('load', function() {
    document.getElementById('section-header').addEventListener('click', function() {
        let section = document.getElementById('section');
        section.style.display === 'none' ? section.style.display = 'block' : section.style.display = 'none';
    })
})