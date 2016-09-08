const fs = require('fs');
const express = require('express');
const app = express();

const port = Number(process.argv[2]);
const filename = process.argv[3];

app.get('/books', (req, res) => {
    fs.readFile(filename, (err, data) => {
        if (err) res.sendStatus(500);
        let books = {};
        try {
            books = JSON.parse(data);
        } catch (e) {
            res.sendStatus(500);
        }
        res.json(books);
    });
});
app.listen(port);