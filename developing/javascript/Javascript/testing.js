const chai = require('chai');
const axios = require('axios');
const should = chai.should();
const assert = require('chai').assert;
const expect = require('chai').expect;

const ax = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
});

let email;
let password;
let token;

let phonenumber;
let countrycode;
let fullname;
let designation;
let company;
let country;

before(async () => {
  password = '123456';
  email = 'sivakumar.h@gaeprojects.com';
});

describe('Account Setting For Failure', () => {
  it.only('Login', async () => {
    const res = await ax.post(
      'signIn',
      {
        data: { email, password },
      },
      { headers: { Origin: '*' } }
    );

    res.data.should.have.property('status', 200);
    res.data.data.should.be.a('object');
    token = res.data.data.token;
    // console.log(token);
  }).timeout(2000);

  it.only('Phone Number Error For Maximum Length', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: '1555555555555555555555555555555555',
          country: 'india',
          email: 'siva@gaeprojects.com',
          countrycode: 'IN',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );

    expect(res.data.data.details[0].message).to.equal(
      'PhoneNumber must be maximum of 20characters'
    );
    expect(res.data).to.have.all.keys('status', 'data');
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });

  it.only('Phone Number Error For Must Be A String', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: 1555555555555555,
          country: 'india',
          email: 'siva@gaeprojects.com',
          countrycode: 'IN',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );

    expect(res.data.data.details[0].message).to.equal(
      'PhoneNumber must be a string'
    );
    expect(res.data).to.have.all.keys('status', 'data');
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });

  it.only('Country Error For Maximum Length', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: '1555555555555555',

          email: 'siva@gaeprojects.com',
          countrycode: 'IN',

          country:
            'The United Kingdom of Great Britain and Northern IrelandThe United Kingdom of Great Britain and Northern IrelandThe United Kingdom of Great Britain and Northern Ireland',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );
    // console.log("DATA", res.data.data.details[0].message);
    expect(res.data.data.details[0].message).to.equal(
      'Country must be maximum of 100characters'
    );
    expect(res.data).to.have.all.keys('status', 'data');
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });

  // Error Correction For This Testing
  it.only('Country Error For Whitesapce', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: '1555555555555555',
          country: '  india  ',
          email: 'siva@gaeprojects.com',
          countrycode: 'IN',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );
    // console.log("DATA", res.data.data.details[0].message);
    expect(res.data.data.details[0].message).to.equal(
      'Country must not have leading or trailing whitespace'
    );
    expect(res.data).to.have.all.keys('status', 'data');
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });

  it.only('Email Error For Maximum ', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: '1555555555555555',
          country: 'india',
          email:
            'siva@gaeprojectsdgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.com',
          countrycode: 'IN',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );

    expect(res.data.data.details[0].message).to.equal(
      'Email must be contains two Segments(@ and .)'
    );
    expect(res.data.data.details[1].message).to.equal(
      'Email must be maximum of 40  characters'
    );
    expect(res.data).to.have.all.keys('status', 'data');
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });

  it.only('Email Error For Empty', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: '1555555555555555',
          country: 'india',
          email: '',
          countrycode: 'IN',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );

    expect(res.data.data.details[0].message).to.equal(
      'Email is not allowed to be empty!!'
    );
    expect(res.data).to.have.all.keys('status', 'data');
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });

  // Error WhiteSpace
  it.only('Email Error For WhiteSpace', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: '1555555555555555',
          country: 'india',
          email: 'siva@gaeprojects.com  ',
          countrycode: 'IN',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );
    // console.log("whitespace", res.data.data);
    expect(res.data.data.details[0].message).to.equal(
      'Email must not have leading or trailing whitespace'
    );
    expect(res.data.data.details[1].message).to.equal(
      'Email must be contains two Segments(@ and .)'
    );
    expect(res.data).to.have.all.keys('status', 'data');
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });

  it.only('Email Error For Must Be A String', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: '1555555555555555',
          country: 'india',
          email: 131424536,
          countrycode: 'IN',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );

    expect(res.data.data.details[0].message).to.equal('Email must be a string');
    expect(res.data).to.have.all.keys('status', 'data');
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });

  // Error Correction
  it.only('CountryCode Error For Must Be A String', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: '1555555555555555',
          country: 'india',
          email: 'siva@gae.com',
          countrycode: 12,
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );
    // console.log(res.data.data.details[0].message);
    expect(res.data.data.details[0].message).to.equal('Invalid CountryCode');
    expect(res.data.data.details[1].message).to.equal(
      'CountryCode  must be a string'
    );
    expect(res.data).to.have.all.keys('status', 'data');
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });

  it.only('CountryCode Error Is Required', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: '1555555555555555',
          country: 'india',
          email: 'siva@gae.com',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );
    expect(res.data.data.details[0].message).to.equal(
      'CountryCode  is required!!'
    );
    expect(res.data).to.have.all.keys('status', 'data');
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });

  // Error Correction
  it.only('CountryCode Error Is Not Empty', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: '1555555555555555',
          country: 'india',
          email: 'siva@gae.com',
          countrycode: '',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );
    // console.log("countryCode is not empty", res.data.data.details[0].message);
    expect(res.data.data.details[0].message).to.equal('Invalid CountryCode');
    expect(res.data.data.details[1].message).to.equal(
      'CountryCode  is not allowed to be empty'
    );

    expect(res.data).to.have.all.keys('status', 'data');
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });

  // Error WhiteSpace
  it.only('CountryCode Error WhiteSpace', async () => {
    const res = await ax.post(
      'updateAccountSetting',
      {
        data: {
          fullname: 'siva',
          designation: 'siahhah',
          company: 'GAE',
          phonenumber: '1555555555555555',
          country: 'india',
          email: 'siva@gae.com',
          countrycode: 'I ',
        },
      },
      { headers: { Origin: '*', Authorization: 'Bearer ' + token } }
    );
    // console.log(res.data.data.details[0].message);
    expect(res.data.data.details[0].message).to.equal('Invalid CountryCode');
    expect(res.data.data.details[1].message).to.equal(
      'CountryCode  must not have leading or trailing whitespace'
    );
    // expect(res.data.data.details[0].message).to.equal("Invalid CountryCode");
    // expect(res.data).to.have.all.keys("status", "data");
    res.data.should.have.property('status', 400);
    res.data.should.be.a('object');
  });
});

