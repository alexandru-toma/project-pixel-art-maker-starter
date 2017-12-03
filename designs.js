$(function(){
    let colorInput, gridHeight, gridWidth;
    const tablePixelCanvas = $('#pixel_canvas');
    const inputForHeight = $('#input_height');
    const inputForWidth = $('#input_width');
    const errorLabel = $('#error_label');

    $('#submit_button').click(function(event){
        event.preventDefault();
        errorLabel.text('');
        tablePixelCanvas.children().remove();
        getInputValues();
        makeGrid(gridHeight, gridWidth);
    });

    $('#reset_button').click(function(event){
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

    function verifyMaximNumberPicked(value){
        if(value > 100)
            return false;
        return true; 
    }

    function setErrorLabel(){
        errorLabel.text("Please insert a valid number! \nThe number has to be positive.\nThe number has to be between 0-100.")
    }

    function performValidation(value){
        if (!verifyPositiveNumberPicked(value) 
        || !verifyValidNumberPicked(value) 
        || !verifyMaximNumberPicked(value)) {
            $('#input_height').val(1);
            $('#input_width').val(1);
            setErrorLabel();
        }
    }

    inputForHeight.on('change', function(event){
        event.preventDefault();       
        performValidation($(this).val());
    });

    inputForWidth.on('change', function(event){    
        event.preventDefault();      
        performValidation($(this).val());
    });

});

