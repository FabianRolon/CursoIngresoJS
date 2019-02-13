function mostrar()
{
//tomo la edad  
	var laEdad;
	var estadocivil;

	laEdad = edad.value;
	laEdad = parseInt(laEdad);
	estadocivil = estadoCivil.value;

		
	if(laEdad > 17)
	{
		if(estadocivil == "Soltero")
		{
			alert("Es soltero y no es menor.");
		}
	}
	

	


}//FIN DE LA FUNCIÓN