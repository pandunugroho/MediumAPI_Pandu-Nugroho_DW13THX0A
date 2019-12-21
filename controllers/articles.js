// const Categories = require('../models').categories;
const Model = require("../models");
const Articles = Model.articles;

exports.index = (req, res) => {
  Articles.findAll().then(data => res.send(data));
};

exports.show = (req, res) => {
  const id = req.params.id
  Articles.findOne({
    where: {
      id: id
    }
  }).then(data => res.send(data))
}

exports.add = (req,res) => {
  Articles.create(req.body).then(data =>
    res.send({
      message: "Success to Add an Category",
      data
    })
    )
}