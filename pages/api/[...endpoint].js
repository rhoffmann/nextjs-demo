export default (req, res) => {
  console.log(req.url);
  res.status(200).json({ text: req.query.endpoint.join(' ') });
};
