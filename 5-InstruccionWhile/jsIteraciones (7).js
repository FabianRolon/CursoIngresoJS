function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;
	
	
	
	while(respuesta == "si")
	{
		contador++;
		numero = prompt("Ingrese el numero "+contador);
		numero = parseInt(numero);
		acumulador = numero + acumulador;
		respuesta = prompt("Desea ingresar otro numero? si para continuar, sino presone cualquier tecla")
		
	}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN