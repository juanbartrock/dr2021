// function validarEnteroEnCampo (identificadorDelCampo) {
//     var field = document.getElementById(identificadorDelCampo);
//     var valueInt = parseInt(field.value);

//     if (!Number.isInteger(valueInt)) {
//         alert("No es un entero")
//     } else {
//         field.value = valueInt;
//     }
// }

// function comprobarClave(){
//   clave1 = document.f1.clave1.value
//   clave2 = document.f1.clave2.value

//   if (clave1 == clave2)
//     alert("Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo")
//   else
//     alert("Las dos claves son distintas...\nRealizaríamos las acciones del caso negativo")
// }

// function cuenta(){
//   document.forms[0].caracteres.value=document.forms[0].texto.value.length
// }

function mueveReloj(){
  var momentoActual = new Date()
  var hora = momentoActual.getHours()
  var minuto =  momentoActual.getMinutes()
  var segundo =  momentoActual.getSeconds()

  var str_segundo = new String (segundo)
  if (str_segundo.length == 1)
    segundo = "0"+segundo
  
  var str_minuto = new String (minuto)
  if (str_minuto.length == 1)
    minuto = "0"+minuto

  var str_hora = new String (hora)
  if (str_hora.length == 1)
    hora = "0"+hora

  var horaImprimible =  hora + " : " + minuto + " : " + segundo

  document.form_reloj.reloj.value = horaImprimible

  setTimeout("mueveReloj()",1000)
}