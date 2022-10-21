// // var myArray = [
// //   { field: "id", operator: "eq", value: "id" },
// //   { field: "cStatus", operator: "eq", value: "cStatus" },
// //   { field: "money", operator: "eq", value: "money" },
// // ];

// // // myArray = myArray.filter(function (obj) {
// // //   return obj.field !== "money";
// // // });

// // const array = myArray.filter((item) => item.key !== "cStatus");

// // console.log(array);

let data = [
  { a: 1, b: 5, c: 9 },
  { a: 2, b: 6, c: 10 },
  { a: 3, b: 7, c: 11 },
  { a: 4, b: 8, c: 12 },
];

let result = data.map(({ a, b }) => ({ a, b }));

console.log(result);

// const array = [
//   {
//     title: "Backend",
//     course: "nodejs",
//   },
//   {
//     title: "frontend",
//     course: "angular",
//   },
//   {
//     title: "cloud",
//     course: "aws",
//   },
// ];

// const value = array.map((x) => {
//   return x.title;
// });
// console.log(value);

// function doStep1(init) {
//   return init + 1;
// }

// function doStep2(init) {
//   return init + 2;
// }

// function doStep3(init) {
//   return init + 3;
// }

// function doOperation() {
//   let result = 0;
//   result = doStep1(result);
//   result = doStep2(result);
//   result = doStep3(result);
//   console.log(`result: ${result}`);
// }

// doOperation();

// function doStep1(init, callback) {
//   const result = init + 1;
//   callback(result);
// }

// function doStep2(init, callback) {
//   const result = init + 2;
//   callback(result);
// }

// function doStep3(init, callback) {
//   const result = init + 3;
//   callback(result);
// }

// function doOperation() {
//   doStep1(0, (result1) => {
//     doStep2(result1, (result2) => {
//       doStep3(result2, (result3) => {
//         console.log(`result: ${result3}`);
//       });
//     });
//   });
// }

// doOperation();

// async function fetchProducts() {
//   try {
//     // after this line, our function will wait for the `fetch()` call to be settled
//     // the `fetch()` call will either return a Response or throw an error
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     // after this line, our function will wait for the `response.json()` call to be settled
//     // the `response.json()` call will either return the JSON object or throw an error
//     const json = await response.json();
//     console.log(json[0].name);
//   } catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// fetchProducts();

// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const json = await response.json();
//     return json;
//   } catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// const json = fetchProducts();
// console.log(json[0]); // json is a Promise object, so this will not work

// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const json = await response.json();
//     return json;
//   } catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// const jsonPromise = fetchProducts();
// jsonPromise.then((json) => console.log(json[0].name));

// function students(value) {
//   return value;
// }

// function student() {
//   const name = students("siva");
//   return name;
// }

// const total = student();
// console.log(total);

const arrStr = ['siva', 'kumar', 'akash'];
const arrObj = [
  {
    name: 'siva',
    age: 21,
  },
  {
    name: 'kumar',
    age: 22,
  },
  {
    name: 'akash',
    age: 23,
  },
];

// const array = arrStr.forEach((e) => {
//   arrObj.push(e);
//   // console.log(e);
// });
const total = arrObj.forEach((e) => {
  e['Email'] = arrStr;
});
console.log('After ForEach Array', arrObj);

const languages = ['Javascript', 'C', 'C++', 'Python'];
// console.log(languages);

// Access element of array
console.log(languages[0]);

// Change An Array Element
languages[3] = 'CSharp';
console.log(languages[3]);
// console.log(languages);

// Length Of An Array
console.log(languages.length);

// Loop Through array
// languages.map((element) => {
//   console.log(element);
// });

//Array Methods

// Array To String
// console.log(languages.toString());

//Splice [add element to specific index]

languages.splice(2, 2, 'java');

languages.forEach((element) => {
  console.log(element);
});

//**************************************** */

// drop table if exists routes;
// create table routes(
// routeid     serial not null,
// title       varchar,
// constraint PK_routeid primary key (routeid)
// )

// select * from routes;

// drop table if exists items;
// create table items(
// item_id	     serial not null,
// routeid      int not null,
// itemname     varchar,
// quantity     int,
// price        int,
// constraint PK_item_id primary key (item_id),
// constraint FK_routeid foreign key (routeid) references routes(routeid)
// )
// select * from items;

// drop table if exists itemtax;
// create table itemtax

// drop procedure if exists items_procedure;
// create procedure items_procedure(param json,inout _route_id int)
// language plpgsql
// as
// $$

// -- declare
// --  total int;

// begin
//  insert into routes(title)
//  select (param ->> 'title')::varchar
//  returning routeid into _route_id;
// with getitems as
// 	(
// 		 select param#>>'{items}' as items
// 	)
// 	insert into items(routeid,itemname,quantity,price)
// 	SELECT  _route_id,
// 	       (main_json.item_array->>'itemname')::varchar,
// 		  (main_json.item_array->>'quantity')::int,
// 		  (main_json.item_array->>'price')::int
//  	FROM getitems it,
//  	LATERAL (SELECT json_array_elements(it.items::JSON) item_array) main_json;

// -- 	returning item_id into total;
// -- 	select item_id as id from items;

// end;
// $$;
