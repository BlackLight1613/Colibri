{
    let tableRows = [];
    let indexTableRow;

    //Création de l'évenement de modification du DOM en temps réél
    var rowEvent = document.createEvent('Event');
    rowEvent.initEvent('newRowEvent');

    //Création d'une ligne lors d'un ajout dans le tableau.
    //La fonction doit controler les éléments présents dans la tableau tableRows et ajuster le DOM si un élément est modifié
    document.addEventListener('newRowEvent', () => {
        const noArticleDiv = document.getElementById('noArticle');
        const tableBlody = document.getElementById('tableBodyArticle');
        const articleList = document.getElementById('articlesList');
        if (tableRows.length > 0) {
            noArticleDiv.style.display = 'none';
            articleList.style.display = '';
        }
        else {
            noArticleDiv.style.display = '';
            articleList.style.display = 'none';
        }
        tableBlody.innerHTML = '';
        for (let i = 0; i < tableRows.length; i++) {
            tableBlody.appendChild(tableRows[i]);
        }
    });

    //Permet de rafraichier le tableau en cas de suppression d'une ligne
    const refreshTableBody = () => {
        const noArticleDiv = document.getElementById('noArticle');
        const tableBlody = document.getElementById('tableBodyArticle');
        const articleList = document.getElementById('articlesList');
        if (tableRows.length > 0) {
            tableBlody.innerHTML = '';
            for (let i = 0; i < tableRows.length; i++) {
                tableBlody.appendChild(tableRows[i]);
            }
        }
        else {
            noArticleDiv.style.display = '';
            articleList.style.display = 'none';
        }
            
    };


    const addTableArticle = (articleName, articleQuantity, unityCode) => {
        //console.log('Nom de l article => ' + articleName + ' / Quantité => ' + articleQuantity + ' / Code Unité => ' + unityCode);
        //Construction de la ligne HTML contennat les éléments 
        var row = document.createElement('tr');
        row.setAttribute('idRow', indexTableRow)
        var nameCell = document.createElement('td');
        var quantityCell = document.createElement('td');
        var unityCell = document.createElement('td');
        var actionCell = document.createElement('td');
        var deleteLink = document.createElement('a');
        actionCell.appendChild(deleteLink);
        deleteLink.setAttribute('href', '#');
        deleteLink.innerText = 'Supprimer';
        //deleteLink.setAttribute('class', 'Delete_Button');
        deleteLink.setAttribute('idLink', indexTableRow);
        deleteLink.addEventListener('click', () => {
            const idLink = parseInt(deleteLink.getAttribute('idLink'));
            for (let i = 0; i < tableRows.length; i++) {
                const idRow = parseInt(tableRows[i].getAttribute('idRow'));
                if (idLink === idRow) {
                    tableRows.splice(i, 1);
                }
            }
            refreshTableBody();
        });
        nameCell.innerText = articleName;
        quantityCell.innerText = articleQuantity;
        unityCell.innerText = unityCode;
        row.appendChild(nameCell);
        row.appendChild(quantityCell);
        row.appendChild(unityCell);
        row.appendChild(actionCell);
        //Ajout de la ligne dans le tableau contenant les éléments du DOM
        tableRows.push(row);
        indexTableRow++;
        //Mise a jour du DOM avec l'évenment 
        document.dispatchEvent(rowEvent);
    };

    const init = () => {

        indexTableRow = 0;

        dom = {
            addArticleForm: document.getElementById('article_form'),
            showArticleFormButton: document.getElementById('CreateArticleFormButton'),
            hideArticleFormButton: document.getElementById('CancelArticleFormButton'),
            addArticleButton: document.getElementById('AddArticleButton'),
            tableBody: document.getElementById('tableBodyArticle'),
            articlesList: document.getElementById('articlesList'),
            noArticle: document.getElementById('noArticle'),
            articleNameInput : document.getElementById('articleNameInput')
        };
        //Enleve le formulaire d'ajout d'un article et le tableau au chargement de la page
        dom.addArticleForm.style.display = 'none';
        dom.articlesList.style.display = 'none';

        //Permet d'afficher le formlaire d'ajout d'un article
        dom.showArticleFormButton.addEventListener('click', () => {
            dom.addArticleForm.style.display = '';
            dom.showArticleFormButton.style.display = 'none';
        });

        //Permet de cacher le formulaire d'ajout d'un article
        dom.hideArticleFormButton.addEventListener('click', () => {
            dom.addArticleForm.style.display = 'none';
            dom.showArticleFormButton.style.display = '';
        });

        //Permet de changer la couleur de l'input 
        dom.articleNameInput.addEventListener('keyup', () => {
            if (dom.articleNameInput.value.length > 0)
                dom.articleNameInput.style.border = '';
            else
                dom.articleNameInput.style.border = '1px solid #e74c3c';
        });

        //Permet d'enregistrer un article dans le tableau
        dom.addArticleButton.addEventListener('click', () => {
            const articleNameInput = document.getElementById('articleNameInput');
            const articleNameInputValue = articleNameInput.value;
            const articleQuantityInput = document.getElementById('articleQuantityInput');
            const articleQuantityInputValue = parseInt(articleQuantityInput.value);
            const articleUnitySelect = document.getElementById('articleUnitySelect');
            const articleUnityText = articleUnitySelect.options[articleUnitySelect.selectedIndex].text;
            const articleUnityValue = articleUnitySelect.options[articleUnitySelect.selectedIndex].value;
            if (articleNameInputValue === '' || articleNameInputValue === undefined || articleQuantityInputValue <= 0 || articleUnityValue === '')
                return false;
            else
                addTableArticle(articleNameInputValue, articleQuantityInputValue, articleUnityValue);
            articleNameInput.value = '';
            articleQuantityInput.value = '0';
            
        });
    };

    document.addEventListener('DOMContentLoaded', ()=>init());
}