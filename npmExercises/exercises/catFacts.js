// Random Cat Facts to PDF Document

const PDFDocument = require('pdfkit');
const fs = require('fs');
const catFacts = require('cat-facts');
let randomFacts = catFacts.random();        // calls on random facts
const document = new PDFDocument();

document.pipe(fs.createWriteStream('output.pdf'));

document.text(randomFacts);
document.end();