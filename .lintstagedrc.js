module.exports = {
  "*.js": files => files.map(file => `eslint ${file}`),
  "*.less": files => files.map(file => `stylelint ${file}`),
  "*.{js,json,less,ts,tsx}": files =>
    files.map(file => `prettier --write ${file} && git add ${file}`)
};
