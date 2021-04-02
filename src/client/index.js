import { handleSubmit } from './js/formHandler'
// TODO include your scss file here
import './styles/_resets.scss'
import './styles/_base.scss'
import './styles/_footer.scss'
import './styles/_form.scss'
import './styles/_header.scss'
import './styles/style.scss'
window.addEventListener('DOMContentLoaded', () => {
    // TODO: get the button for submit
    const generateBtn   = document.getElementById("submitBtn");
    // TODO: add event listener to it when the click to call handleSubmit function
    generateBtn.addEventListener('click', function (e) {
        e.preventDefault(); 
        handleSubmit();
    });
})
export { handleSubmit }
