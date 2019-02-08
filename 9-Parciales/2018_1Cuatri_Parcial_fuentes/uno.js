
function mostrar()
{
	var largo;
	var ancho;
	var perimetro;

	largo = prompt("Ingrese el largo");

	ancho = prompt("Ingrese el ancho");

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = largo + ancho;

	alert("El perimetro es: "+perimetro);

}

