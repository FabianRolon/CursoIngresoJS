function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero > 10)
	{
		numero = prompt("ingrese un número entre 0 y 10.");
	}

	Numero.value = "El numero es "+numero+" y es correcto";

}//FIN DE LA FUNCIÓN