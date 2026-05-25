const https = require('https');

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  const body = event.body || '{}';

  return new Promise((resolve) => {
    const options = {
      hostname: 'hook.eu2.make.com',
      path: '/slhkdy3n4cd1vmt7jk435lf2uokzbhyb',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const req = https.request(options, (res) => {
      resolve({ statusCode: 200, headers, body: JSON.stringify({ success: true }) });
    });

    req.on('error', (e) => {
      resolve({ statusCode: 500, headers, body: JSON.stringify({ error: e.message }) });
    });

    req.write(body);
    req.end();
  });
};
