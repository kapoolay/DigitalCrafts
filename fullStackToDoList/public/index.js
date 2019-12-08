$(document).ready(function(){
  requestAllTodos();

  function requestAllTodos(){
    $.get('/api/todos', function(data){
      console.log(data);
      $('#todo_items_list').html(renderTodo(data));
    });
  }

  function renderTodo(data) {
    let html = '<ol>';
    data.forEach(element => {
      html += `<li>${element.todo}<button class='delete-todo' ${element.id}>Delete</button></li>`;
    });
    html += '</ol>';
    return html;
  }

  $('#addTodo').click(function(){
    let text = $('#new_todo').val();

    if(text == ''){
      alert('Please add a todo text');
      return;
    }

    text = text.split('\n');
    text.forEach(el => {
      $.post('/api/todos', { 'todo': el });
    })
    requestAllTodos();
    $('#new_todo').val('');
    
  });

  $('#deleteToDo').click(function() {
    console.log('deleting');
  })
});