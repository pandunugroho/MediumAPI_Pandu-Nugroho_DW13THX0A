require('express-group-routes');
// instantiate express module
const express = require('express');
const cors = require ("cors");
//init body-parser
// const bodyParser = require('body-parser')
//use express in app variable
const app = express();
//define the server port
const port = process.env.PORT || 5000;
app.use(cors());
//connect to routers.js after routers.js exported
// const routers = require('./routers');


// if routers in different files, use this :
// app.use('/a',routers);

// allow this app to recieve incoming json request
// app.use(bodyParser.json())
app.use(express.json())

//
//Task 2nd week
//

const categoriesController = require("./controllers/categories")

app.get('/', (req, res) => {
  res.send("Welcome to My Server. My name is Pandu Nugroho")
});

  // routers.get("/")

app.group('/api/v1', (router) => {
  router.get('/categories', categoriesController.index)
  router.get('/category/:id', categoriesController.show)
  router.post('/category', categoriesController.add)
  //router.get('/articles', articlesController.index)
});

//When this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}`))

