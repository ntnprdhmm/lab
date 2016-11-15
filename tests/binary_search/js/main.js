$(document).ready(function() {

    console.log('[READY] jQuery loaded !');

    let arr = [10, 52, 30, 98, 56, 47, 85, 32, 12];

    arraySort();

    // display the array and fill the select 
    for(let i = 0; i < arr.length; i++) {
        $('#tosearch').append('<option value="' + arr[i] + '">' + arr[i] + '</option>');
        $('#array').append('<div class="item">' + arr[i] + '</div>');
    }

    $('#search').click(function() {
        console.log('[CLICK] search...');
        let tosearch = parseInt($('#tosearch').val());
        let items = $('.item');
        let found = false;
        // do the binary search
        let L = 0;
        let R = arr.length - 1;
        while(!found) {
            let m = Math.floor((L + R) / 2);
            // if current (arr[m]) is greater than tosearch, go the left, else if lower go to right, else if equal, it's done
            if(arr[m] > tosearch) {
                R = m - 1;
            } else if(arr[m] < tosearch) {
                L = m + 1;
            } else {
                found = true;
                L = m;
                R = m;
                console.log('[FOUND] ' + m);
            }
            // set backgrounds to red
            for(let i = L; i > -1; i--) {
                if($(items[i]).css('background') == 'red') {
                    break;
                }
                $(items[i]).css('background', 'red');
            }
            for(let i = R; i < items.length; i++) {
                if($(items[i]).css('background') == 'red') {
                    break;
                }
                $(items[i]).css('background', 'red');
            }
            // if win, set the background to green
            if(found) {
                $(items[L]).css('background', '#32c232');
            }
            
        }
    });

    /**
     * sort arr
     */
    function arraySort() {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < (arr.length - i); j++) {
                if(arr[j] > arr[j+1]) {
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

});