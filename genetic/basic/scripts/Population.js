class Population {

    /**
     * Creates an instance of Population.
     * 
     * @param {any} phrase      => the target
     * @param {any} len         => the populationLength
     * @param {any} mutation    => the mutation rate
     * 
     * @memberOf Population
     */
    constructor (phrase, len, mutation) {
        this._phrase = phrase;          // the phrase to search
        this._population = [];          // Array of DNA (the current generation)
        this._mutation = mutation;      // mutation rate
        this._generation = 0;           // number of generation 
        this._matingPool = [];          // the next generation of DNA
        this._best = "";                // store the best phrase found in the last generation
        this._finished = false;         // true when the phrase has been found

        this.initPopulation(len, phrase.length);
    }

    /**
     * return the best phrase found in the last generation
     * 
     * @readonly
     * 
     * @memberOf Population
     */
    get best () {
        return this._best;
    }

    /**
     * set the best phrase found
     * 
     * 
     * @memberOf Population
     */
    set best (b) {
        this._best = b;
    }

    /**
     * Init the population of DNA
     * 
     * @param {any} populationLength
     * @param {any} phraseLength
     * 
     * @memberOf Population
     */
    initPopulation (populationLength, phraseLength) {
        for (let i = 0; i < populationLength; i++) {
            this._population[i] = new DNA(phraseLength);
        }
        this.calcFitness();
    }

    /**
     * Calculate the fitness of each DNA of this population on this.phrase
     * 
     * 
     * @memberOf Population
     */
    calcFitness () {
        for (let i = 0; i < this._population.length; i++) {
            this._population[i].calcFitness(this._phrase);
        }
    }

    /**
     * Create a mating pool
     * 
     * 
     * @memberOf Population
     */
    naturalSelection () {
        // clear the next population
        this.matingPool = []; 
        // get the max fitness of the current population
        let maxFitness = 0;
        for (let i = 0; i < this._population.length; i++) {
            if (this._population[i].fitness > maxFitness) {
                maxFitness = this._population[i].fitness;
            }
        }
        // selection by probability based on DNA fitness
        for (let i = 0; i < this._population.length; i++) {
            let fitness = map(this._population[i].fitness, 0, maxFitness, 0, 1);
            let n = floor(fitness * 100);  
            for (let j = 0; j < n; j++) {              
                this._matingPool.push(this._population[i]);
            }
        }
    }

    /**
     * Create the new generation from the mating pool
     * 
     * 
     * @memberOf Population
     */
    generate () {
        // Refill the population with DNA selected in the mating pool
        for (let i = 0; i < this._population.length; i++) {
            // choose 2 DNA in the mating pool randomly
            let dna_a = this._matingPool[Math.floor(Math.random() * this._matingPool.length)];
            let dna_b = this._matingPool[Math.floor(Math.random() * this._matingPool.length)];
            // cross the 2 DNA and call mutation function on it
            let child = dna_a.crossover(dna_b);
            child.mutate(this._mutation);
            this._population[i] = child;
        }
        this._generation++;
    }

    /**
     * Search the best phrase in the population and check if it's the target phrase
     * 
     * 
     * @memberOf Population
     */
    evaluate () {
        let score = 0.0;
        let index = 0;

        for (let i = 0; i < this._population.length; i++) {
            if (this._population[i].fitness > score) {
                index = i;
                score = this._population[i].fitness;
            }
        }

        this.best = this._population[i].phrase;
        // check if the best phrase is the right
        if (this._best == 1) {
            this._finished = true;
        }
    }

}