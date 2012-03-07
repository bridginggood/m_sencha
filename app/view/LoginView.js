Ext.define('BG.view.LoginView', {
    extend: 'Ext.form.Panel',
    xtype: 'loginView',
    requires: [
        'Ext.form.FieldSet',
		'Ext.field.Email',
        'Ext.field.Password',
		'Ext.LoadMask',
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
						placeHolder: 'E-mail',
						value: 'jslim@bg.com' //Temp
                    },{
                        xtype: 'passwordfield',
                        name : 'password',
                        label: 'Password',
						placeHolder: 'Password',
						value: 'foobar' //Temp
                    }
                ],
            },{
                xtype:  'button',
                text:   'Login',
				action: 'doLogin',
                ui:     'confirm'
            }
        ]
    },
});
