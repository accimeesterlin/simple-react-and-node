const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

const path = require('path');

app.use(express.static('public')); // serving static files


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'public/index.html'));

});



app.listen(port, () => {
    console.log("App is start at port ", port);
});