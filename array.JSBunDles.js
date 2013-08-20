Object.defineProperties(
    Array.prototype,
    {
        getLastIndex: {
            value: function(){
                return this[this.length - 1];
            }
        },
        getRandomIndex: {
            value: function(){
                var rand = Math.floor(Math.random() * this.length);

                return this[rand];
            }
        },
        paginate: {
            value: function(perPage){
                var newArray = [];

                var currentPage = [];
                for(var i in this){
                    if(currentPage.length>=perPage){
                        newArray.push(currentPage);
                        currentPage = [];
                    }

                    currentPage.push(this[i]);
                }
                newArray.push(currentPage);

                return newArray;
            }
        }
    }
);
