// closure：可以將變數封存在記憶體內

function updateMoney () {
    var memory = 1000;
     // HINT: changeMoney 因為沒有用 var 宣告，因此會被 declare 到全域的 scope
    changeMoeny = function (){
        memory = 500;
    }
    return function (diff) {
        memory = memory + diff;
        return memory;
    }
}