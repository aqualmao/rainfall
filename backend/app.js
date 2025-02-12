const express = require('express');
const app = express();
const port = 3000;

let thumbnails = ["img 1, img 2, img 3"]

app.get('/photos', (req, res) => {
    res.send(thumbnails);
});


app.listen(port, () => {
    console.log('listening on port ${port}');
});