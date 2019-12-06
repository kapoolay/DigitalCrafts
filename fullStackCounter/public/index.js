$(document).ready(function () {
    $.get('/value', function (data) {
      $('#count').html(data);
    })
  
    $('#increase').click(function () {
      $.get('/increment', function (data) {
        console.log(data);
        $('#count').html(data);
      });
    });
  
    $('#substract').click(function () {
      $.get('/decrease', function (data) {
        console.log(data);
        $('#count').html(data);
      });
    });
  
    $('#reset').click(function () {
      $.get('/reset', function (data) {
        console.log(data);
        $('#count').html(data);
      });
    });
  });