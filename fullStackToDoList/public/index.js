document.addEventListener('DOMContentLoaded', init)

function init() {
    const init = document.getElementById('content')
    const adminResults = document.getElementById('admin-results')
    const userIdResults = document.getElementById('userid-results')
    const useridDiv = document.getElementById('userid-div')
    const adminButton = () => {
            axios.get('/api/todos/')
                .then((res) => {
                    data = JSON.stringify(res.data.userId)
                    adminResults.innerHTML = data
                })
    }

    const userIdGet = () =>{
        let userId = document.getElementById('id-user').value
        if(!userId) {displayErr(); return}
        userId = encodeURI(userId)
        axios.get(`/api/todos/${userId}`)
        .then(displayList)
        .catch((er) =>{
            console.error(er)
        })
    }



    const buttons = (evt) =>{
        evt.preventDefault()
        console.log(evt.target.id)
        if (evt.target.id === 'admin') adminButton()
        if(evt.target.id === 'button-user') userIdGet()
        if(evt.target.id === 'add-button') addTodo()
        if(evt.target.id === 'send-data') sendToData()
    }


    init.addEventListener('click', buttons)
    let additional = []
    function addTodo(){
        let item = document.getElementById('todo-make').value
        additional.push(item)
        console.log(additional)
        return additional
    }
    function sendToData(){

        axios.post('/api/todos', additional)
        .then((res) =>{
            console.log(res)
            if(res.data.success = "true")
            additional = []
        })


        //After sending array make array empty
    }


    function encodeURI (search) {
        let urlEncodedSearchString = encodeURIComponent(search)
        return urlEncodedSearchString
      }

      function displayErr (){
          alert('No userID')
      }


    function displayList(res){
        
        let html =  `<div>
                        <h1>Todo</h1>
                        <ul id='todo-list'>   
                        </ul>    
                    </div>
                    <h3>Add to your ToDo List</h3>
                    <form>
                        <input id="todo-add" type="text"  placeholder="Todo">
                        <button id="button-todo">Add</button>
                    </form>
        
        `
        userIdResults.innerHTML = html

        for(let i = 0; i < res.data.todo.length; i++){
            console.log(res.data.todo[i])
            let text = document.createElement('LI')
            let textNode = document.createTextNode(res.data.todo[i])
            text.appendChild(textNode)
            document.getElementById("todo-list").appendChild(text)
        }
        for(let i = 0; i < res.data.done.length; i++){
            console.log(res.data.todo[i])
            let text = document.createElement('LI')
            let textNode = document.createTextNode(res.data.todo[i])
            text.appendChild(textNode)
            document.getElementById("todo-list").appendChild(text)
        }

    }
}