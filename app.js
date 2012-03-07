Ext.application({
    name: 'BG',
	models: ['Business', 'User'],
    views: ['MainView', 'LoginView',
		'business.BusinessMainView', 'business.BusinessListView', 'business.BusinessDetailView', 'business.BusinessMapView',
		'charity.CharityMainView',
		'user.UserMainView'],
	controllers: ['BusinessController', 'LoginController'],
	stores: ['BusinessStore'],

    launch: function () {
        var mainView = Ext.create("BG.view.LoginView");
        Ext.Viewport.add(mainView);
    }
});
