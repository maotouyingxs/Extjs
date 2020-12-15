Ext.onReady(function () {
    //在组件中添加子组件

    // var win = new Ext.window.Window({
    //     title: '添加子组件实例',
    //     width: '40%',
    //     height: 400,
    //     renderTo: Ext.getBody(),
    //     draggable: false, //不允许拖拽
    //     resizable: false, //不允许改变窗口大小
    //     closable: false,  //不显示关闭按钮
    //     collapsible: true,  //显示折叠按钮
    //     bodyStyle: 'background:#ffc; padding:10px;',
    //     html: '我是window的内容',
    //     //    Ext items  配置子组件的配置项
    //     items: [{
    //         xtype: 'panel',
    //         width: '50%',
    //         height: 100,
    //         title: '我是面板'
    //     }, {
    //         xtype: 'button',
    //         text: '我是按钮',
    //         handler: function (btn) {
    //             alert('我被点击了');
    //             alert(btn.text);
    //         }
    //     }]
    //
    // });
    //
    // win.show();


    var win = new Ext.Window({
        id: 'myWin',
        title: '操作组件的形式',
        width:500,
        height:300,
        renderTo:Ext.getBody(),
        tbar:[
            {
                text:'按钮1',
                handler: function (btn) {
                    //组件都会有 up down 这两个方法（表示向上 向下查找）需要的参数是组件的xtype或者是选择器
                    alert(btn.up('window').title);
                }
            },{
                text:'按钮2',
                handler: function (btn) {
                    alert(Ext.getCmp('myWin').title);
                }
            },{
                text:'按钮3',
                handler: function (btn) {
                    alert(btn.ownerCt.ownerCt.title);
                }
            }
        ]
    });

    win.show();
});