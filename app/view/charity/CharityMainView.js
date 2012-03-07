Ext.define('BG.view.charity.CharityMainView',{
	extend: 'Ext.Panel', 
	xtype: 'charityMainView',

	requires:[
	'Ext.carousel.Carousel'
	],

	config: {
		title: 'Charity',
		iconCls: 'home',

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
		//Vertical carousel
		{
			xtype: 'carousel',
			direction: 'vertical',
			
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
		}]
	}
});