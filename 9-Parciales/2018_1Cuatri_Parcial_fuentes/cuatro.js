/*al realizar una compra, si compra de mas e dos productos se realiza un descuento del 10%
y si supera los $2000 se agrega un descuento adicional de 15%, si el pago es con tarjeta y no efectivo
al precio final se le agrega un 10% de recargo*/

function mostrar()
{
	var cantidadCompra;
	var precioTotalCompra;
	var recargo;
	var metodoDePago;
	var precioFinal;

	cantidadCompra = prompt("Cuantos productos compra?");
	precioTotalCompra = prompt("Cual es el valor total de la compra?")
	metodoDePago = prompt("Si paga en efectivo ingrese 1, sino 0");

	metodoDePago = parseInt(metodoDePago);
	precioTotalCompra = parseInt(precioTotalCompra);
	cantidadCompra = parseInt(cantidadCompra);

	if(cantidadCompra > 2)	
	{
		precioFinal = precioTotalCompra * (1 - 1/10);
		
		if(precioTotalCompra > 2000)
		{
			precioFinal = (precioTotalCompra * (1 - 25/100));
		}
		
	}
	
	
	if(metodoDePago == 0)
	{
			precioFinal = precioFinal * (1 + 1/10);
	}

	alert("El precio final de su compra es: "+precioFinal);


	

	
	
}
