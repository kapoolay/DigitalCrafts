
function renderStudents(students) {
    let student = '';

    for (let i = 0; i < students.length; i++) {
        student = `
        <div class='studentBox'>
            <div>${students.name}</div>
            <p>${student.isPresent ? 'Present' : 'Absent'}</p>
        </div>
        `
    }
    return student;
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}