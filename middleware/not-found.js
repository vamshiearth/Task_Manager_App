const notFound = (req, res) =>
  res.status(404).send("Don't act too smart baby,Route does not exist")

module.exports = notFound
