//Required package
var pdf = require('pdf-creator-node');
var fs = require('fs');

// Read HTML Template
var html = fs.readFileSync('./template.html', 'utf8');

var options = {
  format: 'A3',
  orientation: 'portrait',
  border: '15000mm',
  header: {
    height: '1500mm',
    contents: '<div style="text-align: center;">Author: Siva Kumar</div>',
  },
  footer: {
    height: '50mm',
    contents: {
      first: 'Cover page',
      2: 'Second page', // Any page number is working. 1-based index
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: 'Last Page',
    },
  },
};

var users = [
  {
    name: 'narendar',
    age: '21',
  },
  {
    name: 'praveen',
    age: '22',
  },
  {
    name: 'mohan',
    age: '23',
  },
];
var document = {
  html: html,
  data: {
    users: users,
  },
  path: './output.pdf',
  type: '',
};
// By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
