var redClicks = 0;
var yellowClicks = 0;
var greenClicks = 0;
var blueClicks = 0;
var clickedColor = '';


$(document).ready(function() {
    console.log('document is loaded');


    //button click event handler
    $('.color-button').on('click', function() {
        clickedColor = $(this).data('color');
        incrementClickedColor();
        drawColorCubeOnDOM();
    })
})


//checks to see the value of clickedColor and increments the appropriate colorClick variable.
function incrementClickedColor() {
    if (clickedColor === 'red') {
        redClicks++;
        $('#red').text(redClicks);
    } else if (clickedColor === 'yellow') {
        yellowClicks++;
        $('#yellow').text(yellowClicks);
    } else if (clickedColor === 'green') {
        greenClicks++;
        $('#green').text(greenClicks);
    } else if (clickedColor === 'blue') {
        blueClicks++;
        $('#blue').text(blueClicks);
    }
}

//appends a new div to the DOM and adds the appropriate class.  CSS handles the background-color property.
function drawColorCubeOnDOM() {
    $('.container').append('<div class="color-cube"></div>');
    $('.color-cube').last().addClass(clickedColor);  //this could have been combined by simply concatenating the class when the Div is first created.
}





//
