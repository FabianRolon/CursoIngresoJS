function mostrar()
{

	var contador=0;
	var numero;
	var Maximo;
	var Minimo;	
	var respuesta='si';

	while(respuesta == "si")
	{
		contador++;
		numero = prompt("Ingrese el numero "+contador);
		numero = parseInt(numero);
		
		if(contador == 1)
		{
			Maximo = numero;
			Minimo = numero;
		}

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

		respuesta = prompt("Desea ingresar otro numero? si para continuar, sino presone cualquier tecla")
		
	}

	maximo.value = Maximo;
	minimo.value = Minimo;

}//FIN DE LA FUNCIÓN