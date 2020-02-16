function SolicitarInfo()
{
	var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
	var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
	var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
	var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

	var FechaNacimiento = anioNacimiento+"-"+mesNacimiento+"-"+diaNacimiento;
	var Edad = _calculateAge(FechaNacimiento);

	console.log("Edad asegurado:" + Edad);

	if(Edad>18 && Edad < 66)
	{
		var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
		var edadConyuge, diaNacimientoConyuge, mesNacimientoConyuge, anioNacimientoConyuge, FechaNacimientoConyuge;
		if(conyuge == "SI")
		{
			diaNacimientoConyuge = prompt("Ingrese el día de nacimiento del cónyuge", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
			mesNacimientoConyuge = prompt("Ingrese el mes de nacimiento del cónyuge", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
			anioNacimientoConyuge = prompt("Ingrese el año de nacimiento del cónyuge", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
			FechaNacimientoConyuge = anioNacimientoConyuge+"-"+mesNacimientoConyuge+"-"+diaNacimientoConyuge;
			edadConyuge = _calculateAge(FechaNacimientoConyuge);
		}
		else
		{
			edadConyuge = 0;
		}
		console.log("Edad cónyuge:" + edadConyuge);
		var hijos = prompt("¿Tiene hijos?", "SI/NO");
		var cantidadHijos;
		if(hijos == "SI")
		{
			cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
		}
		console.log("Número de hijos:" + cantidadHijos);

		const precioBase = 250;
		console.log("Precio base:" + precioBase);

		comision = precioBase * 0.30;
		console.log("Comision:" + comision);

		// El siguiente es un comentario.
		// Por favor no elimine los caracteres // que se encuentran al inicio.

		// En la siguiente variable usted debe calcular los cargos correspondientes.
		// Puede crear la cantidad de variables necesarias para calcular cada uno
		// de los recargos que sean necesarios
		recargos = 0;

		//Calculos recargo por edad
		var recargosPorEdad = 0;

		if(Edad >= 21 && Edad < 25)
		{
			recargosPorEdad = precioBase * 0.01;
		}
		if(Edad >= 25 && Edad < 30)
		{
			recargosPorEdad = precioBase * 0.02;
		}
		if(Edad >= 30 && Edad < 40)
		{
			recargosPorEdad = precioBase * 0.05;
		}
		if(Edad >= 40 && Edad < 50)
		{
			recargosPorEdad = precioBase * 0.08;
		}
		if(Edad >= 50)
		{
			recargosPorEdad = precioBase * 0.12;
		}
		console.log("Recargos por edad:" + recargosPorEdad);

		//Cargos por cónyuge
		var recargosPorConyuge = 0;
		if(edadConyuge > 0 && edadConyuge < 30)
		{
			recargosPorConyuge = precioBase * 0.01;
		}
		if(edadConyuge >= 30 && edadConyuge < 40)
		{
			recargosPorConyuge = precioBase * 0.02;
		}
		if(edadConyuge >= 40 && edadConyuge < 50)
		{
			recargosPorConyuge = precioBase * 0.03;
		}
		if(edadConyuge >= 50 && edadConyuge < 70)
		{
			recargosPorConyuge = precioBase * 0.05;
		}
		console.log("Recargos por cónyuge:" + recargosPorConyuge);

		//Cargos por hijos menores de 21 años
		var recargosPorHijo = 0;
		if(cantidadHijos > 0)
		{
			recargosPorHijo = cantidadHijos * (precioBase * 0.01);
		}
		console.log("Recargos por hijos:" + recargosPorHijo);

		recargos = recargosPorEdad + recargosPorConyuge + recargosPorHijo;
		console.log("Recargos totales:" + recargos);

		totalPagar = precioBase + comision + recargos;
		console.log("Total a pagar:" + totalPagar);

		return totalPagar;
	}
	else
	{
		return "El cliente es menor de edad, no es posible asegurarlo.";
	}
}

function _calculateAge(dateString) { 
	var today = new Date();
	var birthDate = new Date(dateString);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}