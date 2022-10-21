// Importing modules
import PDFDocument from 'pdfkit';
import fs from 'fs';

// Create a document
const doc = new PDFDocument();

// Saving the pdf file in root directory.
doc.pipe(fs.createWriteStream('SivaKumar.pdf'));

// Adding functionality
doc.fontSize(27).text("Hello,I'm Siva Kumar", 170, 100);

// Adding an image in the pdf.

// doc.image('wall2.webp', {
//   fit: [300, 300],
//   align: 'center',
//   valign: 'center',
// });

doc
  .addPage()
  .fontSize(25)
  .text('Generating PDF with the help of pdfkit', 100, 100);

// Apply some transforms and render an SVG path with the
// 'even-odd' fill rule
doc
  .scale(0.6)
  .translate(470, -380)
  .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
  .fill('red', 'even-odd')
  .restore();

// Add some text with annotations
doc
  .addPage()
  .fillColor('blue')
  .text('The link for GeeksforGeeks website', 100, 100)
  .link(100, 100, 160, 27, 'https://www.geeksforgeeks.org/');

// Finalize PDF file
doc.end();
