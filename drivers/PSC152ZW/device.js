'use strict';

const ZwaveDevice = require('homey-zwavedriver');

class Permundo_PSC152ZW extends ZwaveDevice {

	// this method is called when the Device is inited
	async onNodeInit({ node }) {

		// enable debugging
		//this.enableDebug();

		// print the node's info to the console
		//this.printNode();

		// Capabilities
		this.registerCapability('dim', 'SWITCH_MULTILEVEL');
		this.registerCapability('windowcovering_state', 'SWITCH_BINARY');
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

		// Trigger
//		let triggerBlindsClosed = this.homey.flow.getConditionCard('PSC152ZW_blinds_closed');
//		triggerBlindsClosed.registerRunListener(async (args, state) => {
//			this.log();
//			return true;
//		});

		// Action
//		let setBlindsDown = this.homey.flow.getActionCard('PSC152ZW_move_blinds_down');
//		setBlindsDown.registerRunListener(async (args, state) => {
//			return args.device.getCommandClass("SWITCH_BINARY").SWITCH_BINARY_SET({
//				'Switch Value': 0
//			});
//		});

//		let setBlindsUp = this.homey.flow.getActionCard('PSC152ZW_move_blinds_up');
//		setBlindsUp.registerRunListener(async (args, state) => {
//			return args.device.getCommandClass("SWITCH_BINARY").SWITCH_BINARY_SET({
//				'Switch Value': 255
//			});
//		});

	}

}

module.exports = Permundo_PSC152ZW;