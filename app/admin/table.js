class Table{
    #manager;

    constructor(manager){
        this.#manager = manager;
        const tbody = Gomszab.makeTableWithHeader(['Állítás', 'Helye-e']);
        this.#manager.setAddCallback(this.#addCallback(tbody))
    }

    #addCallback(tbodyElement){
       return (card) => {
            const tr = document.createElement('tr');
            tbodyElement.appendChild(tr);
            Gomszab.makeCellToRow(tr, card.text);
            const isRight = card.correct ? 'igen': 'nem';
            Gomszab.makeCellToRow(tr, isRight);
        }
    }
}