Ext.define('BG.view.business.BusinessListView',{
	extend: 'Ext.Panel', 
	xtype: 'businessListView',
	
	requires:[
	'Ext.carousel.Carousel',
	'BG.view.business.BusinessList',
	'BG.view.business.BusinessDetailView'
	],
	
	config: {
		title: 'Business',
		iconCls: 'trash',

		//Set layout to vertical box
		layout:{
			type: 'vbox',
			align: 'stretch'
		},
		defaults: {
			flex: 1
		},

		items:[
		//Horizontal Carousel
		{
			xtype: 'carousel',
			//Inner items for horizontal views
			defaults:{
				styleHtmlContent: true
			},
			items:[
			{
				html: '<p>First view</p>'
			},
			{
				html: '<p>Second view</p>'
			},
			{
				html: '<p>Third view</p>'
			}]
		},
		//Business listview
		{
			xtype: 'businessList'
		}]
	}
});