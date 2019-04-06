const {lightTheme} = require('./lib/ft-palette')

const light = [...lightTheme.keys()].reduce((object, key) => {
    object[key] = lightTheme.get(key)
    return object
}, {})

module.exports.colors = { light };