const fs = require('node:fs');

const registrar = (params) => {
	const registro = {
		'Nombre de la mascota': params[0],
		'Edad de la mascota': params[1],
		Especie: params[2],
		'Color de la mascota': params[3],
		Enfermedad: params[4],
	};
	const readCitas = fs.readFileSync('citas.json', 'utf8');
	const parceCitas = JSON.parse(readCitas);
	parceCitas.push(registro);
	const data = JSON.stringify(parceCitas);
	fs.writeFileSync('citas.json', data);
};

const leer = () => {
	const citasRead = fs.readFileSync('citas.json', 'utf8');
	const citasParce = JSON.parse(citasRead);
	citasParce.forEach((cita) => {
		console.log(cita);
	});
};

module.exports = { registrar, leer };
