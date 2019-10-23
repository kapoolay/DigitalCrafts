function renderSurveys(surveys) {
    var surveysHTML = surveys.map(function(survey){
        return `
            <form class="mx-auto my-5 w-50">
                <h1>${survey.title}</h1>
                <hr/>
                ${renderFields(survey.fields)}
                <button class="btn btn-primary" type="submit">${survey.submitButtonText}</button>
            </form>
        `
    });

    return `
        <div class=" mt-5">
            ${surveysHTML.join('')}
        </div>
    `
}

function renderFields(fields) {
    var fieldsHTML = fields.map(function(field, index){
        if (field.type === "radio") {
            return `
                <div class="form-group">
                    <label>${field.label}</label>
                    ${field.options.map(function(option) {
                        return `
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radio${index}" value="${option}"/>
                                <label class="form-check-label">${option}</label>
                            </div>
                        `
                    }).join('')}
                </div>
            `
        } else if (field.type === "text") {
            return `
                <div class="form-group">
                    <label>${field.label}</label>
                    <textarea ></textarea>
                </div>
            `
        }
    });

    return fieldsHTML.join('');
}

function surveys() {

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    var content = document.getElementById('content');
    content.innerHTML = renderSurveys(surveysAbstraction);

}