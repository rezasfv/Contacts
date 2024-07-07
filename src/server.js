const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.static('public'));

app.get('/contacts', (req, res) => {
  res.sendFile(__dirname + '/public/contacts.json');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
