export default (req, res) => {
  res.status(200).json({ text: req.query.endpoint.join(' ') });
};
