Ext.onReady(function () {

    Ext.create('Ext.window.Window',{
       title:'我的第一个Window',
        width:400,
        height:300,
        layout:'fit',
        constrain:true,
        modal:true,
        x:50,
        y:50,
        autoScroll:true,
        icon: '',
        html:'<div style="width: 200px;height: 200px">我是第一个div</div><div style="width: 200px;height: 200px">我是第二个div</div>',
        renderTo:Ext.getBody()
    }).show();

})