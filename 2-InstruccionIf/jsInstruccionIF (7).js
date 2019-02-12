function mostrar()
{
//tomo la edad  

	var laEdad;
	var estadocivil;

	laEdad = edad.value;
	laEdad = parseInt(laEdad);
	estadocivil = estadoCivil.value;

	if(laEdad < 18)
	{
		if(estadocivil != "Soltero")
		{
			alert("Es muy pequeño para NO ser soltero");
		}
	}


}//FIN DE LA FUNCIÓN