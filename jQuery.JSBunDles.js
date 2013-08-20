$.fn.priceable = function(currency){
    currency = currency || '£';
   
    this.on('blur', function(){
        var newVal = $(this).val();
        newVal = parseFloat(newVal.replace(currency + ' ', '').replace(/,/g, '')) || 0;
        newVal = currency + ' ' + (newVal.toFixed(2));
        $(this).val(newVal);
    });
     
    this.on('focus', function(){
        var newVal = $(this).val();
        newVal = newVal.replace(currency + ' ', '').;
        $(this).val(newVal);
    });
     
    if(!this.val()){
        this.val(currency + ' 0.00');
    }
 };
