//Package Dependencies
const express = require('express');
const app = express();

//app dependencies
const apiService = require('./services/apiService');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.all('/', (req, res) =>{
  const placeholderResponse = {
message: "This is another change. Please work i/cd"
  }
  const response = placeholderResponse;
  return res.status(200).send(response);
});

app.get('/users', async (req, res) =>{
  const users = await apiService.getUsers();
  return res.status(200).send(users);
})

const port = process.env.PORT || 3000;
module.exports = app.listen(port, () => console.log(`Listening on port ${port}...`));