function mostrar()
{
	var peso;
	var validador='si';
	var contador=0;
	var nombreAnimal;
	var temperaturasPar=0;
	var contadorAnimalbajoCero=0;
	var pesoTotal=0;
	var promedioPeso;
	var pesoMaximo = 1;
	var pesoMinimo = 1000;
	var nombreAnimalMaximo;
	var nombreAnimalMinimo;
	var temperaturaMasPesado;
	var pesoMaximoBajoCero=1;
	var pesoMinimoBajoCero=1000;

	while(validador == 'si')
 	{
		contador++;

		nombreAnimal = prompt("Ingrese el nombre del animal" );
		

		while(!(isNaN(nombreAnimal)) || nombreAnimal.length == 0)
		{
			nombreAnimal= prompt("ERROR! Ingrese el nombre del animal");
		}

		peso = prompt("Ingrese el peso entre 1 y 1000");
		peso = parseInt(peso);

		while(isNaN(peso) || peso > 1000 || peso < 1)
		{
			peso = prompt("ERROR! Ingrese el peso entre 1 y 1000");
			peso = parseInt(peso);
		}

		temperatura = prompt("Ingrese la temperatura del habitad entre -30 y 30");
		temperatura = parseInt(temperatura);

		while(isNaN(temperatura) || temperatura > 30 || temperatura < -30)
		{
			temperatura = prompt("ERROR! Ingrese el temperatura entre -30 y 30");
			temperatura = parseInt(temperatura);
		}

		pesoTotal = pesoTotal + peso;

		if(peso > pesoMaximo)
		{
			pesoMaximo = peso;
			nombreAnimalMaximo = nombreAnimal;
			temperaturaMasPesado = temperatura;
		}

	
		if(temperatura%2 == 0)
		{
			temperaturasPar++;
		}

		if(temperatura < 0)
		{
			contadorAnimalbajoCero++;
			
			/*if(contador==1)
			{
				pesoMaximoBajoCero = peso;
				pesoMinimoBajoCero = peso;
			}*/
			
			if(peso > pesoMaximoBajoCero)
			{
				pesoMaximoBajoCero = peso;
			}
			else
			{
				if(peso < pesoMinimoBajoCero)
				{
					pesoMinimoBajoCero = peso;
				}
				
			}

		}

		promedioPeso = pesoTotal/contador;

		validador = prompt("Desea continuar 'si' o 'presione cualquier tecla/s' para salir");
	}	

	/*alert("La cantidad de temperaturas pares es: "+temperaturasPar);
	alert("El nombre y temperatura del animal mas pesado es: "+nombreAnimalMaximo+" "+temperaturaMasPesado+"°C");
	alert("La cantidad de animales que viven bajo cero es: "+contadorAnimalbajoCero);
	alert("El promedio del peso de todos los animales es: "+promedioPeso);
	alert("El peso maximo y minimo de los animales que viven bajo cero es: "+pesoMaximoBajoCero+ " y "+pesoMinimoBajoCero);
*/
	document.write("La cantidad de temperaturas pares es: "+temperaturasPar+"<br>");
	document.write("El nombre y temperatura del animal mas pesado es: "+nombreAnimalMaximo+" "+temperaturaMasPesado+"°C <br>" );
	document.write("La cantidad de animales que viven bajo cero es: "+contadorAnimalbajoCero+"<br>");
	document.write("El promedio del peso de todos los animales es: "+promedioPeso+"<br>");
	document.write("El peso maximo y minimo de los animales que viven bajo cero es: "+pesoMaximoBajoCero+ " y "+pesoMinimoBajoCero+"<br>");
}	
