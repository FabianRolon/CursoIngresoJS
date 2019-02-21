function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numero;
	
	
	
	while(respuesta == "si")
	{
		contador++;
		numero = prompt("Ingrese el numero "+contador);
		numero = parseInt(numero);
		
		if(numero<0)
		{
			negativo = negativo*numero;
		}
		else
		{
			positivo = positivo+numero;
		}

		respuesta = prompt("Desea ingresar otro numero? si para continuar, sino presone cualquier tecla")
		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN