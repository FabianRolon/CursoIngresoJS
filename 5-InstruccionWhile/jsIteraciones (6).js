function mostrar()
{

	var contador = 0;
	var acumulador;
	var Suma = 0;

	while(contador < 5)
	{
		acumulador = prompt(acumulador);
		acumulador = parseInt(acumulador);
		Suma = Suma + acumulador;
		contador++;
	}
acumulador = Suma;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN