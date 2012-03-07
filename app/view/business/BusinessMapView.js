Ext.define('BG.view.business.BusinessMapView', {
	extend: 'Ext.Map',
	xtype: 'businessMapView',
	useCurrentLocation: false,
 
	mapOptions: {
		zoom: 12
	},

	initialize: function() {
		this.setUseCurrentLocation(true);
	}
});