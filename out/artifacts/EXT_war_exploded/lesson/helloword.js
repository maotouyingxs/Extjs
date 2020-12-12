Ext.onReady(function () {

    // var src = {name:'张三', age: 20};
    // var config = {name: '李四', sex: '男'};
    //
    //
    // Ext.apply(src, config);
    // for (var attr in  src) {
    //     alert(attr + ': ' + src[attr]);
    // }


    var myArray = [1, 2, 3, 4,-3];
    Ext.Array.every(myArray, function (item) {
        if (item > 0) {
            return true;
        } else {
            // alert(item);
            return false;
        }
    },this);

    var newMyArray = Ext.Array.filter(myArray, function (item) {
        if (item > 0) {
            return true;
        } else {
            return false;
        }
    },this);

    // alert(newMyArray.join("\n"));


});