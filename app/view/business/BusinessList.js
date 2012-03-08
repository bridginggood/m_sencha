Ext.define('BG.view.business.BusinessList', {
	extend: 'Ext.List',
	alias: 'widget.businessList',

	config: {
		title: 'Places Near You',
		//grouped: true,
		itemTpl: '{BusinessName}<BR>{BusinessAddress}',
		store: 'BusinessStore',
		
		onItemTap: true,
		allowDeselect: false,
	},
});