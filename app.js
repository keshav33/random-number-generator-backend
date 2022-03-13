require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const generatorRouter = require('./routes/generatorRouter');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/generate', generatorRouter);

const port = 5000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})