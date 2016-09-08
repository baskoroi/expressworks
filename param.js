const express = require('express');
const app = express();
const port = process.argv[2];

app.put('/message/:id', (req, res) => {
    let data = new Date().toDateString() + req.params.id;
    res.send(require('crypto').createHash('sha1').update(data).digest('hex'));
});

app.listen(port);