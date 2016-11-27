class DNA {

    /**
     * Creates an instance of DNA.
     * 
     * @param {any} len => the the number of genes of this DNA
     * 
     * @memberOf DNA
     */
    constructor (len) {
        this._genes = [];
        this._fitness = 0;

        this.initGenes(len);
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
            this._genes[i] = this.randomAlphabetChar();
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
        return this._genes.join('');
    }

    /**
     * Return the fitness attribute
     * 
     * @readonly
     * 
     * @memberOf DNA
     */
    get fitness () {
        return this._fitness;
    }

    /**
     * Set the value of fitness
     * 
     * 
     * @memberOf DNA
     */
    set fitness (f) {
        this._fitness = f;
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
        for (let i = 0; i < this._genes.length; i++) {
            if (this._genes[i] == target[i]) {
                score++;
            }
        }
        this._fitness = score / target.length;
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
        let child = new DNA(this._genes.length);
        let crossPoint = Math.floor(Math.random() * this._genes.length);
        for (let i = 0; i < this._genes.length; i++) {
            if (i > crossPoint) {
                child._genes[i] = this._genes[i];
            } else {
                child._genes[i] = dna._genes[i];
            }
        }
        return child;
    }

    /**
     * Change a gene of the DNA pass in parameter randomly, based on a probability
     * 
     * @param {any} rate
     * 
     * @memberOf DNA
     */
    mutate (rate) {
        for (let i = 0; i < this._genes.length; i++) {
            if (Math.random() < rate) {
                this._genes[i] = this.randomAlphabetChar();
            }
        }
    }

}