{
    const init = () => {
        const dom = {
            dateInput: document.getElementById('CommandDateInput'),
            commentInput: document.getElementById('CommentInput'),
            supplierList: document.getElementById('SupplierList'),
            submitCommandButton: document.getElementById('SubmitCommandButton'),
            errorsSpan : document.getElementsByClassName('error'),
            dateError: document.getElementById('dateError')
        };

        //Reset des champs en erreur
        for (let i = 0; i < dom.errorsSpan.length; i++) {
            dom.errorsSpan[i].style.display = 'none';
        }

        dom.dateInput.addEventListener('change', () => {
            const value = dom.dateInput.value;
            if (value === '' || value === undefined)
                dom.dateError.style.display = '';
            else
                dom.dateError.style.display = 'none';
        });

        //Initialisation du champ de date
        const date = new Date();
        dom.dateInput.value = date.toISOString().substr(0, 10);

        dom.submitCommandButton.addEventListener('click', (e) => {
            const dateValue = dom.dateInput.value;
            if (dateValue === '' || dateValue === undefined) {
                dom.dateError.style.display = '';
                e.preventDefault();
                return null;
            }
        });
    };

    document.addEventListener('DOMContentLoaded',()=>init());
}