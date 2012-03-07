Ext.define('BG.view.MainView', {
	extend: 'Ext.TabPanel',
	xtype: 'mainView',
	requires:[
	'BG.view.charity.CharityMainView', 
	'BG.view.user.UserMainView',
	'BG.view.business.BusinessMainView'],

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