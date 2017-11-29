'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

const AutoPrefixerBrowsers = [
	'iOS >= 8.1',
	'Android >= 4.2',
	'IE >= 9',
	'Safari >= 7'
]

module.exports = {
  loaders: utils.cssLoaders({
    ts: 'ts-loader',
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
	stylus: {
		use: [
			require('poststylus')([
				require('autoprefixer')({
					browsers: AutoPrefixerBrowsers
				}),
				'rucksack-css'
			])
		]
	},
  esModule: true
}
