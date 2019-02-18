function mostrar()
{
  
var mesDelAño = document.getElementById('mes').value;

var mensaje = "";

switch(mesDelAño)
{
	case "Enero": 
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
		mensaje = "Este mes tiene 31 días";
		break;

	case "Febrero":
		mensaje = "Este mes tiene 28 días";
		break;

	default: 
		mensaje = "Este mes tiene 30 días";
}
alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN