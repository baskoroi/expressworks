const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.argv[2];

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
    let str = req.body.str.split('').reverse().join('');
    res.send(str);
});
app.listen(port);