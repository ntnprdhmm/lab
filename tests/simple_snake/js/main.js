$(document).ready(function() {

    console.log('[READY] jQuery loaded !');

    const app = {
        WIDTH: 20,
        HEIGHT: 20,
        LENGTH: 5,
        snake: []
    }

    let rows = null;

    initGrid();

    $('#reset').click(function() {
        console.log('[GRID] init');
        initGrid();
    });

    function moveSnake(x, y) {
        let snake = app.snake;
        app.snake = [];
        // new head 
        app.snake.push({
            x: x,
            y: y
        });
        $('tr').eq(y).find('td').eq(x).addClass('blue');
        // update the old snake 
        $('tr').eq(snake[0].y).find('td').eq(snake[0].x).addClass('red').removeClass('blue');
        app.snake.push({
            x: snake[0].x,
            y: snake[0].y
        });
        for(let i = 1; i < 4; i++) {
            app.snake.push({
                x: snake[i].x,
                y: snake[i].y
            });
        }
        $('tr').eq(snake[4].y).find('td').eq(snake[4].x).removeClass('red');
    }

    /**
     * Empty the grid and create a snake in a random position inside the grid
     */
    function initGrid() {
        rows = null
        let html = '';
        for(let i = 0; i < app.HEIGHT; i++) {
            html += '<tr>';
            for(let j = 0; j < app.WIDTH; j++) {
                html += '<td></td>';
            }
            html += '</tr>';
        }
        $('#grid').html(html);
        rows = $('#grid').find('tr');

        // handle clicks on the grid
        $('td').click(function(){
            console.log('[CLICK] on the grid');
            // if the TD is next to the head, move the snake
            let y = $('tr').index($(this).closest('tr'));
            let x = $('tr').eq(y).find('td').index($(this));
            if( ((app.snake[0].x == x) && ((app.snake[0].y == y - 1) || (app.snake[0].y == y + 1))) || ((app.snake[0].y == y) && ((app.snake[0].x == x - 1) || (app.snake[0].x == x + 1))) ) {
                moveSnake(x, y);
            }
        });
        
        createSnake();
    }

    function createSnake() {
        app.snake = [];
        // head coordinates
        app.snake.push({
            x: Math.floor(Math.random() * app.WIDTH),
            y: Math.floor(Math.random() * app.HEIGHT)
        });
        drawSnake();
    }

    function drawSnake() {
        // draw the head
        getTD(0).addClass('blue');
        // draw the end of the snake
        while(app.snake.length < 5) {
            let randoms = ['up', 'right', 'down', 'left'];
            // rand
            let r = randoms[Math.floor(Math.random() * randoms.length)];
            // get coordinates
            let x = app.snake[app.snake.length - 1].x;
            let y = app.snake[app.snake.length - 1].y;
            switch(r) {
                case 'up':
                    y--;
                    break;
                case 'right':
                    x++;
                    break;
                case 'down':
                    y++;
                    break;
                case 'left':
                    x--;
                    break;
            }
            // check if r is possible (coordinates are in the grid and the snake is not already in this part of the grid)
            if(x >= 0 && x < app.WIDTH && y >= 0 && y < app.HEIGHT) {
                if(!$(rows[y]).find('td').eq(x).hasClass('blue') && !$(rows[y]).find('td').eq(x).hasClass('red')) {
                    app.snake.push({
                        x: x,
                        y: y
                    });
                    $(rows[y]).find('td').eq(x).addClass('red');
                }
            }
        }
    }

    /**
     * Get the TD of the TR with the index i
     */
    function getTD(i) {
        return $(rows[app.snake[i].y]).find('td').eq(app.snake[i].x);
    }

});
