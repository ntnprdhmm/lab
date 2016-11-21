class DNA {

    constructor () {
        this.genes = [];
        this.fitness = 0;
        initGenes();
    }

    /**
     * Init the DNA with a random letters or a space
     * 
     * @param {any} len => the number of genes in this DNA
     * 
     * @memberOf DNA
     */
    initGenes (len) {
        for (let i = 0; i < len; i++) {
            this.genes[i] = randomAlphabetChar();
        }
    }

    /**
     * Return a random char of the var alphabet
     * 
     * @returns
     * 
     * @memberOf DNA
     */
    randomAlphabetChar () {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz '.split('');
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    /**
     * Convert the DNA genes to a string and return it
     * 
     * @readonly
     * 
     * @memberOf DNA
     */
    get phrase () {
        return this.genes.join('');
    }

    /**
     * Return the fitness attribute
     * 
     * @readonly
     * 
     * @memberOf DNA
     */
    get fitness () {
        return this.fitness;
    }

    /**
     * Return the percentage of correct characters
     * 
     * @param {any} target => the string to check with
     * @returns
     * 
     * @memberOf DNA
     */
    calcFitness (target) {
        let score = 0;
        for (let i = 0; i < target.length; i++) {
            if (this.genes[i] == target[i]) {
                score++;
            }
        }
        return score / target.length;
    }

    /**
     * Cross two DNA genes at a random point and return the result
     * 
     * @param {any} dna => the other DNA object to cross with
     * @returns
     * 
     * @memberOf DNA
     */
    crossover (dna) {
        let result = new DNA(this.genes.length);
        let crossPoint = Math.floor(Math.random() * this.genes.length);
        for (let i = 0; i < this.genes.length; i++) {
            if (i > crossPoint) {
                result[i] = this.genes[i];
            } else {
                result[i] = dna.genes[i];
            }
        }
        return result;
    }

    /**
     * Change a gene of the DNA pass in parameter randomly, based on a probability
     * 
     * @param {any} rate
     * 
     * @memberOf DNA
     */
    mutate (rate) {
        for (let i = 0; i < this.genes.length; i++) {
            if (random(1) < rate) {
                this.genes[i] = randomAlphabetChar();
            }
        }
    }

}