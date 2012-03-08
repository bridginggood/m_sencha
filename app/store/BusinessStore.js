Ext.define('BG.store.BusinessStore',{
	extend: 'Ext.data.Store',
	requires: ['Ext.data.proxy.JsonP'],
	
	config:{
		model: 'BG.model.Business',
		autoLoad: false,
		//storeId: 'businessStore',

		proxy:{
			type: 'jsonp',
			url: 'http://api.bridginggood.com:8080/business_info/index.json',
			callbackKey: 'apiBusinessInfo',	//Assign callback key as unique identifier. This value must be in sync with that of the server.
			
			reader:{
				dataType: 'jsonp',
				rootProperty: 'Business',
			},
		}
	}
});