// drop table if exists routes;
// create table routes(
// routeid     serial not null,
// title       varchar,
// constraint PK_routeid primary key (routeid)
// )
// ALTER TABLE routes ALTER COLUMN routeid TYPE serial USING routeid :: UUID ;
// ALTER TABLE routes ALTER COLUMN routeid SET DATA TYPE UUID USING routeid"::UUID;

// ALTER TABLE routes
// ADD COLUMN createdat timestamp with time zone default current_timestamp

// ALTER table routes
// drop column createdat

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

// drop table if exists commontax;
// create table commontax(
// taxid            serial not null,
// routeid          int not null,
// name             varchar,
// rate             numeric,
// constraint PK_commontaxid primary key (taxid),
// constraint FK_routeid foreign key (routeid) references routes(routeid)
// )

// select * from commontax;

// drop table if exists tandc;
// create table tandc(
// tandcid      serial not null,
// routeid      int not null,
// tandc        varchar,
// constraint PK_tandcid primary key (tandcid),
// constraint FK_routeid foreign key (routeid) references routes(routeid)
// )

// select * from tandc;

// drop table if exists datastore;
// CREATE TABLE datastore (
//     unique_id UUID DEFAULT gen_random_uuid (),
//     first_name VARCHAR NOT NULL,
//     last_name VARCHAR NOT NULL,
//     email VARCHAR NOT NULL,
//     phone VARCHAR,
//     PRIMARY KEY (unique_id)
// );

// select * from datastore;

// insert into datastore(first_name,last_name,email,phone) values ('siva','kumar','siva@gmail.com','936111')

// drop procedure if exists order_procedure;
// create procedure order_procedure(param json,inout _route_id int)
// language plpgsql
// as
// $$

// declare
//  total int;

// begin

//  -- Title
//  insert into routes(title)
//  select (param ->> 'title')::varchar
//  returning routeid into _route_id;

//  -- Items Array
// with getitems as
// 	(
// 		 select param#>>'{items}' as items
// 	)
// 	insert into items(routeid,itemname,quantity,price)
// 	select  _route_id,
// 	       (main_json.item_array->>'itemname')::varchar,
// 		   (main_json.item_array->>'quantity')::int,
// 		   (main_json.item_array->>'price')::int
//  	FROM getitems it,
//  	lateral (SELECT json_array_elements(it.items::JSON) item_array) main_json ;

//  -- Item Tax Array

// with items_array as  (
//     select param::JSON as ItemTax
// ),
//     item_tax as
// 	(
//     select
// 	unnest(array_agg(items_t->>'itemname'))::varchar as ItemName,
// 	unnest(array_agg(itemtax_t->>'name'))::varchar as TaxName,
// 	unnest(array_agg(itemtax_t->>'rate'))::int as Taxrate
//     from
// 	items_array ,
// 	 json_array_elements(itemTax->'items') items_t,
// 	 json_array_elements(items_t->'itemtax') itemtax_t

// )

// insert into itemtax (item_id,name,rate)
// select items.item_id,
//        item_tax.TaxName,
// 	   item_tax.Taxrate
// 	   from items
// 	   join
// 		item_tax on items.itemname=item_tax.ItemName
// 		where items.item_id=item_id;

// -- Address Object

// insert into addressobj(routeid,address,company,contactname)
// select _route_id,
//         (param ->'buyeraddress'->> 'address')::varchar,
// 		(param ->'buyeraddress'->> 'company')::varchar,
//         (param ->'buyeraddress'->> 'contactname')::varchar;

//  -- CommonTax Array

//  with commonTax as
// 	(
// 		 select param#>>'{commontax}' as commontax
// 	)
// 	insert into commontax(routeid,name,rate)
// 	select  _route_id,
// 	       (main_json.item_array->>'name')::varchar,
// 		   (main_json.item_array->>'rate')::int
//  	FROM commonTax it,
//  	lateral (SELECT json_array_elements(it.commontax::JSON) item_array) main_json ;

// with tandc as
// 	(
// 		 select param#>>'{tandc}' as tandcdata
// 	)
// 	insert into tandc(routeid,tandc)
// 	select  _route_id,
// 	       (main_json.item_array->>'tandc')::varchar

//  	FROM tandc tc,
//  	lateral (SELECT json_array_elements(tc.tandcdata::JSON) item_array) main_json ;

// end;
// $$;
