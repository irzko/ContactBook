exports.create = (req, res) => {
  res.send({ message: "create handler" });
};

exports.findAll = (req, res) => {
  res.send({ message: "findAll handler" });
};

exports.findOne = (req, res) => {
  res.send({ message: "findOne handler" });
};

exports.update = (req, res) => {
  res.update({ message: "update handler" });
};

exports.delete = (req, res) => {
  res.send({ message: "delete handler" });
};

exports.deleteAll = (req, res) => {
  res.send({ message: "deleteAll handler" });
};

exports.findAllFavourites = (req, res) => {
  res.send({ message: "findAllFavourites handler" });
};
