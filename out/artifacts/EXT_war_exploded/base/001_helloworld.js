Ext.onReady(function () {

    Ext.MessageBox.alert('我是标题！', 'Hello world!',function () {
        console.info(this);
        alert('我是回调函数！');
    },this);

})