var redClicks = 0;
var yellowClicks = 0;
var greenClicks = 0;
var blueClicks = 0;
var clickedColor = '';


$(document).ready(function(){
  console.log('document is loaded');


  //button click listeners
  $('.color-button').on('click',function(){
    clickedColor = $(this).data('color')
    incrementClickedColor();
    drawColorCubeOnDOM();
  })

})

function incrementClickedColor(){
  console.log('incrementClickedColor has been called');
  if(clickedColor === 'red'){
    redClicks++;
    $('#red').text(redClicks);
  } else if(clickedColor === 'yellow'){
      yellowClicks++;
      $('#yellow').text(yellowClicks);
  } else if(clickedColor === 'green'){
      greenClicks++;
      $('#green').text(greenClicks);
    } else if(clickedColor === 'blue'){
      blueClicks++;
      $('#blue').text(blueClicks);
    }
}

function drawColorCubeOnDOM(){
  $('.container').append('<div class="color-cube"></div>');
  $('.color-cube').last().addClass(clickedColor);

}

// function paintCube(){
//   if (clickedColor == 'red')
//
// }



//
