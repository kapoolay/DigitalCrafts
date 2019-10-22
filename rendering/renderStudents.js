function renderStudents(students) {
    let studentsHTML = `
    <div style="display: flex; flex-direction: column; align-items: center;">
        <h1>Roll Call!</h1>
    </div>
    `
    for (let i = 0; i < students.length; i++) {
        if (students[i].isPresent) {
            studentsHTML += `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="background-color: lightgreen; border: 1px solid black;margin: 10px; width: 250px;text-align: center;">
                    <h3>${students[i].name}</h3>
                    <div>Present</div>
                </div>
            </div>
            `
        } else {
            studentsHTML += `
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div style="background-color: orangered; border: 1px solid black;margin: 10px; width: 250px;text-align: center;">
                    <h3>${students[i].name}</h3>
                    <div>Absent</div>
                </div>
            </div>
            `
        }
    }


    return studentsHTML;
}

function students() {

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
        },
        {
            name: "Kev",
            isPresent: true
        },
    ]

    var contentEl = document.getElementById('content');
    contentEl.innerHTML = renderStudents(studentsAbstraction);
}