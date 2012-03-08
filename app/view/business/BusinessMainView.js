Ext.define('BG.view.business.BusinessMainView',{
	extend: 'Ext.NavigationView', 
	alias: 'widget.businessMainView',

	config: {
		title: 'Business',
		iconCls: 'trash',
		
		//Navigation bar
		navigationBar:{
			items:[
			{
				xtype: 'button', 
				iconMask: true,
				iconCls: 'maps',
				action: 'showMap',
				align: 'right',
			}
			]
		},

		//Set layout to card
		layout:{
			type: 'card',
		},
		
		items:[
			{xtype: 'businessListView'}	//Add businessListView only at init
		]
	},
	
	initialize:function(){
		console.log('BusinessMainView loaded');
		Ext.create('BG.store.BusinessStore', {storeId: 'businessStore'}).load();
		//Ext.getStore('businessStore').load();
		//Ext.getCmp('businessListView').reload();
	}
});