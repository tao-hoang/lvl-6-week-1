const FS = require('fs');

const CLI_PARAMS = process.argv.slice(2);

const FILENAME = `${CLI_PARAMS[0]}.txt`;
const AUTHOR = CLI_PARAMS[1];
const NOTE_TEXT = CLI_PARAMS[2];

const NOTE = `Note Author:
${AUTHOR}

Note:
${NOTE_TEXT}`;

FS.writeFileSync(`./${FILENAME}`, NOTE, {flag: 'wx'});