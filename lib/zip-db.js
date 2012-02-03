var csv = require('csv'),
	path = require('path'),
	mongoose = require('mongoose');

module.exports.importFromFile = function(filePath, cb){
	var absPath = path.resolve(process.cwd(), filePath);
	console.info('opening file '+absPath+' ...');
	csv()
	.fromPath(absPath, {delimiter: ';'})
	.transform(function(data, idx){
		return {
			code: data[0],
			city: data[1],
			street: data[2],
			numbers: data[3],
			gmina: data[4],
			powiat: data[5],
			voivodeship: data[6]
		};
	})
	.on('data', function(data, idx){
		console.info(data);	
	});
};


	