


$(document).ready(function(){
  console.log('document is loaded');


  //button click listeners
  $('.color-button').on('click',function(){
    console.log($(this).data('color'));
  })

})
