function mostrar()
{
	var precio;
	var descuento;
	var preciofinal;

	precio = prompt("Ingrese el precio:");
	descuento = prompt("Ingrese el descuento");

	preciofinal = precio * (1-descuento/100);

	elPrecioFinal.value = preciofinal;



}
