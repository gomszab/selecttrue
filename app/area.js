class Area {
     #div;
     get div(){
         return this.#div;
     }

     constructor(cssclass){
         const container = this.#getContainer()
         this.#div = document.createElement('div');
         this.#div.className = cssclass;
         container.appendChild(this.#div);
     }
 
     #getContainer(){
         let container = document.querySelector('.container')
         if(!container){
             container = document.createElement('div');
             container.className = 'container';
             document.body.appendChild(container);
         }
         return container;
     }
}

class DeckArea extends Area{

    constructor(cssClass){
        super(cssClass); 
    }

}


class SolutionArea extends Area{

    constructor(cssClass){
        super(cssClass);
        
    }
}