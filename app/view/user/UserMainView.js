Ext.define('BG.view.user.UserMainView',{
	extend: 'Ext.Panel', 
	xtype: 'userMainView',
	
	config: {
		title: 'User',
		iconCls: 'star',
		html: 'placeholder text' + mUser.data,
		styleHtmlContent: true
	},
	
	initialize:function(){
		console.log(mUser.data);
		
	},
});