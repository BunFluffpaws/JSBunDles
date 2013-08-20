JSON.isValid = function(str){
    try{
        JSON.parse(str);
        return true;
    }catch(ex){
        return false;
    }
};
