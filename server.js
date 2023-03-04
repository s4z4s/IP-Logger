const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/save-ip', (req, res) => {
  const ip = req.body.ip;
  console.log(`IP address received: ${ip}`);
  fs.writeFile(path.join(__dirname, 'ip.txt'), ip, (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  console.log("To end press Ctrl + C");
});
