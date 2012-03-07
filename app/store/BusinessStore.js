Ext.define('BG.store.BusinessStore',{
	extend: 'Ext.data.Store',
	requires: ['Ext.data.proxy.JsonP'],
	
	config:{
		model: 'BG.model.Business',
		autoLoad: true,
		/*
		SAMPLE DATA for local testing
		
		data:[
		{ BusinessName: "Taj", BusinessAddress:"Gangnam, Seoul, Korea"},
		{ BusinessName: "TajA", BusinessAddress:"A, Seoul, Korea"},
		{ BusinessName: "TajB", BusinessAddress:"B, Seoul, Korea"},
		{ BusinessName: "TajC", BusinessAddress:"C, Seoul, Korea"},
		],
		*/
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