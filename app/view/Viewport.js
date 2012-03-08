Ext.define('BG.view.Viewport', {
	extend: 'Ext.Container', 
	alias: 'widget.viewport',

	config:{
		layout:{
			type: 'card',
			animation:{
				type: 'slide',
			},
		},
		fullscreen: true,
		
		items:[{xtype: 'loginView'}],
	},
});