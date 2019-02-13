/*alert("Ustedes son xxxx y xxxx, 
sus edades son xx y xx,
 y la suma de sus edades es xx")

*/

function mostrar()

{
	var nombreUno;
	var nombreDos;
	var edadUno;
	var edadDos;
	var sumaEdades;

	nombreUno = prompt("Ingrese el primer nombre");
	edadUno = prompt("Ingrese la edad");
	nombreDos = prompt("Ingrese el segundo nombre");
	edadDos = prompt("Ingrese la edad");
	
	edadUno = parseInt(edadUno);
	edadDos = parseInt(edadDos);
	sumaEdades = edadUno + edadDos;

	alert("Ustedes son "+nombreUno+" y "+nombreDos+" , sus edades son "+edadUno+" y "+edadDos+", y la suma de sus edades es "+sumaEdades);
}

