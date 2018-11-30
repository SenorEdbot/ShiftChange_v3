const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Employees.findAll({}).then((results) => {
      res.json(results);
    });
  },
  findOne: (req, res) => {
    res.json({
      msg: `Find One: ${req.params.id}`,
    });
  },
  create: (req, res) => {
    db.Employees.create(req.body).then((results) => {
      res.json(results);
    }).catch((err) =>{
        res.status(400).send({
            error: 'This email is already in use.'
        })
    });
  },
  update: (req, res) => {
    res.json({
      msg: 'Update One: ${req.params.id}',
    });
  },
  delete: (req, res) => {
    db.Employees.destroy({where: {id: req.params.id}}).then((results) => {
      res.json(results);
    });
  },
};
