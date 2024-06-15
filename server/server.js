const express = require('express');
const app = express();

const staticDir = 'ui'; // directory containing static files

app.use(express.static(staticDir));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});