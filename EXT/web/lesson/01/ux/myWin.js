Ext.define("ux.myWin", {
    extend: 'Ext.window.Window',
    width: 400,
    height: 300,
    newtitle: 'new uspcat',
    config: {
        price:500
    },
    mySetTitle: function () {
        this.title = this.newtitle;
    },
    title: 'uspcat',
    initComponent: function () {
        this.mySetTitle();
        this.callParent(arguments);
    }
});