function mostrar()
{
	var laEdad;

	laEdad = edad.value;

	if (laEdad < 13 || laEdad > 17)
	{
		if(laEdad < 13)
		{
			alert("Es un niño");
		}

		if(laEdad > 17)
		{
			alert("Es mayor de edad");
		}
	}
	else 
	{
		alert("Es adolescente");
	}


}//FIN DE LA FUNCIÓN