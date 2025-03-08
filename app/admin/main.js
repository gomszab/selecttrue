const formFieldConfiguration = [
    {id: 'cardtext', label: 'allitas', type: 'text'},
    {id: 'right', label: 'igaz?', type: 'checkbox', optional: true},
]

const manager = new Manager();
const table = new Table(manager);
const formController = new FormController(manager, formFieldConfiguration);

Gomszab.addFileUploader(fileResult => {
    const fileLines = fileResult.split('\n');
    for(const line of fileLines){
      const fields = line.split(';');
      const correct= fields[1].trim() === '1' ? true: false;
  
      const card = new Card(fields[0], correct);
      manager.add(card);
    }
})

const exportButton = document.createElement('button');
exportButton.textContent = 'Letöltés';
document.body.appendChild(exportButton);
exportButton.addEventListener('click', () => {
    const link = document.createElement('a');
    const content = manager.generateExportText();
    const file = new Blob([content])
    link.href = URL.createObjectURL(file);
    link.download = 'newdata.csv'
    link.click();
    URL.revokeObjectURL(link.href);
})