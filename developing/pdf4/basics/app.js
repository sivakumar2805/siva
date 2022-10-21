const pdfGenerator = require('pdfkit');
const fs = require('fs');

// Instanitate The Library

let theOutput = new pdfGenerator();

// Pipe to a writable stream which would save the result into the same directory

theOutput.pipe(fs.createWriteStream('TestDocument.pdf'));

theOutput.text("I'm Siva Kumar!!!!!!!!!", {
  bold: true,
  underline: true,
  align: 'center',
});

// Write Out File
theOutput.end();
