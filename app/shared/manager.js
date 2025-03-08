class Manager{

    #array;
    #solution;
    #currentCardNumber
    #nextCardCallback
    #appanedCardToSolution
    #finishCallback
    #addCallback;


    constructor(array = []){
        this.#array = array;
        this.#solution = {}
        this.#currentCardNumber = 0;
        this.#addCallback = () => {}
    }

    add(card){
        this.#array.push(card);
        this.#addCallback(card);
    }

    setNextCardCallback(callback){
        this.#nextCardCallback = callback;
    }

    setAppendCardToSolutionCallback(callback){
        this.#appanedCardToSolution = callback;
    }

    setFinishCallback(callback){
        this.#finishCallback = callback;
    }

    setAddCallback(callback){
        this.#addCallback = callback;
    }

    generateExportText(){
        const result = [];
        for(const card of this.#array){
            const correct = card.correct ? '1' : '0'; 
            result.push(`${card.text};${correct}`);
        }
        return result.join('\n');
    }

    nextCard(answer){
        if(answer){ 
            this.#solution[this.#currentCardNumber] = answer 
            this.#appanedCardToSolution(answer) 
        }
        this.#currentCardNumber++;
        if(this.#currentCardNumber < this.#array.length){
            this.#nextCardCallback(this.#array[this.#currentCardNumber].text); 
        }else{ 
            let sum = 0;
            for (const index in this.#array){
                if(this.#array[index].correct){
                    if(this.#solution[index]){
                        sum++;
                    }
                }else{
                    if(!this.#solution[index]){
                        sum++;
                    }
                }
            }
            const result = `${this.#array.length}/${sum}`;
            this.#finishCallback(result);
        }
    }

    start(){
        this.#nextCardCallback(this.#array[0].text);
    }
}