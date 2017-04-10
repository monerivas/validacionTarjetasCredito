function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if( typeof creditCardNumber== "undefined"){
      return"Ingresa un numero";
    }
    if (typeof creditCardNumber!= "number"){
      return"Error de dato";
    }



    var numPares=[];
    var numImpares=[];
    numerosMultiMenos9=[];
    var string= creditCardNumber.toString();
    var stringSeparado= string.split("");
    numerosSeparados= stringSeparado.map(Number);

    if(string.length < 16){
      return "Faltan numeros";
    }


    function sacarPares(num,i) {
      if(i%2==0){
        return numPares.push(num);
      }else{
        return numImpares.push(num);
      }

    }
    stringSeparado.map(sacarPares);

    function operacionesParaLosPares(num) {
      var num1=num*2;
      if(num1>9){
        return num1-9
      }else {
        return num1
      }

    }
    numerosMultiMenos9= numPares.map(operacionesParaLosPares);




}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
