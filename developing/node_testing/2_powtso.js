const axios = require("axios");
const faker = require("faker");
let chai = require("chai");
const should = chai.should();
const expect = require("chai").expect;
const assert = require("chai").assert;
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
chai.use(deepEqualInAnyOrder);
const {
  getItems,
  getFromAddress,
  getToAddress,
  getcommontax,
  ert,
} = require("./Faker/newPO.fake-data");
const { mongoObjectId } = require("./Faker/fakeMOngoID");
const ax = axios.create({
  baseURL: "https://rfq-node.herokuapp.com/api/v1/",
});

let email;
let password;
let token;

let purchaseorderid;
let POdata = {};
let POItems = [];
let itemcount;
let items = [];
let buyeraddress;
let selleraddress;
let shippingaddress;
let commontax = [];
let servertandc = [];
let testtandc = [];
let valid = faker.date.future();
let cdate = new Date();
let title = faker.lorem.sentence();
let currencycode;
let currencyname;
let currencysymbol;

before(async () => {
  email = "admin@pmxc.net";
  password = "123456";

  items = getItems().items;
  itemcount = items.length;
  shippingaddress = getFromAddress();
  buyeraddress = getFromAddress();
  selleraddress = getToAddress();
  commontax = getcommontax();
  currencycode = "INR";
  currencyname = "Rupee";
  currencysymbol = "Rs";
  grandtotal = (Math.floor(Math.random() * 100000) + 3).toFixed(2);
  totalitemvalue = (Math.floor(Math.random() * 1000) + 3).toFixed(2);
  description = faker.lorem.sentence();
  ////////////Terms and Conditions////////////
  const tancCount = Math.floor(Math.random() * 2) + 2;
  for (let i = 0; i < tancCount; i++) {
    temptandc = {
      tandc: faker.lorem.sentences(),
      tandcid: mongoObjectId(),
    };
    temptesttandc = temptandc.tandc;
    testtandc.push(temptesttandc);
    servertandc.push(temptandc);
  }
});

/**
 * This is Test is for Login and LogOut for Existing User
 */
