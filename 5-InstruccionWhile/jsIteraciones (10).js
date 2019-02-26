function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero;
	var Maximo;
	var Minimo;	
	var sumaNegativos=0;
	var sumaPositivos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var verificadorPar;

	while(respuesta!="no")
	{
	
		contador++;
		numero = prompt("Ingrese un numero, para terminar ingrese 'no'");
		numero = parseInt(numero);
		
		if(numero < 0)
		{
			sumaNegativos = sumaNegativos + numero;
			contadorNegativos++;
		}
		else
		{
			if(numero > 0)
			{
				sumaPositivos = sumaPositivos + numero;
				contadorPositivos++;
			}
		}

		verificadorPar = numero%2;
		console.log(verificadorPar);

		if(numero>Maximo)
		{
			Maximo = numero;
		}
		else
		{
			if(numero<Minimo)
			{
				Minimo = numero;
			}
		}

		
		
	}

	maximo.value = Maximo;
	minimo.value = Minimo;

}//FIN DE LA FUNCIÓN