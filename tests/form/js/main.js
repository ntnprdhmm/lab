$(document).ready(function() {

    const rgx = {
        login: '^[A-Za-z0-9]{5,30}$',
        pwd: '^[^\\s]{6,20}$'
    }

    console.log('[READY] jQuery loaded !');

    // add listener on form submit button
    $('#signup').click(function(e) {
        e.preventDefault();
        console.log('[CLICK] form submitted');
        if (checkfields()) {
            console.log('[FORM] form valid');
            //$('#signup-form').submit();
            return true;
        }
        console.log('[FORM] form invalid');
        return false;
    });

    /**
     * Check if the fields are valid in the signup form.
     * @Return bool => the fields validity
     */
    function checkfields() {
        if($('#login').val().match(rgx.login)) { 
            console.log('   [CHECK] login ok');
            if($('#pwd').val().match(rgx.pwd)) {
                console.log('   [CHECK] pwd ok');
                if($('#pwd').val() == $('#pwd_conf').val()) {
                    console.log('   [CHECK] conf ok');
                    return true;
                }
            }
        }
        return false;
    }

});