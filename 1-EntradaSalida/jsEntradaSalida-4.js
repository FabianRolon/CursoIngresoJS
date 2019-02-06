/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var nombre;

	nombre = prompt("Por favor ingrese su nombre");

	//elNombre.value = nombre;

	document.getElementById('elNombre').value = nombre; //otra forma de escribir la linea anterior, esta es compatible con cualquier explorador
	

}

