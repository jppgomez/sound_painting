module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpg,mp3,html,js,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};