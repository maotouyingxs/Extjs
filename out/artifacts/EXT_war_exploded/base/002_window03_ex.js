Ext.onReady(function () {
//    点击一个按钮，打开一个窗体
//     var btn = Ext.get('btn'); //这个元素是经过Ext包装的一个Ext的DOM对象
//
//     // alert(btn.dom.value());
//
//     btn.on('click',function () {
//
//         if(!Ext.getCmp('mywin')) {
//             Ext.create('Ext.window.Window', {
//                 id: 'mywin',
//                 title: '新窗体',
//                 height: 300,
//                 width: 400,
//                 // modal:true,
//                 renderTo: Ext.getBody()
//             }).show();
//         }
//     });


    var win = Ext.create('Ext.window.Window',{
        title: '新窗体',
        height: 300,
        width: 400,
        renderTo: Ext.getBody(),
        closeAction:'hide'
    });

    Ext.get('btn').on('click',function () {
        win.show();
    });
})