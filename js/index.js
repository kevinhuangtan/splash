$(window).load(function() { 
  $('img').click(function(){
    $('img').hide();
  })
  $('p').click(function(){
    $('img').show();
  })
  $('.changeName').click(function(){
      $('.changeName').text('nicki');
  })

});