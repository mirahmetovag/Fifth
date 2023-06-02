require('dotenv/config');
const express = require ('express');
const fileUpload = require('express-fileupload');

const routes = require('./routes');
   
const app = express();
const PORT = process.env.PORT || 4004;

app.use(express.json());
app.use(fileUpload());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(PORT);
})