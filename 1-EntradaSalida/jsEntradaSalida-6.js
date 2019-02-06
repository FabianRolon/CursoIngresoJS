/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primernumero;
	var segundonumero;

	primernumero = document.getElementById('numeroUno').value;
	segundonumero = document.getElementById('numeroDos').value;

	primernumero = parseInt(primernumero);
	segundonumero = parseInt(segundonumero);
	
	resultado = primernumero + segundonumero;
	
	alert("la suma es "+resultado);
	//alert(primernumero + segundonumero);

}


