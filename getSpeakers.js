const http = require('http')
const fs = require('fs')
const path = require('path');
const mkdirp = require('mkdirp');

http.get('http://sessionize.com/api/v2/ej4utdkg/view/Speakers', (res) => {
  let body = ''
  res.setEncoding('utf8')

  res.on('data', (chunk) => {
    body += chunk
  })

  res.on('end', () => {
    mkdirp(path.resolve(__dirname, './src/data'));
    fs.writeFileSync(path.resolve(__dirname, './src/data/speakers.json'), body)
  })
}).on('error', (e) => {
  console.error(e.message)
})
