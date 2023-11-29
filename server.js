const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can use any port you prefer

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Assuming your HTML and JS files are in a 'public' folder

app.get('/cs212/lab7', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

app.post('/cs212/lab7', (req, res) => {
    // Retrieve user inputs from the form
    const noun = req.body.noun;
    const adjective = req.body.adjective;
    const verb = req.body.verb;
    const adverb = req.body.adverb;
    const place = req.body.place;

    // Generate Mad Lib story
    const madLibStory = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${adverb} in ${place}.`;

    // Send the filled-in Mad Lib as the response
    res.send(madLibStory);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

});
