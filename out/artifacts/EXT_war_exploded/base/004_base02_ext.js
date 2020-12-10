Ext.onReady(function () {
    
    var src = {name:'张三', age: 20};
    var config = {name: '李四', sex: '男'};


    Ext.apply(src, config);
    for (var attr in  src) {
        alert(attr + ': ' + src[attr]);
    }

});