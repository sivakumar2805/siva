const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**number.forEach(async (num) => {
  console.log(num * 10);
  console.log("num", num);
  const add = (await num) + 10;
  console.log(add);
});*/

const total = (n) => {
  console.log(n * 3);
};

number.forEach(total);

number.forEach((num, idx) => {
  console.log(idx, num);
});

// function one() {
//   return 1;
// }
// console.log(one());

// const obj = {
//   two: function () {
//     return 2;
//   },
// };
// console.log(obj.two());

// function three() {
//   return 3;
// }
// console.log(three.call());

// const four = new Function("num", "return num");
// const func = four(40);
// console.log(func);

// function c(param = 6) {
//   return param;
// }
// console.log(c());

const array = [1, 2, 3];

function a(arr) {
  arr.pop();
}
a(array);
console.log(array);

// function names(age) {
//   return c((param = 7)), age;
// }

// console.log(c());

// console.log(names(21));

// console.log(name());

/**const arrStr = ["siva", "kumar", "akash"];
const arrObj = [
  {
    name: "siva",
    age: 21,
  },
  {
    name: "kumar",
    age: 22,
  },
  {
    name: "akash",
    age: 23,
  },
];

const details = arrStr.forEach((e) => {
  arrObj.unshift(e);
});

console.log(arrObj);*/

// select * from rfqsent;

// alter table rfqsent
// add column isread boolean;

// alter table rfqsent
// add column readat timestamp with time zone;

// select * from rfqsubmit

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
// create table itemtax(
// taxid      serial not null,
// item_id    int not null,
// name       varchar,
// rate       int,
// constraint PK_taxid primary key (taxid),
// constraint FK_item_id foreign key (item_id) references items(item_id)
// )

// select * from itemtax;

// drop table if exists addressobj;
// create table addressobj(
// addid         serial not null,
// routeid       int not null,
// address       varchar,
// company       varchar,
// contactname	  varchar,
// constraint PK_addid primary key (addid),
// constraint FK_routeid foreign key (routeid) references routes(routeid)
// )

// select * from addressobj;

// drop procedure if exists items_procedure;
// create procedure items_procedure(param json,inout _route_id int)
// language plpgsql
// as
// $$

// declare
//  total int;

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
//  	LATERAL (SELECT json_array_elements(it.items::JSON) item_array) main_json returning item_id into total;

// with getitemtax as
// (
//  select param -> 'items' -> 'itemtax' as itemtax
// )
// insert into itemtax(item_id,name,rate)
// select total

// -- with getitemtax	as
// --  (
// --   select param#>> '{itemtax}' as itemtax
// --  )

// --     insert into itemtax(item_id,name,rate)
// -- 	    select _route_id,
// -- 	    (main_json.item_array->>'name')::varchar,
// -- 		(main_json.item_array->>'rate')::int
// --  	FROM getitemtax itx,
// --  	LATERAL (SELECT json_array_elements(itx.itemtax::JSON) item_array) main_json;
// --------------------------------------------------
// -- WITH getitemtax AS (
// --      SELECT param->'itemtax' AS itemtax
// -- -- 	 select param#>> '{itemtax}' as itemtax
// --      FROM param t, json_array_elements(t.data ->> 'items' -> 'itemtax') AS param
// -- )
// -- SELECT (info_item->'name')::varchar,
// --        (info_item->'rate')::int

// -- FROM getitemtax idata,
// -- lateral (select json_array_elements(idata.itemtax)) AS info_item;
// end;
// $$;
