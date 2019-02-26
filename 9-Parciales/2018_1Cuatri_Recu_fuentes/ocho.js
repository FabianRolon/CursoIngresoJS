function mostrar()
{
	var numero;
	var letra='s';
	var contador;
	
	while(letra != 0)
 	{
		letra = prompt("Ingrese una letra");
		

		while(!(isNaN(letra) || letra.length > 1 || letra.length == 0)
		{
			letra = prompt("ERROR! Ingrese una letra");
		}		
			
	}
}
