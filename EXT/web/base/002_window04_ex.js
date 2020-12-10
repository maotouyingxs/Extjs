Ext.onReady(function () {
    // var win = new Ext.window.Window({
    //
    //     title: '添加子组件',
    //     width: '40%',
    //     height: 400,
    //     renderTo:Ext.getBody(),
    //     draggable:false,
    //     resizable:false,
    //     // closable:false,
    //     collapsible:true,
    //     items: [{
    //         xtype:'panel',
    //         width:'50%',
    //         height:100,
    //         html:'我是面板'
    //     }, {
    //         xtype:'button',
    //         text:'我是按钮',
    //         handler:function (btn) {
    //             alert('我被点击了');
    //             alert(btn.text);
    //         }
    //     }]
    // });
    //
    // win.show();


    var win = new Ext.Window({
        id: 'mywin',
        title: '操作组件的形式',
        width: 500,
        height: 300,
        renderTo: Ext.getBody(),
        tbar: [{
            text: '按钮1',
            handler: function (btn) {
                alert(btn.up('window').title);
            }
        }, {
            text: '按钮2',
            handler: function (btn) {
                alert(Ext.getCmp('mywin').title);
            }
        }, {
            text: '按钮3',
            handler: function (btn) {
                alert(btn.ownerCt.ownerCt.title);
            }
        }]
    });

    win.show();
});