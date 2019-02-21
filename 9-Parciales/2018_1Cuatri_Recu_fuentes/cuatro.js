function mostrar()
{	
	var descuento;
	var sumaTotal = 0;
	var mayor;
	var valorUno;
	var valorDos;
	var valorTres;
	var valorCuatro;
		
		valorUno = prompt ("Ingrese un valor");
		valorUno = parseInt(valorUno);
		
		valorDos = prompt ("Ingrese un valor");
		valorDos = parseInt(valorDos);

		valorTres = prompt ("Ingrese un valor");
		valorTres = parseInt(valorTres);

		valorCuatro = prompt ("Ingrese un valor");
		valorCuatro = parseInt(valorCuatro);

		
		if(valorUno >= valorDos && valorUno >= valorTres && valorUno >= valorCuatro)
		{
			mayor = valorUno;
		}
		else
		{
			if(valorDos >= valorTres && valorDos >= valorCuatro)
			{
				mayor = valorDos;
			}
			else
			{
				if(valorTres >= valorCuatro)
				{
					mayor = valorTres;
				}
				else
				{
					mayor = valorCuatro;
				}
			}	
		}
		
		
		
		
		sumaTotal = valorUno+valorDos+valorTres+valorCuatro;
	
	
	
	if(sumaTotal < 50)
	{
		descuento = 1.15;
	}
	else 
	{
		if(sumaTotal >= 50 && sumaTotal < 100 )
		{
			descuento = 0.95;
		}
		else
		{
			if(sumaTotal > 100)
			{
				descuento = 0.9;
			}		
		}
	}
	sumaTotal = sumaTotal * descuento;

	alert("El numero mayor es "+mayor+" y el precio quedaria "+sumaTotal);	
}
