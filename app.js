'use strict'

const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listarArchivo } = require('./utils/multiplicar');

const command = argv._[0];

switch (command) {
  case 'listar':
    listarArchivo(argv.base, argv.limit)
      .then(archivo => console.log(archivo))
      .catch(error => console.log(error));
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limit)
      .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
      .catch(error => console.log(error));
    break;
  default:
    console.log('Command unknown');
}

