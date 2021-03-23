// TODO: Configure the environment variables
const dotenv = require('dotenv');
dotenv.config();
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
const PORT = 8081

// TODO add Configuration to be able to use env variables

const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1';
const myKeyAPI = process.env.API_KEY;
const express = require('express');
// TODO: Create an instance for the server
const app = express();
// TODO: Configure cors to avoid cors-origin issue
const cors = require('cors');
app.use(cors());
// TODO: Configure express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// TODO: Configure express static directory.
app.use(express.static('dist'));
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
// INFO: a route that handling post request for new URL that coming from the frontend
app.post('/add-url', async (req, res) => {
    //alert("server is called");
    console.log("hereeee55");
    try {
        console.log("hereeee1");
        /* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes*/
    const url = req.body.url;
    console.log("hereeee");
    const request = await fetch(`${BASE_API_URL}?key=${myKeyAPI}&url=${req.body.url}&lang=en`);
    console.log("after fetch");
    const data = await request.json();
    
     const sample = {
       text: data.sentence_list[0].text,
       score_tag : data.score_tag,
       agreement : data.agreement,
       subjectivity : data.subjectivity,
       confidence : data.confidence,
       irony : data.irony
     };
     console.log(sample);
     res.send(sample);
     console.log(sample);
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
