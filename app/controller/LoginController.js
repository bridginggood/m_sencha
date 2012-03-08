Ext.define('BG.controller.LoginController', {
    extend: 'Ext.app.Controller',
	
    config: {
        refs: {
			viewport: 'viewport',	//Viewport
            loginView: 'loginView',		//LoginView
			
			mainView: { selector: 'mainView', autoCreate: true},
			//mainView: 'mainView',		//MainView
			
			/*
			businessMainView: { xtype: 'businessMainView', selector: 'businessMainView', autoCreate: true},
			userMainView: { xtype: 'userMainView', selector: 'userMainView', autoCreate: true},
			charityMainView: { xtype: 'charityMainView', selector: 'charityMainView', autoCreate: true},
			*/
			
			loginButton: 'button[action=doLogin]',	//Login button
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
		
		var viewport = this.getViewport();
		var loginView = this.getLoginView();
		var mainView = this.getMainView();
		
		/*
		var charityMainView = this.getCharityMainView();
		var businessMainView = this.getBusinessMainView();
		var userMainView = this.getUserMainView();
		*/
		
		//Set loading dialog mask
		loginView.setMasked({xtype: 'loadmask', message: 'Loading'});
		
		//By default, calls URL using AJAX proxy
		loginView.submit({
			method:'POST',
			url: './app/proxy/LoginProxy.php',

			//On successful login
			success:function(form, response){
				mUser = Ext.create('BG.model.User',{
					UserEmail: response['UserEmail'],
					UserFirstName: response['UserFirstName'],
					UserLastName: response['UserLastName'],
				});
				
				console.log(mainView);
				/*
				mainView.removeAll();
				mainView.add(Ext.create('BG.view.charity.CharityMainView'));
				mainView.add(Ext.create('BG.view.user.UserMainView'));
				mainView.add(Ext.create('BG.view.business.BusinessMainView'));
				
				userMainView.removeAll();
				userMainView.add(Ext.create('BG.view.user.UserMainView'));
				//userMainView.doLayout();
				*/
				loginView.setMasked(false);
				viewport.setActiveItem({xtype: 'mainView'});
			},
			
			//Failed login
			failure:function(){
				loginView.setMasked(false);
				Ext.Msg.alert('Error', 'Invalid username or password.');
			},
		});
		console.log('End doLogin');
    },
});