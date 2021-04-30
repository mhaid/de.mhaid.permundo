'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class Permundo_PSC234ZW extends ZwaveDevice {

	// this method is called when the Device is inited
	async onNodeInit({ node }) {

		// enable debugging
		//this.enableDebug();

		// print the node's info to the console
		this.printNode();
		
		// Capabilities
		this.registerCapability('onoff', 'SWITCH_BINARY');
		this.registerCapability('measure_power', 'METER', {
			getOpts: {
				getOnStart: true,
			},
			getParser: () => ({
				Properties1: {
					Scale: 0,
				},
			}),
		});
	}

}
module.exports = Permundo_PSC234ZW;