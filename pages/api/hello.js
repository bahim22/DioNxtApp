export default function handler(req, res) {
  res.status(200).json({ text: 'Api Coming Soon' });
}

/*
export function mail(req, res) {
  const email = req.body.email
  // Then save email to your database, etc...
}
export default function handler(request, response) {
  const { name } = req.query;
  res.status(200).send(`Hello ${name}!`);
}
*/