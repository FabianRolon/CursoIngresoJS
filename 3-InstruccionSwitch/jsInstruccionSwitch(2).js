function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


var mensaje = "";

switch(mesDelAño)
{
	case "Enero":
	case "Febrero": 
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		mensaje = "Falta para el invierno.";
		break;
	case "Julio":
	case "Agosto":
		mensaje = "Estamos en invierno.";
		break;
	default:
		mensaje = "Ya paso el invierno";
}
alert(mensaje);




}//FIN DE LA FUNCIÓN