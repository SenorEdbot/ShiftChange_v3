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
    }).catch((e) =>{
        res.status(400).send({
            error: 'This email is already in use.'
        })
    });
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await db.Employees.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'This login information was incorrect 1'
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'This login information was incorrect 2'
        })
      }
      
      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch(error) {
      res.status(500).send({
        error: 'An error has occured trying to login'
      })
    }
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
