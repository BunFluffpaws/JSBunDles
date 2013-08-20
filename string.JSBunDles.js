Object.defineProperties(
    Object.prototype,
    {
        toInt: function(){
            return Math.round(this.toFloat());
        },

        toFloat: function(){
            return parseFloat(this);
        },

        isNumeric: function(){
            return parseInt(this) == this || parseFloat(this) == this;
        },
        
        ucFirst: function(){
            return this[0].toUpperCase() + this.substr(1);
        },

        lPad: function(length, char_){
            if(!char_){
                char_ = ' ';
            }
        
            if(length <= this.length){
                return this.toString();
            }
        
            return new Array(length - this.length + 1).join(char_) + this;
        },
        rPad: function(length, char_){
            if(!char_){
                char_ = ' ';
            }
        
            if(length <= this.length){
                return this.toString();
            }
        
            return this + new Array(length - this.length + 1).join(char_);
        },
        
        contains: function(string){
            return this.indexOf(string) !== -1;
        },
        
        startsWith: function(string){
            return this.indexOf(string) === 0;
        },
        
        endsWith: function(string){
            return this.substr(this.length - string.length) === string;
        },
        
        equalsOne: function(){
            for(var i in arguments){
                if(arguments[i] == this){
                    return true;
                }
            }
        
            return false;
        }
    }
);