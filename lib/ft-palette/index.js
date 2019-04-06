const path = require('path');
const sassExtract = require('sass-extract');

const rendered = sassExtract.renderSync({
  file: path.resolve(__dirname, './o-colors--master-brand.scss'),
  includePaths: ['node_modules', 'node_modules/@financial-times']
});

const lightTheme = Object.keys(rendered.vars.global['$theme-light'].value)
  .reduce((map, key) => {
    map.set(key, rendered.vars.global['$theme-light'].value[key].value.hex) 
    return map
  }, new Map()
)

module.exports = {
  lightTheme
}