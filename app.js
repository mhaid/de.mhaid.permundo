'use strict';

const Homey = require('homey');

class PermundoApp extends Homey.App {
	onInit() {
		this.log('${Homey.manifest.id} running...');
	}
}

module.exports = PermundoApp;