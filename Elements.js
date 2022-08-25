const model = getElement("model");
const brand = getElement("brand");
const count = getElement("count");
const discount = getElement("discount");
const tax = getElement("tax");
const price = getElement("price");
const category = getElement("category");
const total = getElement("total");
const search = getElement("search");
const sBrand = getElement("sBrand");
const sModel = getElement("sModel");
const sCategory = getElement("sCategory");
const create = getElement("btn");
const del = getElement("co");
const showAll = getElement("showAll");
const elements = [
    model,
    brand,
    count,
    price,
    discount,
    tax,
    category,
    total,
    search,
];
let arr = [];
let productsArray = [];
let updatedElement = null;
