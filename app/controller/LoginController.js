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
		
		//Set loading dialog mask
		loginForm.setMasked({xtype: 'loadmask', message: 'Loading'});
		
		//By default, calls URL using AJAX proxy
		loginForm.submit({
			method:'POST',
			url: './app/proxy/LoginProxy.php',

			//On successful login
			success:function(form, response){
				loginForm.setMasked(false);
				console.log(response);
				Ext.Viewport.setActiveItem({xtype: 'mainView'});
			},
			
			//Failed login
			failure:function(){
				loginForm.setMasked(false);
				Ext.Msg.alert('Error', 'Invalid username/password');
			},
		});
		console.log('End doLogin');
    }

});