
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt("Ingrese el ancho");
	largo = prompt("Ingrese el largo");

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = ancho + largo;

	alert("El perimetro es: "+perimetro);
	
}
