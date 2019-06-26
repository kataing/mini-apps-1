const model = require('../database/model.js');

const controller = {
  get: (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    model
      .findAll({
        where: { id: id }
      })
      .then((data) => {
        res.status(200).send(...data);
      })
      .catch((err) => {
        res.status(404).send(err);
      })
  },
  post: (req, res) => {
    model
      .create(req.body)
      .then(() => {
        res.status(201).send('Your entry has been created');
      })
      .catch((err) => {
        res.status(404).send(err)
      });
  },
  update: (req, res) => {
    const { id } = req.params;
    model
      .update({
        where: { id }
      })
      .then(() => {
        res.status(204).send('Your entry has been updated');
      })
      .catch((err) => {
        res.status(404).send(err)
      });
  }
}

module.exports = controller;