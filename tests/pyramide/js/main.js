$(document).ready(function() {

    const app = {
        COLORS: ['blue', 'green', 'red', 'yellow', 'orange', 'black', 'purple', 'brown', 'grey'],
        T_HEIGHT: 62,   // 40px + margin bot of 22px
        T_WIDTH: 42,    // 40px + margin left 1px + margin right 1px
    }

    console.log('[READY] jQuery loaded !');

    $('#build').click(function() {

        console.log('[CLICK] build pyramide');

        let height = parseInt($('#height').val());

        // if the height is ok, draw the pyramide
        if (!isNaN(height)) {
            // clear the current pyramide
            $('.pyra').empty();
            // get the page width and height
            const W_WIDTH = $(window).width();
            const W_HEIGHT = $(window).height();
            // search the max pyramide height for this window
            const MAX_NB_WIDTH = (Math.floor(W_WIDTH / app.T_WIDTH) / 2) - 1;
            const MAX_NB_HEIGHT = Math.floor(W_HEIGHT / app.T_HEIGHT);
            const MAX = MAX_NB_HEIGHT > MAX_NB_WIDTH ? MAX_NB_WIDTH : MAX_NB_HEIGHT;
            console.log(MAX_NB_WIDTH);
            console.log(MAX_NB_HEIGHT);
            // check if the height value is ok for the window size
            if (height > MAX) {
                height = MAX;
            }
            // built the new one
            for (let i = 0; i < height; i++) {
                let row = $('<div class="pyra-row"></div>');
                for (let j = 0; j < (i*2 + 1); j++) {
                    // foreach triangle, rand a color
                    row.append('<div class="arrow-up ' + app.COLORS[Math.floor(Math.random() * app.COLORS.length)] + '"></div>');
                }
                $('.pyra').append(row);
            }
        }

    });

});