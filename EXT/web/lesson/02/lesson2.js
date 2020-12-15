(function () {
    Ext.onReady(function () {
        //
        Ext.define('User', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'name',  type: 'string'},
                {name: 'age',   type: 'int', convert: null},
                {name: 'phone', type: 'string'},
                {name: 'alive', type: 'boolean', defaultValue: true, convert: null}
            ],

            changeName: function() {
                var oldName = this.get('name'),
                    newName = oldName + " The Barbarian";

                this.set('name', newName);
            }
        });

        var user = Ext.create("User", {
            name:'uspcat.com',
            age:20,
            phone: 'shouji'
        });
        alert(user.get("name"));

    });
})();

