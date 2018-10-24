'use strict';

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class PSC132ZW_Device extends ZwaveDevice {

	// this method is called when the Device is inited
	async onMeshInit() {

		// enable debugging
		this.enableDebug();

		// print the node's info to the console
		this.printNode();
		
		// Capabilities
		this.registerCapability('onoff', 'SWITCH_BINARY');
		this.registerCapability('measure_power', 'METER');

		// Trigger
		let triggerTurnedOn = new Homey.FlowCardTriggerDevice('PSC132ZW_turned_on');
		triggerTurnedOn
			.register()
			.trigger()
				.catch( this.error )
				.then( this.log )

		let triggerTurnedOff = new Homey.FlowCardTriggerDevice('PSC132ZW_turned_off');
		triggerTurnedOff
			.register()
			.trigger()
				.catch( this.error )
				.then( this.log )

		// Action
		let setLightOn = new Homey.FlowCardAction('PSC132ZW_turn_light_on');
		setLightOn
			.register()
			.registerRunListener(( args, state ) => {
				return args.device.getCommandClass("SWITCH_BINARY").SWITCH_BINARY_SET({
					'Switch Value': 255
				});
			});

		let setLightOff = new Homey.FlowCardAction('PSC132ZW_turn_light_off');
		setLightOff
			.register()
			.registerRunListener(( args, state ) => {
				return args.device.getCommandClass("SWITCH_BINARY").SWITCH_BINARY_SET({
					'Switch Value': 0
				});
			});
	}
}
module.exports = PSC132ZW_Device;