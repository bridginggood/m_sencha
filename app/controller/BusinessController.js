Ext.define('BG.controller.BusinessController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: 'businessMainView',
			list: 'businessList',
			mapView: 'businessMapView',
			mapButton: 'button[action=showMap]',
        },
        control: {
            list: {
                itemtap: 'showBusinessDetail'
            },
			mapButton: {
                tap: 'showMap'	//Call showMap function on tap
            }
        }
    },

    showBusinessDetail: function(list, index, target, record) {
        this.getMainView().push({
            xtype: 'businessDetailView',
            title: record.get('BusinessName'),
            data: record.getData()
        })
    },
	
	showMap: function(){
		console.log('Start showMap');
		this.getMainView().push({xtype: 'businessMapView'});
		console.log('End showMap');
	},
});