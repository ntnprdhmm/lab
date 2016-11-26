let app = {
    _bestElement: document.getElementById('best'),
    _targetElement: document.getElementById('target'),
    _histElement: document.getElementById('hist')
}

/**
 * init the app global, which contains the data for the GA
 */
function setup () {
    // target phrase
    app._target = "To be or not to be";
    app._targetElement.innerText = app._target;
    // population size
    app._popsize = 200;
    // mutation rate
    app._mutation = 0.1;
    // create the population
    app._population = new Population(app._target, app._popsize, app._mutation);
};

/**
 * Update the screen data
 */
function draw () {
    app._bestElement.innerText = app._population.best;
    app._histElement.innerHTML += '<p>' + app._population.best +'</p>';
}

/**
 * Run the algorithm
 */
function run () {
    // while the phrase is still not found, run the algorithm
    while (!app._population.finished) {
        // generate the mating pool
        app._population.naturalSelection();
        console.log(app._population);
        // create the next generation
        app._population.generate();
        // calcultate the fitness
        app._population.calcFitness();
        // evaluate
        app._population.evaluate();
        draw();
    }
}

setup();
run();