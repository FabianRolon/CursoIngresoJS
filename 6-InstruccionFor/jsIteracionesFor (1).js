function mostrar()
{
	var numero;
	var contadorUno=0;
	var contadorDos=0;
	var contadorTres=0;
	var contadorCuatro=0;
	var contadorCinco=0;
	var contadorSeis=0;
	var contadorSiete=0;
	var contadorOcho=0;
	var contadorNueve=0;
	var contadorDiez=0;
	var porcentajeCuatro;

	for(contador = 0;contador < 10000;contador++)
	{
		numero = Math.floor((Math.random() * 10) + 1);
		console.log(numero);

		switch(numero)
		{
			case 1:
				contadorUno++;
			break;
				
			case 2:
				contadorDos++;
			break;
				
			case 3:
				contadorTres++;
			break;
				
			case 4:
				
				contadorCuatro++;
				porcentajeCuatro = contadorCuatro*100/contador;
			
				if(porcentajeCuatro < 2)
				{
					//contador--;
					continue;
				}
			break;
				
			case 5:
				contadorCinco++;
			break;
				
			case 6:
				contadorSeis++;
			break;
				
			case 7:
				contadorSiete++;
			break;
				
			case 8:
				contadorOcho++;
			break;
				
			case 9:
				contadorNueve++;
			break;
				
			case 10:
				contadorDiez++;
			break;
		}
	}

	console.log("El uno salio "+contadorUno*100/contador+"%");
	console.log("El dos salio "+contadorDos*100/contador+"%");
	console.log("El tres salio "+contadorTres*100/contador+"%");
	console.log("El cuatro salio "+contadorCuatro*100/contador+"%");
	console.log("El cinco salio "+contadorCinco*100/contador+"%");
	console.log("El seis salio "+contadorSeis*100/contador+"%");
	console.log("El siete salio "+contadorSiete*100/contador+"%");
	console.log("El ocho salio "+contadorOcho*100/contador+"%");
	console.log("El nueve salio "+contadorNueve*100/contador+"%");
	console.log("El diez salio "+contadorDiez*100/contador+"%");
	
	console.log(contador);
	suma = contadorUno+contadorDos+contadorTres+contadorCuatro+contadorCinco+contadorSeis+contadorSiete+contadorOcho+contadorNueve+contadorDiez;	

	console.log(suma);
	

}