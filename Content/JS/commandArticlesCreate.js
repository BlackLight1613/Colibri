{
    const init = () => {
        dom = {
            addArticleForm: document.getElementById('article_form'),
            showArticleFormButton: document.getElementById('CreateArticleFormButton'),
            hideArticleFormButton: document.getElementById('CancelArticleFormButton')
        };
        //Enleve le formulaire d'ajout d'un article au chargement de la page
        dom.addArticleForm.style.display = 'none';

        //Permet d'afficher le formlaire d'ajout d'un article
        dom.showArticleFormButton.addEventListener('click', () => { dom.addArticleForm.style.display = ''; });
    };

    document.addEventListener('DOMContentLoaded', ()=>init());
}