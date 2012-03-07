Ext.define('BG.model.User',{
	extend: 'Ext.data.Model',
	
	config:{
		fields: [
			{name: 'email', type:'string'},
			{name: 'password', type:'string'},
		]
	},
});