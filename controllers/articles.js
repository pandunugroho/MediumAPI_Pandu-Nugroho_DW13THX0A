// const Categories = require('../models').categories;
const Model = require("../models");
const Articles = Model.articles;

//Task 2 Controller
exports.index = (req, res) => {
  Articles.findAll({
    attributes: {
      exclude: [
        "is_published",
        "is_archived",
        "slug",
        "author_id",
        "userId"
      ],
      include: [
        "id",
        "title",
        "content",
        "image",
        "category_id",
        "category_name"
      ]
    }
  }).then(data =>
    res.send(data));
};


exports.show = (req, res) => {
  const id = req.params.id
  Articles.findOne({
    where: {
      id: id
    }
  }).then(data => res.send(data))
}

exports.add = (req, res) => {
  Articles.create(req.body).then(data =>
    res.send({
      message: "Successfully add an Article",
      data
    })
  )
}

//Task 3 Controller: show all article(s) by category_id 
exports.indexByCategory = (req, res) => {
  Articles.findAll({
    attributes: {
      exclude: [
        "is_published",
        "is_archived",
        "slug",
        "author_id"
      ]
      // include: [
      //   "title",
      //   "content",
      //   "image",
      //   "category_id",
      //   "category_name"
      // ]
    },
    where: {
      id:category_id
    }
  }).then(data =>
    res.send(data));
};