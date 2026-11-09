export default async function handler(req, res) {
  const { q, tl = 'kn' } = req.query;
  if (!q) {
    return res.status(400).send('Missing query text');
  }

  try {
    const text = encodeURIComponent(String(q).substring(0, 200));
    const lang = encodeURIComponent(String(tl));
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${text}`;

    const upstream = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!upstream.ok) {
      return res.status(upstream.status).send('Upstream TTS error');
    }

    const arrayBuf = await upstream.arrayBuffer();
    const buffer = Buffer.from(arrayBuf);

    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=604800, s-maxage=604800');
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.send(buffer);
  } catch (err) {
    return res.status(500).send(err.message || 'Error processing TTS');
  }
}

