$(document).ready(function() {

    const app = {
        title: 'Hello !',
        content: 'I\'m a toast !'
    };

    console.log('[READY] jQuery loaded !');

    $('#toaster').click(function() {
        console.log('[TOAST] toast sent !');
        let toast = buildToast();
        $('#toast-container').append(toast);
        toast.fadeIn(600);
        toast.delay(2500).fadeOut(800, function() {
            $(this).remove();
            console.log('[TOAST] removed');
        });
    });

    /**
     * Create a toast and return it
     */
    function buildToast () {
        let toast = $('<div class="toast"></div>');
        toast.append('<div class="toast-title">' + app.title + '</div>');
        toast.append('<div class="toast-content">' + app.content + '</div>');
        return toast;
    }

});