function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = prompt("Ingrese el primer numero");
	segundoNumero = prompt("Ingrese el segundo numero");

	

	if(primerNumero == segundoNumero)
	{
		alert(primerNumero+segundoNumero);
	}

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	if(primerNumero > segundoNumero)
	{
		suma = primerNumero - segundoNumero;
		alert("La resta es: "+suma);
	}
	if(primerNumero < segundoNumero)
	{
		suma = primerNumero + segundoNumero;
		
		if(suma > 10)
		{
			alert("La suma es "+suma+" y supero el 10");
		}
		else 
		{
			alert("La suma es: "+suma);
		}
		
		
		
	}
}