describe("Create New PurchaseOrder from Existing User ", () => {
  it("Login", async () => {
    const res = await ax.post("signIn", {
      data: { email, password },
    });
    // console.log("Login", res.data.status);
    res.data.should.have.property("status", 200);
    res.data.data.should.be.a("object");
    token = res.data.data.token;
  }).timeout(5000);

  it("Create New PO", async () => {
    const res = await ax.post(
      "generatePurchaseOrder",
      {
        data: {
          tandc: servertandc,
          items,
          commontax,
          isautoref: true,
          workspaceid: 2,
          title,
          valid,
          cdate,
          description,
          itemcount,
          buyeraddress,
          selleraddress,
          shippingaddress,
          recipientname: "narendrakumar.r@gaeprojects.com",
          grandtotal,
          totalitemvalue,
          gettaxatbilling: false,
          currencycode,
          currencyname,
          currencysymbol,
        },
      },
      { headers: { Authorization: "Bearer " + token } }
    );
    console.log("PO", res);
    try {
      console.log("PO", res);
      res.data.data.should.be.a("object");
      res.data.should.have.property("status", 201); 
      expect(res.data.data.id).to.length(36);
      res.data.data.should.have.property("porefno");
      purchaseorderid = res.data.data.id;
      // console.log("POID",purchaseorderid);
    } catch (ex) {
      console.log(ex);
    }
  }).timeout(7000);

  it("Get PO-Object", async () => {
    const res = await ax.post(
      "getPOByPOIDForView",
      { data: { id: purchaseorderid } },
      { headers: { Authorization: "Bearer " + token } }
    );
    // console.log("Login", res.data);

    res.data.should.have.property("status", 200);
    res.data.data.should.be.a("object");
    POdata = res.data.data;
    // console.log("POdata",POdata);
  }).timeout(5000);

  it("Get PO Params", async () => {
    expect(POdata.title).to.eql(title);
    expect(new Date(POdata.valid)).to.eql(new Date(valid));
    expect(POdata.itemcount).to.eql(itemcount);
    expect(POdata.povalue).to.eql(grandtotal);
    expect(POdata.totalitemvalue).to.eql(totalitemvalue);
  });

  it("Get PO Items", async () => {
    POdata.should.have.property("items").to.be.an("array").that.is.not.empty;
    POdata.should.have
      .property("items")
      .to.be.an("array")
      .to.have.lengthOf(items.length);
    POdata.items.forEach((element) => {
      const indx = items.findIndex(
        (data) => data.itemname === element.itemname
      );
      expect(element.itemname).to.equal(items[indx].itemname);
      expect(element.uomname).to.equal(items[indx].uomname);
      expect(element.price).to.equal(items[indx].price);
      expect(element.quantity).to.equal(items[indx].quantity);
      expect(element.total).to.equal(items[indx].total);
      expect(element.itemtax.name).to.deep.equalInAnyOrder(
        items[indx].itemtax.name
      );
      expect(element.itemtax.rate).to.deep.equalInAnyOrder(
        items[indx].itemtax.rate
      );
      expect(element.itemprops).to.deep.equalInAnyOrder(items[indx].itemprops);
      expect(element.itemtype).to.deep.equalInAnyOrder(items[indx].itemtype);
      expect(element.description).to.deep.equalInAnyOrder(items[indx].itemdesc);
      expect(element.billedquantity).to.equal("0.00");
    });
  });

  it("Get PO TandC", () => {
    POdata.should.have.property("tandc").to.be.an("array").that.is.not.empty;
    POdata.should.have
      .property("tandc")
      .to.be.an("array")
      .to.have.lengthOf(testtandc.length);
    expect(POdata.tandc.tandc).to.deep.equalInAnyOrder(servertandc.ta);
  });

  it("PO CommonTax ", () => {
    POdata.should.have.property("commontax").to.be.an("array").that.is.not
      .empty;
    POdata.should.have
      .property("commontax")
      .to.be.an("array")
      .to.have.lengthOf(commontax.length);
    expect(POdata.commontax.name).to.deep.equalInAnyOrder(commontax.name);
    expect(POdata.commontax.rate).to.deep.equalInAnyOrder(commontax.rate);
  });

  it("Get PO Buyer Address Object ", () => {
    POdata.buyeraddress.should.be.a("object");
    expect(POdata.buyeraddress.company).to.eql(buyeraddress.company);
    expect(POdata.buyeraddress.address).to.eql(buyeraddress.address);
    expect(POdata.buyeraddress.city).to.eql(buyeraddress.city);
    expect(POdata.buyeraddress.state).to.eql(buyeraddress.state);
    expect(POdata.buyeraddress.pincode).to.eql(buyeraddress.pincode);
    expect(POdata.buyeraddress.taxid).to.eql(buyeraddress.taxid);
    expect(POdata.buyeraddress.contactname).to.eql(buyeraddress.contactname);
    expect(POdata.buyeraddress.email).to.eql(buyeraddress.email);
    expect(POdata.buyeraddress.phonenumber).to.eql(buyeraddress.phonenumber);
    expect(POdata.buyeraddress.country).to.eql(buyeraddress.country);
  });

  it("Get PO Seller Address Object ", () => {
    POdata.selleraddress.should.be.a("object");
    expect(POdata.selleraddress.company).to.eql(selleraddress.company);
    expect(POdata.selleraddress.address).to.eql(selleraddress.address);
    expect(POdata.selleraddress.city).to.eql(selleraddress.city);
    expect(POdata.selleraddress.state).to.eql(selleraddress.state);
    expect(POdata.selleraddress.pincode).to.eql(selleraddress.pincode);
    expect(POdata.selleraddress.taxid).to.eql(selleraddress.taxid);
    expect(POdata.selleraddress.contactname).to.eql(selleraddress.contactname);
    expect(POdata.selleraddress.email).to.eql(selleraddress.email);
    expect(POdata.selleraddress.phonenumber).to.eql(selleraddress.phonenumber);
    expect(POdata.selleraddress.country).to.eql(selleraddress.country);
  });

  it("Get PO Shipping Address Object ", () => {
    POdata.shippingaddress.should.be.a("object");
    expect(POdata.shippingaddress.company).to.eql(shippingaddress.company);
    expect(POdata.shippingaddress.address).to.eql(shippingaddress.address);
    expect(POdata.shippingaddress.city).to.eql(shippingaddress.city);
    expect(POdata.shippingaddress.state).to.eql(shippingaddress.state);
    expect(POdata.shippingaddress.pincode).to.eql(shippingaddress.pincode);
    expect(POdata.shippingaddress.taxid).to.eql(shippingaddress.taxid);
    expect(POdata.shippingaddress.contactname).to.eql(
      shippingaddress.contactname
    );
    expect(POdata.shippingaddress.email).to.eql(shippingaddress.email);
    expect(POdata.shippingaddress.phonenumber).to.eql(
      shippingaddress.phonenumber
    );
    expect(POdata.shippingaddress.country).to.eql(shippingaddress.country);
  });

  it("LogOut", async () => {
    const res = await ax.post(
      "signout",
      {},
      { headers: { Authorization: "Bearer " + token } }
    );
    // console.log("LogOut", res.data);
    res.data.should.have.property("status", 201);
  }).timeout(5000);
});
