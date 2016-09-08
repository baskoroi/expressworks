const express = require('express');
const app = express();

const port = process.argv[2];
const dir = process.argv[3];

app.set('views', dir);
app.set('view engine', 'jade');

app.get('/home', (req, res) => {
    res.render('index', { date: new Date().toDateString() });
});
app.listen(port);