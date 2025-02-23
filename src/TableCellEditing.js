export default class TableCellEditing{
    constructor(table){
        this.tbody = table.querySelector('tbody');
    }

    init(){
        const tds = this.tbody.querySelectorAll('td');
        tds.forEach(td => {
            td.setAttribute('contenteditable', true);

            td.addEventListener('click', (ev) => {
                if(!this.inEditing(td)){
                this.startEditing(td);
              }
            });
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
        return td.classList.contains('in-editing');
    }

    createButtonToolbar(td){
        const toolbar = document.createElement('div');
        toolbar.className = 'button-toolbar';
        toolbar.setAttribute('contenteditable', false);

        toolbar.innerHTML = `
        <div class="button-wrapper">
            <button class="btn btn-sm btn-primary btn-save">Save</button>
            <button class="btn btn-sm btn-danger btn-cancel">Cancel</button>
        </div>
        `

        td.appendChild(toolbar);
        const btnSave = toolbar.querySelector('.btn-save');
        const btnCancel = toolbar.querySelector('.btn-cancel');
        btnSave.addEventListener('click', () => {
            this.finishEditing(td)
        });
    }
}