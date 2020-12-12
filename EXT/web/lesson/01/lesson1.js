(function () {
    // function user() {
    //     this.name = '张三';
    //     this.age = 25;
    //     var email = "111.com";
    //     this.getEmail = function () {
    //         return email;
    //     };
    // }
    //
    // var u = Ext.create("user");
    // alert(u.getEmail());

    Ext.onReady(function () {
        // var win = new Ext.window.Window({
        //     width: 400,
        //     height: 300,
        //     title: 'uspcat'
        // });
        //
        // Ext.get("myButton").on("click", function () {
        //     win.show();
        // });

        // var o = {
        //     say: function () {
        //         alert(1111);
        //     }
        // }
        //
        // var fn = Ext.Function.alias(o, 'say');
        // fn();

        // var win = Ext.create('Ext.window.Window', {
        //     width: 400,
        //     height: 300,
        //     title: 'uspcat'
        // });
        // win.show();

        Ext.define("myWin", {
            extend: 'Ext.window.Window',
            width: 400,
            height: 300,
            newtitle: 'new uspcat',
            mySetTitle: function () {
                this.title = this.newtitle;
            },
            title: 'uspcat',
            initComponent: function () {
                this.mySetTitle();
                this.callParent(arguments);
            }
        });

        var myWin = Ext.create('myWin', {
            title:'myWin'
        });
        myWin.show();
    });
})();

