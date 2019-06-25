const express = require('express');
const path = require('path');
const parse = require('body-parser');

const app = express();
const port = 2000;

app.use(parse.json());
app.use(parse.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/api', (req, res) => {

});

app.post('/api', (req, res) => {
  
});

app.listen(port, () => { console.log(`Listening on port ${port}.`) })

module.exports = app;