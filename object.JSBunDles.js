Object.defineProperties(
    Object.prototype,
    {
        getFirstIndex: {
            value: function(){
                return this.getAtIndex(0);
            }
        },
        getLastIndex: {
            value: function(){
                var count = this.getCount();

                return this.getAtIndex(count - 1);
            }
        },
        getAtIndex: {
            value: function(index){
                var keys = Object.keys(this);
                return this[keys[index]];
            }
        },
        getRandomIndex: {
            value: function(){
                var rand = Math.floor(Math.random() * this.getCount());

                return this.getAtIndex(rand);
            }
        },
        getCount: {
            value: function(){
                var length = 0;
                for(var i in this){
                    length++;
                }

                return length;
            }
        },
        toArray: {
            value: function(){
                var items = [];
                for(var i in this){
                    items.push(this[i]);
                }

                return items;
            }
        }
    }
);
