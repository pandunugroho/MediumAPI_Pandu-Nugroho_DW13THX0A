// const Categories = require('../models').categories;
const Model = require("../models");
const Categories = Model.categories;

exports.index = (req, res) => {
  Categories.findAll().then(data => res.send(data));
};

exports.show = (req, res) => {
  const id = req.params.id
  Categories.findOne({
    where: {
      id: id
    }
  }).then(data => res.send(data))
}

exports.add = (req,res) => {
  Categories.create(req.body).then(data =>
    res.send({
      message: "Success to Add an Category",
      data
    })
    )
}