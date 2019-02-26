function mostrar()
{
	var sexo;
	var nota;
	var contador;
	var sumaNota=0;
	var notaMenor=10;
	var sexoMenor;
	var contadorVarones=0;
	
	for(contador=0;contador<5;contador++)
	{
		
		nota = prompt("Ingrese la nota entre 0 y 10 inclusive");
		nota = parseInt(nota);

		while(isNaN(nota) || nota < 0 || nota > 10)
		{
			nota = prompt("ERROR! Ingrese la nota entre 0 y 10 inclusive");
			nota = parseInt(nota);
		}

		sumaNota = sumaNota + nota;
		promedio = sumaNota/(contador+1);

		sexo = prompt("Ingrese el sexo, 'f' ó 'm'");

		while(!(isNaN(nota)) || sexo != "f" && sexo != "m")
		{
			sexo = prompt("ERROR! Ingrese 'f' ó 'm'");
		}


		if(nota < notaMenor)
		{
			notaMenor = nota;
			sexoMenor = sexo;
		}

		if(sexo == "m")
		{
			if(nota >= 6)
			{
				contadorVarones++;
			}
		}
	}

	alert("El promedio de la s notas totales es: "+promedio);
	alert("La nota mas baja es: "+notaMenor+" y el sexo es: "+sexoMenor);
	alert("La cantidad de varones que su nota haya sido mayor o igual a 6 es: "+contadorVarones);
}
