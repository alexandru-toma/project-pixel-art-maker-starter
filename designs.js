$(function(){
    let colorInput, gridHeight, gridWidth;
    const tablePixelCanvas = $('#pixel_canvas');
    const inputForHeight = $('#input_height');
    const inputForWidth = $('#input_width');

    $('#submit_button').on('click', function(event){
        event.preventDefault();
        tablePixelCanvas.children().remove();
        getInputValues();
        makeGrid();
    });


    function makeGrid() {
           designCanvas(gridHeight, gridWidth);
       }
       
    function designCanvas(gridHeight, gridWidth){     
           for(let i = 0; i < gridHeight; i++){
                tablePixelCanvas.append('<tr></tr>');
                for(let j = 0; j < gridWidth; j++){
                    $('tr').last().append('<td></td>');
                }            
            }
        }

    function getInputValues(){
        colorInput = $('#color_picker').val();
        gridHeight = $('#input_height').val();
        gridWidth = $('#input_width').val();
    }

    function verifyValidNumberPicked(value){
       if (value < 0)
            return false;
        return true;
    }

    inputForHeight.on('change', function(event){       
        if (!verifyValidNumberPicked($(this).val())) {
            $('#input_height').val(1);
            alert('You must pick a positive number !');
        }
    });

    inputForWidth.on('change', function(event){    
        if (!verifyValidNumberPicked($(this).val())) {
            alert('You must pick a positive number !');
            $('#input_width').val(1);
        }
    });
});

