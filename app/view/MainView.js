Ext.define('BG.view.MainView', {
	extend: 'Ext.TabPanel',
	alias: 'widget.mainView',

	config:{
		//Place the tab on the bottom|center of the screen.
		tabBar:{
			docked: 'bottom',
			layout: {
				pack: 'center'
			}
		},
		
		defaults: {
			
		},
		
		items:[
		//Tabs
		{ xtype: 'charityMainView' },
		{ xtype: 'userMainView' },
		{ xtype: 'businessMainView' }]
	}
});