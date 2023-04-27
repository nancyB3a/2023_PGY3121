//definir función sumar()
function sumar(){
    //rescatar desde el formulario el num1 y el num2
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    //obtener el resultado de la suma
    console.log("Estoy en el arhivo .js");
    //primero debo convertirlo a int
    var resultado=parseInt(n1)+parseInt(n2);
    alert("El resultado de la suma es: "+resultado);
}