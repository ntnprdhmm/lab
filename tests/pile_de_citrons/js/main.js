$(document).ready(function() {

    // go throught the requests
    loop(0);

    function loop(i) {
        if(i == requests.length)
            return;

        setTimeout(function () {
            // update the header
            $('#number-queries').text(i);
            $('#query-type').text(requests[i].type);
            // check the type of query
            if(requests[i].type == "q1") {
                // q1 => push in the stack
                $('#stack-container').append('<div class="lemon-box"><span>' + requests[i].value + '</span></div>');
                $('#query-message').text(requests[i].value + ' lemons added');
            } else {
                // q2 => pop last value inserted to the stack and print the value
                if($('.lemon-box')) {
                    let box = $('.lemon-box').last();
                    let nb = box.find('span').text();
                    $('#infos-container').append('<p class="lemon-number">' + nb + ' lemons sold</p>');
                    $('#query-message').text(nb + ' lemons sold !');
                    box.remove();
                     // set the color, relative to the value
                    let color = 'price-1';
                    if(nb >= 25 && nb < 50) {
                        color = 'price-2'
                    } else if(nb >= 50 && nb < 75) {
                        color = 'price-3';
                    } else if(nb >= 75) {
                        color = 'price-4';
                    }
                    $('.lemon-number').last().addClass(color);
                } else {
                    $('#query-message').text('the stack is empty :/');
                }
            }

            loop(++i);

        }, 500);
    }

});