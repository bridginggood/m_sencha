Ext.define('BG.view.business.BusinessDetailView', {
    extend: 'Ext.Panel',
    xtype: 'businessDetailView',

    config: {
        title: 'Details',
        styleHtmlContent: true,
        scrollable: 'vertical',
		//title: 'Details',
		//html: 'Hello World'
        tpl: [
            'Hello {BusinessName}! {BusinessAddress}'
        ]
    }
});