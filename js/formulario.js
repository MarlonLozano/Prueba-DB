
function validar (){
	var nombre, correo, documento, telefono, expresiones;
	nombre = document.getElementById("nombre").value;
	correo = document.getElementById("correo").value;
	documento = document.getElementById("documento").value;
	telefono = document.getElementById("telefono").value;

	expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/, // 7 a 14 numeros.
		documento: /^\d{7,14}$/ // 7 a 14 numeros.
	}


	if(nombre ===""){
		alert("El campo nombre esta vacio");
		return false;
	}
	else if (expresiones.test(nombre)){
		alert("Nombre invalido");
		return false;
	}
	else if (correo ===""){
		alert("El campo correo esta vacio");
		return false;
	}
	else if (documento ===""){
		alert("El campo documento esta vacio");
		return false;
	}
	else if (telefono ===""){
		alert("El campo telefono esta vacio");
		return false;
	}
	else if(isNaN(telefono)){
		alert("Debe ser un numero");
		return false;
	}
	else if(expresiones.test(correo)){
		alert("El correo no es valido");
		return false;
	}
}