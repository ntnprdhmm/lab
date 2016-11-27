const app = {
    letters: 'abcdefghijklmnopqrstuvwxyz '.split('')
}

class Gene {

    constructor (phrase) {
        this._fitness = 0;
        this._value = '';
        for (let i = 0; i < phrase.length; i++) {
            this._value += app.letters[Math.floor(Math.random() * app.letters.length)]; 
            if (this._value[i] == phrase[i]) {
                this._fitness++;
            }
        }
    }

    calcFitness (phrase) {
        let score = 0;
        for (let i = 0; i < phrase.length; i++) {
            if (this._value[i] == phrase[i]) {
                score++;
            }
        }
        this._fitness = score;
    }

}

class Population {

    constructor (phrase, popsize, rate) {
        this._population = [];
        this._matingPool = [];
        this._phrase = phrase;
        this._generation = 0;
        this._finished = false;
        this._mutationRate = rate;
        // init population
        for (let i = 0; i < popsize; i++) {
            this._population[i] = new Gene(phrase);
        }
    }

    generation () {
        while (!this._finished && this._generation < 250) {
            // generate a mating pool
            this.matingPool();
            // pick a new population in the mating pool 
            this.generate();
            // calculate the fitness of each population gene
            this.calcFitness();
            // look at each gene to check if one has the right phrase
            this.evaluate();
            
            this._generation++;
        }
    }

    matingPool () {
        // reset the pool
        let pool = [];
        // push n time each gene in the mating pool, with n = the gene fitness 
        // better is a gene fitness, better is his chance to be picked in the next population
        for (let i = 0; i < this._population.length; i++) {
            for (let j = 0; j < this._population[i]._fitness; j++) {
                pool.push(this._population[i]);
            }
        }

        this._matingPool = pool;
    }

    generate () {
        let newPopulation = [];
        // replace each gene of the current population by a new one
        console.log(this._matingPool.length);
        for (let i = 0; i < this._population.length; i++) {
            // pick 2 genes in the mating pool
            let g1 = this._matingPool[Math.floor(Math.random() * this._matingPool.length)];
            let g2 = this._matingPool[Math.floor(Math.random() * this._matingPool.length)];
            // cross them and do the mutation
            let cross = Math.floor(Math.random() * g1._value.length);
            let childValue = '';
            for (let j = 0; j < g1._value.length; j++) {
                // mutation in the same time
                if(Math.random() < this._mutationRate) {
                    childValue += app.letters[Math.floor(Math.random() * app.letters.length)];
                } else {
                    if (j < cross) {
                        childValue += g1._value[j];
                    } else {
                        childValue += g2._value[j];
                    }
                }
            }
            g1._value = childValue;
            // push it to the new population
            newPopulation.push(g1);
        }
        // set population
        this._population = newPopulation;
    }

    calcFitness () {
        for (let i = 0; i < this._population.length; i++) {
            this._population[i].calcFitness(this._phrase);
        }
    }

    evaluate () {
        let maxFitness = 0;
        let index = 0;
        for (let i = 0; i < this._population.length; i++) {
           if (this._population[i]._fitness > maxFitness) {
               maxFitness = this._population[i]._fitness;
               index = i;
           }
        }
        // check the maxFitness
        if (maxFitness == this._phrase.length) {
            this._finished = true;
        }
        document.getElementById('phrases').innerHTML += '<div>' + this._population[index]._value + '</div>';
    }

}

let population = new Population("hello world", 200, 0.05);
population.generation();
