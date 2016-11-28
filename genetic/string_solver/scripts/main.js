let app = {
    _histElement: document.getElementById('current')
}

/**
 * init the app global, which contains the data for the GA
 */
function setup () {
    // target phrase
    app._target = "hello world abc";
    // population size
    app._popsize = 200;
    // mutation rate
    app._mutation = 0.01;
    // create the population
    app._population = new Population(app._target, app._popsize, app._mutation);
};

/**
 * Update the data on the screen
 */
function draw () {
    app._histElement.innerHTML += '<tr><td>' + app._population._generation + '</td><td>' + app._population._best +'</td><td>' + app._population._bestScore + '</td></tr>';
}

/**
 * Run the algorithm
 */
function run () {
    // while the phrase is still not found, run the algorithm
    while (!app._population._finished) {
        // generate the mating pool
        app._population.naturalSelection();
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