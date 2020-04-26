const fs = require('fs');

const crearArchivo = (base, limit) => {

  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject('La base debe ser un número');
      return;
    }

    let data = '';
    for (let i = 1; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    const nombreArchivo = `tabla-${base}.txt`;

    fs.writeFile(`tablas/${nombreArchivo}`, data, (err) => {

      if (err) reject(err);

      resolve(nombreArchivo);
    });

  });
}

const listarArchivo = (base, limit) => {

  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject('La base debe ser un número');
      return;
    }

    let data = '';
    for (let i = 1; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    resolve(data);

  });
}

module.exports = {
  crearArchivo,
  listarArchivo
}

