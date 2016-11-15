$(document).ready(function() {

    console.log('[INFO] document ready');

    // rubik's cube colors
    const colors = [
        'red',
        'yellow',
        'blue',
        'white',
        'orange',
        'green'
    ]

    // handle click on the mix button
    $('#mix').click(function() {
        console.log('[CLICK] rand colors');
        // create a new report line
        let report = $('<div class="report-container"></div>');
        // go throught the squares
        $('.square').each(function(i, e) {
            // memorise the color in the report
            report.append('<div class="report-square ' + $(e).attr('class').split(' ')[1] + '"></div>');
            // set a new random color
            $(e).attr('class', 'square ' + randomColor());
        });
        // draw the report line on the report
        $('#report').append(report);
        // add listener
        addReportListener();
    });

    /**
     * Add the event listener on the reports
     */
    function addReportListener() {
        // handle click on the reports
        $('.report-container').click(function() {
            console.log('[CLICK] set report colors');
            // get the colors in the report
            let colors = $(this).find('.report-square');
            // set the squares
            $('.square').each(function(i, e) {
                $(e).attr('class', 'square ' + $(colors[i]).attr('class').split(' ')[1]);
            })
        });
    }

    /**
     * Rand a color and return it
     * @return String : the color
     */
    function randomColor() {
        // math.floor round the number
        // math.random return a number between 0 and 1
        return colors[Math.floor(Math.random() * colors.length)];
    }

});