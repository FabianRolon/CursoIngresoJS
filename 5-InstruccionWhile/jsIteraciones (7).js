function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var Suma;

	while(respuesta != "si")
	{
		acumulador = prompt("Ingrese un numero");
		acumulador = parseInt(acumulador);
		Suma = Suma + acumulador;
		respuesta = prompt("Desea ingresar otro numero? si para continuar, sino presone c")
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN