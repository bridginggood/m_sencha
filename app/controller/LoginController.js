Ext.define('BG.controller.LoginController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginView: 'loginView',		//LoginView
			mainView: 'mainView',		//MainView
			loginButton: 'button[action=doLogin]'	//Login button
        },
        control: {
            loginButton: {
                tap: 'doLogin'	//Call doLogin function on tap
            }
        },

    },

    doLogin: function(list, record) {
		//TODO: Implement login
		console.log('Start doLogin');
		//Ext.Viewport.add({xtype: 'mainView'});	//Can this line be omitted? Why? Because it has already been initialized from the app.js with 'requires' statement? Hmm...
		var loginForm = this.getLoginView();
		loginForm.submit({
			method:'POST',
			url: './app/proxy/LoginProxy.php',
			scriptTag: true,
			waitTitle: 'Connecting',
			waitMsg: 'Please wait...',
			resultCode: function(r){
				console.log(r);
			},
			success:function(){
				Ext.Viewport.setActiveItem({xtype: 'mainView'});
			},
			failure:function(){
				Ext.Msg.alert('Error', 'Invalid username/password');
			},
		});
		//Ext.Viewport.setActiveItem({xtype: 'mainView'});
		console.log('End doLogin');
    }

});