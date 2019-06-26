const model = require('../database/model.js');

const controller = {
  get: (res, req) => {
    const { id } = req.params;
    model
      .findAll({
        where: { id }
      })
      .then(({ data }) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      })
  },
  post: (res, req) => {
    model
      .create(req.body)
      .then(() => {
        res.status(201).send('Your entry has been created');
      })
      .catch((err) => {
        res.status(404).send(err)
      })

  },
  update: (res, req) => {
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
      })
  }
}

module.exports = controller;