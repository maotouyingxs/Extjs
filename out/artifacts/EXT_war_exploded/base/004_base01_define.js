Ext.onReady(function () {
    // Ext.define('Person',{
    //
    //     //config 属性就是配置当前类的属性内容，并且会加上get和set方法
    //     config:{
    //         name:'z3',
    //         age:20
    //     },
    //
    //     say: function () {
    //
    //         alert('我是方法。。。')
    //     },
    //     constructor:function (config) {
    //         var me = this;
    //         me.initConfig(config);
    //     }
    // });
    //
    //
    // // var p = new Person();
    // // alert(p.getName());
    // // alert(p.getAge());
    // // p.say();
    //
    // var p = Ext.create('Person',{
    //     name: '王五',
    //     age : 30
    // });
    //
    // alert(p.getName());
    // alert(p.getAge());
    // p.say();

    Ext.define('Person',{
        config:{
            name:'bjsxt'
        },
        constructor:function (config) {
            var me = this;
            me.initConfig(config);
        }

    });

    Ext.define('Boy',{
        extend: 'Person',
        config:{
            sex:'男',
            age:20
        }
    });


    var b = Ext.create('Boy');
    alert(b.getName());
    alert(b.getSex());
    alert(b.getAge());

});