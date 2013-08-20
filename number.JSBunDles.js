Object.defineProperties(
    Number.prototype,
    {
        thousandize: function(splitter){
            splitter = splitter || ',';
            return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        isBetween: function(min, max){
            return this >= min && this <= max;
        },
        percentBetween: function(min, max){
            return ((this - min) / (max - min));
        }
    }
);
