
$(document).ready(function() {
  var index = 0;
  $('body').append('<button id="generate">Generate</Button>');




  $('body').on('click', '#generate', function(){
    $('body').append('<div></div>');
    index += 1;
    $('div').append('<p>'+ index +'</p>');
    $('div').append('<button class="swap">Swap</button>', '<button class="delete">Delete</button>');
  });

  $('body').on('click', 'div .swap', function(){
    console.log('swap');
    $(".swap").parent(div).css('background', 'yellow');
  });

  $('body').on('click', 'div .delete', function(){
    var parentTag = $(this).parent().tagName();
    parentTag.remove();
    console.log('delete');
  });

});
