// eslint-disable-next-line @typescript-eslint/no-var-requires
const escape = require('shell-quote').quote;

const isWin = process.platform === 'win32';

module.exports = {
  '**/*.{ts,tsx,js}': 'eslint --cache --fix',
  '**/*.{ts,tsx,js,css,less,md}': (filenames) => {
    const escapedFileNames = filenames
      .map((filename) => `"${isWin ? filename : escape([filename])}"`)
      .join(' ');
    return [
      `prettier --ignore-path .prettierignore_staged --write ${escapedFileNames}`,
    ];
  },
};
