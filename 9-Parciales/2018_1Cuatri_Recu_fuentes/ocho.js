function mostrar()
{
	var numero;
	var validador='si';
	var contador=0;
	var letra;
	var contadorPar=0;
	var contadorImpar=0;
	var sumaPositivos=0;
	var contadorCeros=0;
	var sumaNegativos=0;
	var promedioPositivos;
	var maximo = -100;
	var minimo =  100;
	var letraMaximo;
	var letraMinimo;
	
	while(validador == 'si')
 	{
		contador++;

		letra = prompt("Ingrese una letra" );
		

		while(!(isNaN(letra)) || letra.length > 1 || letra.length == 0)
		{
			letra= prompt("ERROR! Ingrese una letra");
		}

		numero = prompt("Ingrese un numero entre -100 y 100");
		numero = parseInt(numero);

		while(isNaN(numero) || numero > 100 || numero < -100)
		{
			numero = prompt("ERROR! Ingrese un numero entre -100 y 100");
			numero = parseInt(numero);
		}

		if (numero == 0)
		{
			contadorCeros++;
		}
		else
		{
			if(numero < minimo)
			{
				minimo = numero;
				letraMinimo = letra;
			}
			else
			{
				if(numero > maximo)
				{
					maximo = numero;
					letraMaximo = letra;
				}
			}
		}
		
		if(numero%2 == 0)
		{
			contadorPar++;
		}
		else
		{
			contadorImpar++;
		}

		if(numero > 0)
		{
			sumaPositivos = sumaPositivos + numero;
		}
		else
		{
			sumaNegativos = sumaNegativos + numero;
		}

		promedioPositivos = sumaPositivos/contador;

		validador = prompt("Desea continuar 'si' o 'no'");
	}	

	alert("La cantidad de numeros pares es: "+contadorPar);
	alert("La cantidad de numeros impares es: "+contadorImpar);
	alert("La cantidad de CEROS es: "+contadorCeros);
	alert("El promedio de los numeros positivos es: "+promedioPositivos);
	alert("La suma de los numeros negativos es: "+sumaNegativos);
	alert("El numero y la letra del maximo es: "+letraMaximo+maximo+" El numero y la letra del minimo es: "+letraMinimo+minimo);
}
