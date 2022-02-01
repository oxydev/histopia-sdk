
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./bling-sdk.cjs.production.min.js')
} else {
  module.exports = require('./bling-sdk.cjs.development.js')
}
