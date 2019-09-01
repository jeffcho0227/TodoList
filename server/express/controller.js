const dbHelper = require('../../database/helperFunc.js');

module.exports = {
  findAllHelper: (req, res) => {
    dbHelper.findAllHelper(req.body)
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => res.statas(404).send(err));
  }
};