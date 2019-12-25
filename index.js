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
const articlesController = require("./controllers/articles")

app.get('/', (req, res) => {
  res.send("Welcome to My Server. My name is Pandu Nugroho")
});

  // routers.get("/")

app.group('/api/v1', (router) => {
  // Categories
  router.get('/categories', categoriesController.index)
  router.get('/category/:id', categoriesController.show)
  router.post('/category', categoriesController.add)
  
  
  //Task 2: Articles
  router.get('/articles', articlesController.index)
  //Task 3: Category Detail
  router.get('/category/:id/articles', articlesController.indexByCategory)
  //Task 4: Create, Update, Delete Article
  // router.post('/article', articlesController.)
  // router.put('/article/:id', articlesController.)
  // router.delete('/article/:id', articlesController.)
  //Task 5: Detail Article
  // router.get('/article/:id', articlesController.)
  //Task 6: Create, Update, Delete Comment
  // router.post('/article/:id/comment', articlesController.)
  // router.put('/article/:id/comment', articlesController.)
  // router.delete('/article/:id/comment', articlesController.)
  // router.get('/article/:id/comments', articlesController.)
  //Task 7: Follow
  // router.post('/follow', followController.)
  //Task 8: Related Article (see Task 3)
  //Task 9: Article by Person
  // router.post('/follow', users Controller.)
  //Task 10:Login
  // router.post('/login', loginController.)
  //Task 11:Register
  // router.post('/register', registerController.)
  


});


//When this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}`))

