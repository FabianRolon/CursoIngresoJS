function mostrar()
{

	var numeroIngresado;
	var numeroAnterior;
	var recorrido;
	
	numeroIngresado = prompt(numeroIngresado);
	numeroIngresado = parseInt(numeroIngresado);

	for(recorrido=numeroIngresado-1;recorrido>1;recorrido--)
	{	
		for(numeroAnterior=recorrido-1;numeroAnterior>1;numeroAnterior--)
		{
			if(numeroIngresado%numeroAnterior==0)
			{
				break;
			}
			
		}

		if(numeroAnterior==1)
		{
			console.log("es primo"+recorrido);
		}
		
		/*else
		{
			console.log("no es primo");
		}*/
	}	
}
