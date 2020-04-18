
let n1_Obj = document.getElementById("n1");
let n2_Obj = document.getElementById("n2");
let btnSoma = document.getElementById("submitSoma");

btnSoma.addEventListener("click", function(e) {

  let n3 = Soma( parseInt( n1_Obj.value), parseInt( n2_Obj.value) );
  showSoma( n1_Obj.value, n2_Obj.value, n3 );
  e.prevendDefault();

});


let n4_Obj = document.getElementById("n4");
let n5_Obj = document.getElementById("n5");
let btnMult = document.getElementById("submitMult");


btnMult.addEventListener("click", function(e) {

  let n3 = Multiplication( parseInt( n4_Obj.value ), parseInt( n5_Obj.value) );
  console.log(n3);
  showMult( n4_Obj.value, n5_Obj.value, n3 );
  e.prevendDefault();

});