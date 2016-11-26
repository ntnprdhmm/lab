let app = {}

/**
 * init the app global, which contains the data for the GA
 */
function setup () {
    // target phrase
    app._target = "To be or not to be";
    document.getElementById('target').innerText = app._target;
    // population size
    app._popsize = 200;
    // mutation rate
    app._mutation = 0.1;
    // create the population
    app._population = new Population(app._target, app._popsize, app._mutation);
};

/**
 * Draw the current status on the screen
 */
function draw () {

}

setup();