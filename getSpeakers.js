const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

async function main() {
  try {
    const { data } = await axios.get(
      'http://sessionize.com/api/v2/ej4utdkg/view/Speakers'
    );
    const json = JSON.stringify(data, null, 2).replace(
      /http:\/\/sessionize\.com/g,
      'https://sessionize.com'
    );
    mkdirp(path.resolve(__dirname, './src/data'));
    fs.writeFileSync(path.resolve(__dirname, './src/data/speakers.json'), json);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
main();
