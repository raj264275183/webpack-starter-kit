export default class TableCellEditing{
    constructor(table){
        this.tbody = table.querySelector('tbody');
    }

    init(){
        const tds = this.tbody.querySelectorAll('td');
        tds.forEach(td => {
            td.setAttribute('contenteditable', true);

            td.addEventListener('click', (ev) => {
                this.startEditing(td);
            })
        });
    }

    startEditing(td){
        td.className = 'in-editing';
        this.createButtonToolbar(td)
    }

    cancelEditing(td){

    }

    finishEditing(td){

    }

    inEditing(td){

    }

    createButtonToolbar(td){
        const toolbar = document.createElement('div');
        toolbar.className = 'button-toolbar';

        toolbar.innerHTML = `
        <div class="button-wrapper">
            <button class="btn btn-sm btn-outline-danger">Cancel</button>
            <button class="btn btn-sm btn-outline-primary">Save</button>
            <button class="btn btn-sm btn-outline-secondary">Insert Image</button>
        </div>
        `

        td.appendChild(toolbar);

    }
}