Ext.onReady(function () {
    var wingroup = new Ext.WindowGroup();
    
    for (var i = 1; i <= 5; i++) {
        var win = Ext.create('Ext.Window', {
            title: '第' + i + '个窗口',
            id: 'win_' + i,
            width:300,
            height:300,
            renderTo: Ext.getBody()
        });

        win.show();
        wingroup.register(win);
    }

    var btn1 = Ext.create('Ext.button.Button',{
        text:'全部隐藏',
        renderTo:Ext.getBody(),
        handler:function () {
            wingroup.hideAll();
        }
    });

    var btn2 = Ext.create('Ext.button.Button',{
        text:'全部显示',
        renderTo:Ext.getBody(),
        handler:function () {
            wingroup.each(function (cmp) {
                cmp.show();
            });
        }
    });


});