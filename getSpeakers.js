const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

async function getJSON(url) {
  const { data } = await axios.get(url);
  return JSON.stringify(data, null, 2).replace(
    /http:\/\/sessionize\.com/g,
    'https://sessionize.com'
  );
}

async function main() {
  try {
    mkdirp(path.resolve(__dirname, './src/data'));
    fs.writeFileSync(
      path.resolve(__dirname, './src/data/speakers.json'),
      await getJSON('http://sessionize.com/api/v2/ej4utdkg/view/Speakers'),
    );
    fs.writeFileSync(
      path.resolve(__dirname, './src/data/sessions.json'),
      await getJSON('https://sessionize.com/api/v2/ej4utdkg/view/Sessions'),
    );
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
main();
