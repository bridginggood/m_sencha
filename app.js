Ext.Loader.setPath('BG', 'app');
Ext.Loader.setConfig({enabled:true});

var mUser = 'Hello World!';


Ext.require('BG.view.Viewport');
Ext.require('BG.view.LoginView');
Ext.require('BG.view.MainView');
Ext.require('BG.view.charity.CharityMainView');
Ext.require('BG.view.user.UserMainView');
Ext.require('BG.view.business.BusinessMainView');
Ext.require('BG.view.business.BusinessListView');
Ext.require('BG.view.business.BusinessList');
Ext.require('BG.view.business.BusinessDetailView');
Ext.require('BG.view.business.BusinessMapView');

Ext.require('BG.model.User');
Ext.require('BG.model.Business');

Ext.require('BG.store.BusinessStore');

//Ext.require(['BG.view.*', 'BG.view.*.*', 'BG.model.*']);


Ext.application({
    name: 'BG',

/*	
	models: ['Business', 'User',],
	views: ['LoginView', 'MainView', 'Viewport'],
	controllers: ['BusinessController', 'LoginController'],
	stores: ['BusinessStore'],
*/
	controllers: ['BusinessController', 'LoginController'],
	
    launch: function () {
		Ext.create('BG.view.Viewport');
    }
});
