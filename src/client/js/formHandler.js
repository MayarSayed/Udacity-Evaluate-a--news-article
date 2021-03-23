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
const UItext  = document.getElementById("text");
const UIagreement  = document.getElementById("agreement");
const UIsubjectivity  = document.getElementById("subjectivity");
const UIconfidence = document.getElementById("confidence");
const UIirony  = document.getElementById("irony");
const UIscore_tag  = document.getElementById("score_tag");

const handleSubmit = async () => {
    //event.preventDefault()

    /**
     * TODO
     *  - Get Value of the input for URL
     *  - Check if it's URL or not
     *      yes
     *          send it to the backend
     *      no
     *          show user message it's not valid URL
     */
    let url = document.getElementById("article-url").value;
    console.log(url);
    const data = await post('http://localhost:8081/add-url', { url }).then((data) =>{
        console.log("update url");
        console.log(data);
        alert("something happen");
          UItext.innerHTML = data.text;
          UIagreement.innerHTML = data.agreement;
          UIsubjectivity.innerHTML = data.subjectivity;
          UIconfidence.innerHTML = data.confidence;
          UIscore_tag.innerHTML = data.score_tag;
          UIirony.innerHTML = data.irony;
   
    });
    console.log("url sent to server");
}

export default handleSubmit
