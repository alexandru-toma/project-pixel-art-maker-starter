$(function(){
    let colorInput, gridHeight, gridWidth;
    const tablePixelCanvas = $('#pixel_canvas');
    const inputForHeight = $('#input_height');
    const inputForWidth = $('#input_width');

    $('#submit_button').click(function(event){
        event.preventDefault();
        tablePixelCanvas.children().remove();
        getInputValues();
        makeGrid(gridHeight, gridWidth);
    });

    $('#reset_button').click(function(){
        event.preventDefault();
        location.reload();
    });

    tablePixelCanvas.click(function(e){
        getInputValues();
        let tdIndex = $('td', this).index(e.target);
        $('td').eq(tdIndex).css('background-color', colorInput);
    })

    function makeGrid(gridHeight, gridWidth){     
           for(let i = 0; i < gridHeight; i++){
                tablePixelCanvas.append('<tr></tr>');
                for(let j = 0; j < gridWidth; j++){
                    $('tr').last().append('<td></td>');
                }            
            }
        }

    function getInputValues(){
        colorInput = $('#colorPicker').val();
        gridHeight = $('#input_height').val();
        gridWidth = $('#input_width').val();
    }

    function verifyPositiveNumberPicked(value){
       if (value < 0)
            return false;
        return true;
    }

    function verifyValidNumberPicked(value){
        if($.isNumeric(value))
            return true;
        return false;
    }

    inputForHeight.on('change', function(event){       
        if (!verifyPositiveNumberPicked($(this).val()) || !verifyValidNumberPicked($(this).val())) {
            $('#input_height').val(1);
            alert('You must pick a valid number !');
        }
    });

    inputForWidth.on('change', function(event){    
        if (!verifyPositiveNumberPicked($(this).val()) || !verifyValidNumberPicked($(this).val())) {
            $('#input_width').val(1);
            alert('You must pick a valid number !');
        }
    });
});

