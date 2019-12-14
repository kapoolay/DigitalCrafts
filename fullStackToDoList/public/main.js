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
        html += `<li>${element.todo} <button class="delete-todo" onclick="deleteButton(${element.id})" data-todoId="${element.id}">Delete Todo</button></li>`;
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
  });
  
  
  function deleteButton(id){
    console.log(id);
    $.ajax({
      url: '/api/todos/' + id,
      type: 'DELETE',
      success: function (){
        console.log('successful');
      }
    });
  }