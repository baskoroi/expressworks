const express = require('express');
const stylus = require('stylus');
const app = express();

const port = process.argv[2];
const dir = process.argv[3];

app.use(stylus.middleware(dir));
app.use(express.static(dir));

app.listen(port);