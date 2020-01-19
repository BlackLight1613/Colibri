{
    const init = () => {

        const dom = {
            detail_buttons: document.getElementsByClassName('Detail_Button'),
            delete_buttons: document.getElementsByClassName('Delete_Button')
        };
        for (let i = 0; i < dom.delete_buttons.length; i++) {
            dom.delete_buttons[i].innerHTML = "";
        }
        for (let i = 0; i < dom.detail_buttons.length; i++) {
            dom.detail_buttons[i].innerHTML = "";
        }
    }
    document.addEventListener('DOMContentLoaded', () => init());
}