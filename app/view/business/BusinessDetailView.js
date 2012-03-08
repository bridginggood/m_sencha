Ext.define('BG.view.business.BusinessDetailView', {
    extend: 'Ext.Panel',
    alias: 'widget.businessDetailView',

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