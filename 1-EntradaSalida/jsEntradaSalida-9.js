/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldoingresado;
	var aumento;

    sueldoingresado = sueldo.value;
    
    sueldoingresado = parseInt(sueldoingresado);
   

    aumento = sueldoingresado*1.1;

    resultado.value = aumento; // al resultado, que es id del cuadro de texto se le asigna el valor de aumento
    
	
}
