$(document).ready(function() {

    console.log('[READY] jQuery loaded !');

    // add listener on clode button => click on body to hide the popup
    $('#hide').click(function() {
        console.log('[CLICK] hide popup');
        hidePopup();
    });

    // add listener on the open button
    $('#show').click(function() {
        console.log('[CLICK] show popup');
        showPopup();
    });

    $('#clear').click(function() {
        console.log('[CLICK] clear inputs');
        $('input').each(function(i, e) {
            $(e).val('');
        });
    });

    /**buttons-container
     * show the pop up
     * => display and z-index positiv
     * => set title and content
     */
    function showPopup () {
        $('#popup').css('z-index', '20000');
        $('#popup .popup-title').text($('#title').val());
        $('#popup .popup-content').text($('#content').val());
        $('.hide-container').show();
        $('#popup').show();
    }

    /**
     * hide the pop up
     * => display none and z-index negativ
     * => empty the title and content
     */
    function hidePopup () {
        $('#popup').css('z-index', -20000);
        $('#popup').hide();
        $('#popup .popup-title').text('');
        $('#popup .popup-content').text('');
        $('.hide-container').hide();
        $('.container').css('background', '#FAFAFA');
    }

});