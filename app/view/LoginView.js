Ext.define('BG.view.LoginView', {
    extend: 'Ext.form.Panel',
    xtype: 'loginView',
    requires: [
        'Ext.form.FieldSet',
		'Ext.field.Email',
        'Ext.field.Password'
    ],

    config: {
        iconCls: 'settings',
        title: 'Login',
		
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'Login'
            },
            {
                xtype: 'fieldset',
                title: 'Account Info.',

                items: [
                    {
                        xtype: 'emailfield',
                        name : 'email',
                        label: 'E-mail',
						placeHolder: 'E-mail'
                    },{
                        xtype: 'passwordfield',
                        name : 'password',
                        label: 'Password',
						placeHolder: 'Password'
                    }
                ],
            },{
                xtype:  'button',
                text:   'Login',
				action: 'doLogin',
                ui:     'confirm'
            }
        ]
    }
});
