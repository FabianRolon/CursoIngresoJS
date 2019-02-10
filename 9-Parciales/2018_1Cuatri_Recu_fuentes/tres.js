function mostrar()
{
	var precio;
	var porcentaje;
	var preciofinal;

	precio = prompt("Ingrese el precio");
	porcentaje = prompt("Ingrese el porcentaje de descuento");	

	preciofinal = precio * ( 1 - porcentaje / 100);

	elPrecioFinal.value = preciofinal;
}
