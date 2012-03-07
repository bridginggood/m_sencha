Ext.define('BG.controller.LoginController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginView: 'loginView',		//LoginView
			mainView: 'mainView',		//MainView
			loginButton: 'button[action=doLogin]',	//Login button
			user: 'user'	//User Model
        },
        control: {
            loginButton: {
                tap: 'doLogin'	//Call doLogin function on tap
            }
        },

    },

	//Function to attempt user login
    doLogin: function(list, record) {
		console.log('Start doLogin');
		
		var loginController = this;
		var loginForm = this.getLoginView();
		//var user = this.getUser();

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
				console.log(response['UserEmail']);
				//loginController.setUser('UserEmail', response['UserEmail']);
				//user.set('UserEmail', response['UserEmail']);
				//console.log(user);
				Ext.Viewport.setActiveItem({xtype: 'mainView'});
			},
			
			//Failed login
			failure:function(){
				loginForm.setMasked(false);
				Ext.Msg.alert('Error', 'Invalid username or password.');
			},
		});
		console.log('End doLogin');
    },
});