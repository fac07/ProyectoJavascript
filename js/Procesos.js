function SolicitarInfo()
{
	var respuesta = "<div style=\"text-align: center;\">Datos de cotización</div>";
	var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
	var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
	var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
	var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

	var FechaNacimiento = anioNacimiento+"-"+mesNacimiento+"-"+diaNacimiento;
	var Edad = _calculateAge(FechaNacimiento);

	respuesta += "Nombre de asegurado: " + nombreCompleto + "<br />";

	respuesta +="Edad asegurado: " + Edad + "<br />";

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
			respuesta +="Edad cónyuge: " + edadConyuge + "<br />";
		}
		else
		{
			edadConyuge = 0;
		}
		var hijos = prompt("¿Tiene hijos?", "SI/NO");
		var cantidadHijos;
		if(hijos == "SI")
		{
			cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");
			respuesta +="Número de hijos:" + cantidadHijos + "<br />";
		}

		const precioBase = 250;
		respuesta +="Precio base:" + precioBase + "<br />";

		comision = precioBase * 0.30;
		respuesta +="Comision:" + comision + "<br />";

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
		respuesta +="Recargos por edad:" + recargosPorEdad + "<br />";

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
		respuesta +="Recargos por cónyuge:" + recargosPorConyuge + "<br />";

		//Cargos por hijos menores de 21 años
		var recargosPorHijo = 0;
		if(cantidadHijos > 0)
		{
			recargosPorHijo = cantidadHijos * (precioBase * 0.01);
		}
		respuesta +="Recargos por hijos:" + recargosPorHijo + "<br />";

		recargos = recargosPorEdad + recargosPorConyuge + recargosPorHijo;
		respuesta +="Recargos totales:" + recargos + "<br />";

		totalPagar = precioBase + comision + recargos;
		respuesta +="Total a pagar:" + totalPagar + "<br />";

		alert("Total a pagar: " + totalPagar);

		return respuesta;
	}
	else
	{
		return "El cliente es menor de edad, no es posible asegurarlo.";
	}
}

function SolicitarInfoFormulario(nombreCompleto, diaNacimiento, mesNacimiento, anioNacimiento, conyuge, diaNacimientoConyuge, mesNacimientoConyuge, anioNacimientoConyuge, hijos, cantidadHijos)
{
	var respuesta = "<div style=\"text-align: center;\">Datos de cotización</div>";
	var FechaNacimiento = anioNacimiento+"-"+mesNacimiento+"-"+diaNacimiento;
	var Edad = _calculateAge(FechaNacimiento);

	respuesta += "Nombre de asegurado: " + nombreCompleto + "<br />";

	respuesta +="Edad asegurado: " + Edad + "<br />";

	if(Edad>18 && Edad < 66)
	{
		var edadConyuge, diaNacimientoConyuge, mesNacimientoConyuge, anioNacimientoConyuge, FechaNacimientoConyuge;
		if(conyuge == "SI")
		{
			FechaNacimientoConyuge = anioNacimientoConyuge+"-"+mesNacimientoConyuge+"-"+diaNacimientoConyuge;
			edadConyuge = _calculateAge(FechaNacimientoConyuge);
			respuesta +="Edad cónyuge: " + edadConyuge + "<br />";
		}
		else
		{
			edadConyuge = 0;
		}
		var cantidadHijos;
		if(hijos == "SI")
		{
			respuesta +="Número de hijos:" + cantidadHijos + "<br />";
		}

		const precioBase = 250;
		respuesta +="Precio base:" + precioBase + "<br />";

		comision = precioBase * 0.30;
		respuesta +="Comision:" + comision + "<br />";

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
		respuesta +="Recargos por edad:" + recargosPorEdad + "<br />";

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
		respuesta +="Recargos por cónyuge:" + recargosPorConyuge + "<br />";

		//Cargos por hijos menores de 21 años
		var recargosPorHijo = 0;
		if(cantidadHijos > 0)
		{
			recargosPorHijo = cantidadHijos * (precioBase * 0.01);
		}
		respuesta +="Recargos por hijos:" + recargosPorHijo + "<br />";

		recargos = recargosPorEdad + recargosPorConyuge + recargosPorHijo;
		respuesta +="Recargos totales:" + recargos + "<br />";

		totalPagar = precioBase + comision + recargos;
		respuesta +="Total a pagar:" + totalPagar + "<br />";

		return respuesta;
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