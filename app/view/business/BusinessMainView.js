Ext.define('BG.view.business.BusinessMainView',{
	extend: 'Ext.NavigationView', 
	xtype: 'businessMainView',
	
	requires:[
	'BG.view.business.BusinessListView',
	],
	
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
	}
});