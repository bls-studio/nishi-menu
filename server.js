const path = require('path');
const express = require('express');
const parser = require('body-parser');

const app = express();
const PORT = 1100;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public/dist')));

app.listen(PORT, () => console.log('logged to nishi menu board at port 1100'))