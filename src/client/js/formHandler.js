import{validURL} from './checkURL'
const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}


const handleSubmit = async () => {
   /**
    * TODO
    *  - Get Value of the input for URL
    *  - Check if it's URL or not
    *      yes
    *          send it to the backend
    *      no
    *          show user message it's not valid URL
    */ 
   const url = document.getElementById('article-url').value;
   console.log(url);
   const UItext  = document.getElementById("text");
   const UIagreement  = document.getElementById("agreement");
   const UIsubjectivity  = document.getElementById("subjectivity");
   const UIconfidence = document.getElementById("confidence");
   const UIirony  = document.getElementById("irony");
   const UIscore_tag  = document.getElementById("score_tag");
    if (validURL(url)) {

        const data = await post('http://localhost:8081/add-url', { url })

            .then((data) => {

            /* Update HTML with data*/
            UItext.innerHTML         = `${data.text}`;
            UIagreement.innerHTML    = `${data.agreement}`;
            UIsubjectivity.innerHTML = `${data.subjectivity}`;
            UIconfidence.innerHTML   = `${data.confidence}`;
            UIirony.innerHTML        = `${data.irony}`;
            UIscore_tag.innerHTML    = `${data.score_tag}`;
                
});
    }
    else {
        alert("Wrong URL is entered try to enter: https://www.google.com/");
    }

}

export { handleSubmit }
export { post }
