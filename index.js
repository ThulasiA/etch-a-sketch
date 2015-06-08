/* jQuery functions to ask a user for a desired number and display a square grid with Single and Random Colors*/
function initialGrid() {  
    for (var i = 0; i <= 323; i++) {
        $('#container').append('<div class="grid"></div>');   
    }     
    $('.grid').on('mouseenter',function() {
        $(this).addClass('change-color');
    });
};

function randomColor(){
    $('.grid').on('mouseenter',function() {
                    var randomColor = 'rgb(' 
                        + (Math.floor(Math.random() * 255)) + ','
                        + (Math.floor(Math.random() * 255)) + ','
                        + (Math.floor(Math.random() * 255)) + ')';
                    $(this).css('background-color',randomColor);   
                   //$(this).addClass('change-color');
                });
};

$(document).ready(function () {            
    initialGrid();
   
    $('#clear').click(function () {              
        var gridSize = prompt('Please enter the number for a grid');
        var square = gridSize * gridSize;
        $('.grid').remove();
        for (var i = 0; i < square; i++) {      
        $('#container').append('<div class="grid"></div>');          
        } 
        $('.grid').width(900/gridSize).height(900/gridSize);
        $('.grid').on('mouseenter',function () {
        $(this).addClass('change-color');
        });
    });
    
    $('#random').click(function(){ 
        randomColor(); 
    });             
});