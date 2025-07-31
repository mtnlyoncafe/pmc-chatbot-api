export default async function handler(req, res) {
  const origin = req.headers.origin;
  if (origin === 'https://pmctuannguyen.com') {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { message } = req.body;
    return res.status(200).json({ reply: `Bạn đã hỏi: "${message}"` });
  }

  res.status(405).json({ error: 'Chỉ hỗ trợ POST' });
}
