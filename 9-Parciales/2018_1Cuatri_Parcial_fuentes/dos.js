/*alert("el precio del producto en
efectivo es : $xxxx, con tarjeta
tiene un recargo del 10% que seria $xx de recargo, 
costandole final $xxxx")
*/

function mostrar()
{
	var precio;
	var precioRecargo;
	var precioFinal;

	precio = elNombre.value;

	precio = parseInt(precio);

	precioRecargo = precio/10;
	precioFinal = precio + precioRecargo; 

	alert("El precio del producto en efectivo es : $"+precio+", con tarjeta tiene un recargo del 10% que seria $"+precioRecargo+" de recargo, costandole final $"+precioFinal);
  
}
