/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 0;

function comenzar()
{
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	 
		//alert(numeroSecreto );
	console.log(numeroSecreto);
}

function verificar()
{
	
	var numeroIngresado;

	numeroIngresado = numero.value;

	numeroIngresado = parseInt(numeroIngresado);
	contadorIntentos++;
	intentos.value = contadorIntentos;
	
	if(numeroIngresado == numeroSecreto)
	{	
		if( contadorIntentos == 1) 
		{
			alert("Usted es un psíquico");

		}else
		{
			if(contadorIntentos == 2)
			{
				alert("Excelente percepción");
			}else
			{
				if( contadorIntentos == 3)
				{
					alert("Esto es suerte");
				} 
				else
				{
					if( contadorIntentos == 4)
					{
						alert("Excelente técnica");
					}
					else
					{
						if( contadorIntentos == 5)
						{
							alert("Usted esta en la media");
						}
						else
						{
							if(contadorIntentos > 6 && contadorIntentos < 11)
							{
								alert("Falta tecnica");
							}
							else
							{
								if( contadorIntentos > 11)
								{
									alert("Afortunado en el amor!!!");
								}
							}
						}
					}
				}
			}	
		}
	}
	else
	{
		if(numeroIngresado < numeroSecreto)
		{
			alert("Falta");
		}else
		{
			alert("Te pasaste");
		}
	}	
}