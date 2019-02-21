function mostrar()
{

	var precioHabitacion;
	var descuento;
	var precioFinal;
	var MercadoPago;
	var paquete;

	precioHabitacion = prompt("Ingrese el precio de la habitacion elegida");
	precioHabitacion = parseInt(precioHabitacion);

	metodoDePago = prompt("Ingrese el metodo de pago: Visa, MercadoPago, Paypal, Efectivo, Otro");
	paquete = prompt("Que paquete compro? Todo Incluido, Solo desayuno, Otro");
	
	switch(metodoDePago)
	{
		case "Visa":
		case "MercadoPago":
			descuento = 0.9;
		break;
		
		case "Paypal":
			switch(paquete)
			{
				case "Todo Incluido":
					descuento = 0.75
				break;
				
				default:
					descuento = 0.85;
				break;
			}
		break;	
			
		
		case "Efectivo":
		
			switch(paquete)
			{
				case "Todo Incluido":
					descuento = 0.7;
				break;

				case "Solo desayuno":
					descuento = 0.65;
				break;
				
				default:
					descuento = 0.8;
			}
		break;

		default:
			descuento = 0.95;
		break;
	}

	precioFinal = precioHabitacion*descuento;

	alert("El precio final de la habitacion es: "+precioFinal);
}
