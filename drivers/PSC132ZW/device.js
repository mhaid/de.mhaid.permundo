'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class Permundo_PSC132ZW extends ZwaveDevice {

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

		// Trigger
//		let triggerTurnedOn = this.homey.flow.getConditionCard('PSC132ZW_turned_on');
//		triggerTurnedOn.registerRunListener(async (args, state) => {
//			this.log();
//			return true;
//		});

//		let triggerTurnedOff = this.homey.flow.getConditionCard('PSC132ZW_turned_off');
//		triggerTurnedOff.registerRunListener(async (args, state) => {
//			this.log());
//			return true;
//		});

		// Action
//		let setLightOn = this.homey.flow.getActionCard('PSC132ZW_turn_light_on');
//		setLightOn.registerRunListener(async (args, state) => {
//			return args.device.getCommandClass("SWITCH_BINARY").SWITCH_BINARY_SET({
//				'Switch Value': 255
//			});
//		});

//		let setLightOff = this.homey.flow.getActionCard('PSC132ZW_turn_light_off');
//		setLightOff.registerRunListener(async (args, state) => {
//			return args.device.getCommandClass("SWITCH_BINARY").SWITCH_BINARY_SET({
//				'Switch Value': 0
//			});
//		});

	}

}
module.exports = Permundo_PSC132ZW;