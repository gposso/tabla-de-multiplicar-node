const options = {
  base: {
    demand: true,
    alias: 'b'
  },
  limit: {
    default: 10,
    alias: 'l'
  }
}
const argv = require('yargs')
  .command('listar', 'Imprime en consola la tabla de multiplicar', options)
  .command('crear', 'Crea archivo de la tabla de multiplicar', options)
  .help()
  .argv;

  module.exports = {
    argv
  }