/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerprecio;
	var segundoprecio;
	var tercerprecio;
	var sumatotal;

	primerprecio = document.getElementById('PrecioUno').value;
	segundoprecio = document.getElementById('PrecioDos').value;
	tercerprecio = document.getElementById('PrecioTres').value;

	primerprecio = parseInt(primerprecio);
	segundoprecio = parseInt(segundoprecio);
	tercerprecio = parseInt(tercerprecio);

	sumatotal = primerprecio + segundoprecio + tercerprecio;

	alert("La suma es: "+sumatotal);
}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}