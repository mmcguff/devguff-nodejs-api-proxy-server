//Package Dependencies
const express = require('express');
const app = express();

//app dependencies
//const routes = require('./routes/routes.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.all('/', (req, res) =>{
  const placeholderResponse = {
    message: "This was changed from inside the container"
  }
  const response = placeholderResponse;
  return res.status(200).send(response);
});

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));