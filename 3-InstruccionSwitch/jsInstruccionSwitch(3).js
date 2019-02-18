function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

var mensaje = "";

switch(mesDelAño)
{
	
	case "Febrero": 
		mensaje = "Este mes no tiene mas de 29 días";
		break;

	default:
		mensaje = "Este mes tiene 30 o mas días";
	
}
alert(mensaje);	
	


}//FIN DE LA FUNCIÓN