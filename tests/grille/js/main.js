$(document).ready(function() {

    const WIDTH = 15;
    const HEIGHT = 15;

    let app = {
        vertical: false,
        horizontal: false,
        diagonal: false,
        color: '#000'
    }

    console.log('[INFO] document ready');

    drawGrid();

    /**
     * Draw the grid in #grid-container
     */
    function drawGrid() {
        for(let i = 0; i < HEIGHT; i++) {
            // create a new raw
            let raw = $('<div class="raw"></div>');
            // fill the raw with squares
            for(let j = 0; j < WIDTH; j++) {
                raw.append('<div class="block"></div>');
            }
            // append the raw to the grid container to create the grid
            $('#grid-container').append(raw);
        }   
        console.log('[GRID] drawn');
        addGridListeners();
    }

    /**
     * Handle the click on the grid blocks and on the options panel elements
     */
    function addGridListeners() {
        // click on directions checkboxes
        $('#vertical').change(function() {
            app.vertical = !app.vertical;
            console.log('[DIRECTION] toggle vertical : ' + app.vertical);
        });
        $('#diagonal').change(function() {
            app.diagonal = !app.diagonal;
            console.log('[DIRECTION] toggle diagonal : ' + app.diagonal);
        });
        $('#horizontal').change(function() {
            app.horizontal = !app.horizontal;
            console.log('[DIRECTION] toggle horizontal : ' + app.horizontal);
        });
        // color change
        $('#color').change(function() {
            app.color = $(this).val();
            console.log('[COLOR] change color : ' + app.color);
        })
        // when click on a block
        $('.block').click(function() {
            // first, get the coordinate of the block
            const y = $('.raw').index($(this).closest('.raw'));
            const x = $($(this).closest('.raw').find('.block')).index($(this));
            console.log('[COORDINATES] (' + x + ', ' + y + ')');
            // draw the lines
            if(app.horizontal) {
                drawHozizontal(y);
            }
            if(app.vertical) {
                drawVertical(x);
            }
            if(app.diagonal) {
                drawDiagonal(x, y);
            }
        });
    }

    /**
     * Color the blocks on the same line of the clicked block with app.color
     */
    function drawHozizontal(y) {
        $($('.raw').eq(y).find('.block')).each(function(i, e) {
            $(e).css('background', app.color);
        });
        console.log('[DRAW] horizontal line');
    }

    /**
     * Color the blocks on the same column of the clicked block with app.color
     */
    function drawVertical(x) {
        $($('.raw').find('.block:eq(' + x + ')')).each(function(i, e) {
            $(e).css('background', app.color);
        });
        console.log('[DRAW] vertical line');
    }

    /**
     * Draw the diagonal from top left to bottom right which go throught the clicked block
     * => because it's the simplest diagonal to draw
     */
    function drawDiagonal(x, y) {
        drawDiagonalTop(x, y);
        drawDiagonalBot(x, y);
        console.log('[DRAW] diagonal line');
    }

    /**
     * Draw from the block to the top left
     */
    function drawDiagonalTop(x, y) {
        if(x >= 0 && y >= 0) {
            // color this block
            $('.raw').eq(y).find('.block').eq(x).css('background', app.color);
            // recursive call
            drawDiagonalTop(x-1, y-1);
        }
    }

    /**
     * Draw from the block to the bottom right
     */
    function drawDiagonalBot(x, y) {
        if(x < WIDTH && y < HEIGHT) {
            // color this block
            $('.raw').eq(y).find('.block').eq(x).css('background', app.color);
            // recursive call
            drawDiagonalBot(x+1, y+1);
        }
    }

});