Ext.define('BG.model.User',{
	extend: 'Ext.data.Model',
	
	config:{
		fields: [
			{name: 'UserId', type:'string'},
			{name: 'UserEmail', type:'string'},
			{name: 'UserFirstName', type:'string'},
			{name: 'UserLastName', type:'string'},
			{name: 'UserType', type:'string'},
			{name: 'QRCode', type:'string'},
		]
	},
});