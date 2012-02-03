var fs = require('fs'),
	_ = require('underscore'),
	util = require('util'),
	cfg = require('./config');
	zipdb = require('./lib/zip-db');

zipdb.importFromFile(cfg.importFilePath);


