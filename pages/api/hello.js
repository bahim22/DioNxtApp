export default function handler(req, res) {
  res.status(200).json({ text: 'Cora' });
}

/*
export function mail(req, res) {
  const email = req.body.email
  // Then save email to your database, etc...
}
*/