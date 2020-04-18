//Função para inverter string
function ReverseConvert( string ) { return( parseInt(string.split("").reverse().join("")));}

//Função de output de soma 
function showSoma(n1, n2, n3) {
  alert("Soma\n" +  n1 + " + " + n2 + " = " + n3);
}

//Função de output de Mult
function showMult(n1, n2 , n3) {
    alert("Multiplicação\n" +  n1 + " x " + n2 + " = " + n3);
}

//@@@@ FUNÇÃO DE SOMA @@@@@
function Soma( n1=0, n2=0) {
  //Números
  var helper;
  var overflow;

  //Strings
  let answ = "";


  //Transformando em string para saber as casas decimais
  var stringN1 = n1.toString();
  var stringN2 = n2.toString();

  helper = 0;
  overflow = 0;

  if( n1 >= n2 ) {
    //Correção de casas decimais    
    helper = stringN1.length - stringN2.length;
    for(var i = 0; i < helper; i++) 
    { 
      stringN2 = "0" + stringN2;
      
    }

    //Traz para frente
    for(var i=stringN1.length-1; i >= 0; i--) {
      helper = (parseInt(stringN1[i], 10) + parseInt(stringN2[i], 10)) + overflow;      
      overflow = 0;

      //Evidenciando Overflow
      if( helper >= 10 ) {overflow = 1;}

      if(overflow == 1 && i > 0) {
        console.log("here");
        answ += helper % 10;
        continue;
      }
      
      if( helper == 10 ) {answ += "01"; continue;}
      answ += helper;
    }
  }

  else {
    //Correção de casas decimais    
    helper = stringN2.length - stringN1.length;
    for(var i = 0; i < helper; i++) 
    { 
      stringN2 = "0" + stringN2;
      
    }

    //Traz para frente
    for(var i=stringN2.length-1; i >= 0; i--) {
      helper = (parseInt(stringN2[i], 10) + parseInt(stringN1[i], 10)) + overflow;      
      overflow = 0;

      //Evidenciando Overflow
      if( helper >= 10 ) {overflow = 1;}

      if(overflow == 1 && i > 0) {
        console.log("here");
        answ += helper % 10;
        continue;
      }
      
      if( helper == 10 ) {answ += "01"; continue;}
      answ += helper;
    }
  }
  return( ReverseConvert( answ ) );
}


//@@@@@@ FUNÇÃO DE MULTIPLICAÇÃO @@@@@@@
function Multiplication( n1=0, n2=0) {
  //String de resposta
  let answ = 0; 
  
  //Transformando em string
  var stringN1 = n1.toString();
  var stringN2 = n2.toString();

  //Caso de Otimização (STONKS)
  if( n1 == 0 || n2 == 0) return(0);
  if( n1 == 1) return(n2);
  if(n2 == 1) return(n1);

  //Identificando o menor número para minizar laço
  if(n1 > n2 ) {
    for(var i=0; i<n2; i++) {
      answ += Soma(n1, 0); 
    }
  }
  
  else {
    for(var i=0; i<n2; i++) {
      answ += Soma(n1, 0);
    }
  return(answ);
  }
}

let corona = Multiplication(2, 20);
console.log(corona);