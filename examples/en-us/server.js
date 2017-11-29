const express = require('express');
let app = express();
let port = process.env.PORT || 3232;
app.use(express.static(__dirname));
app.listen(port, () => {
  console.log('Server listening at port %d', port);
});