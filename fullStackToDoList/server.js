var express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(__dirname + '/public'))




const getDataFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile('data.json', (err, data) => {
            if (err) reject(err)

            data = JSON.parse(data.toString())
            resolve(data)
        })
    })
}



// GET /api/todos
app.get('/api/todos', (req, res, nextFn) => {
    console.log('Someone called the GET /api/todos')
    getDataFile('data.json')
        .then((data) => {
            console.log(data.todoList)
            res.json(data.todoList)
        })
})






// GET /api/todos/:id
app.get('/api/todos/:id', (req, res, nextFn) => {
    let id = req.params.id

    getDataFile('data.json')
        .then((data) => {
            console.log(data.todoList.userId[id])
            if (data.todoList.userId[id]) {
                res.json(data.todoList.userId[id])
            }
        })
        .catch((e) => {
            console.log(e)
            res.status(404)

        })

})





// POST /api/todos
app.post('/api/todos', (req, res, nextFn) => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log('This should be req.body', req.body)
    getDataFile('data.json')
        .then((data) => {
            let ifNum = true
            let id = 1
            while (ifNum) {
                if (data.todoList.userId[id])
                    id++
                else
                    ifNum = false
            }

            let todoList = data.todoList.userId
            todoList[id] = {"todo": req.body}
            jsonData = JSON.stringify(data)
            console.log('This is life', jsonData)
            fs.writeFile('data.json', jsonData, (err) => {
                if (err) throw err
                res.send({
                    succes: 'true'
                })
            })


        })


})

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res, nextFn) => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~')

    let id = req.params.id
    getDataFile('data.json')
        .then((data) => {
            if (data.todoList.userId[id])
                data.todoList.userId[id] = req.body

            return data
        })
        .then((data) => {
            jsonData = JSON.stringify(data)
            fs.writeFile('data.json', jsonData, (err) => {
                if (err) throw err
                res.send({
                    succes: 'true'
                })
            })
        })
})

// DELETE /api/todos/:id
app.delete('/api/todos/:id', (req, res, nextFn) => {

    getDataFile('data.json')
        .then((data) => {
            delete data.todoList.userId[req.params.id]
            return data
        })
        .then((data) => {
            jsonData = JSON.stringify(data)
            fs.writeFile('data.json', jsonData, (err) => {
                if (err) throw err
                res.send({
                    delete: 'true'
                })
            })
        })
})



app.listen(3000, () => {
    console.log('server is listening...')
})