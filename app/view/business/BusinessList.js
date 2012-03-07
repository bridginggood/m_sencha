Ext.define('BG.view.business.BusinessList', {
    extend: 'Ext.List',
    xtype: 'businessList',
    requires: ['BG.store.BusinessStore'],
    
    config: {
        title: 'Places Near You',
        //grouped: true,
        itemTpl: '{BusinessName}<BR>{BusinessAddress}',
        store: 'BusinessStore',
        onItemTap: true,
		allowDeselect: false,
    }
});