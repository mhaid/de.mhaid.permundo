'use strict';

const Homey = require('homey');
const ZwaveDevice = require('homey-zwavedriver');

class Permundo_PSC152ZW extends ZwaveDevice {

	// this method is called when the Device is inited
	async onNodeInit() {

		// enable debugging
		this.enableDebug();

		// print the node's info to the console
		this.printNode();

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
//		let triggerBlindsClosed = new Homey.FlowCardTrigger('PSC152ZW_blinds_closed');
//		triggerBlindsClosed
//			.register()
//			.trigger()
//				.catch( this.error )
//				.then( this.log )

		// Action
//		let setBlindsDown = new Homey.FlowCardAction('PSC152ZW_move_blinds_down');
//		setBlindsDown
//			.register()
//			.registerRunListener(( args, state ) => {
//				return args.device.getCommandClass("SWITCH_BINARY").SWITCH_BINARY_SET({
//					'Switch Value': 0
//				});
//			});

//		let setBlindsUp = new Homey.FlowCardAction('PSC152ZW_move_blinds_up');
//		setBlindsUp
//			.register()
//			.registerRunListener(( args, state ) => {
//				return args.device.getCommandClass("SWITCH_BINARY").SWITCH_BINARY_SET({
//					'Switch Value': 255
//				});
//			});

	}

}

module.exports = Permundo_PSC152ZW;