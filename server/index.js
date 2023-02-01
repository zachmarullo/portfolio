const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5555;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};


app.use(express.static(DIST_DIR));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});
app.listen(port, function () {
  console.log('App listening on port: ' + port);
});

app.use('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'), (err) => {
    if (err) res.status(500).send(err);
  });
});