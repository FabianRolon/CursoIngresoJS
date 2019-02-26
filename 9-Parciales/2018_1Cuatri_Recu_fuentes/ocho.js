function mostrar()
{
	var numero;
	var validador='si';
	var contador;
	var letra;
	
	while(validador == 'si')
 	{
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

		validador = prompt("Desea continuar 'si' o 'no'");



	}	
	
}
