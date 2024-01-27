const { registrar, leer } = require('./operaciones.js');
const [operacion, ...params] = process.argv.slice(2);

if (operacion === 'registrar') {
	registrar(params);
} else if (operacion === 'leer') {
	leer();
} else console.log('No se ha encontrado la operacion ' + operacion);
