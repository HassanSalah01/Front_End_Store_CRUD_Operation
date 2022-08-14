const model = getElement("model");
const brand = getElement("brand")
const count = getElement("count");
const discount = getElement("discount");
const tax = getElement("tax");
const price = getElement("price");
const category = getElement("category");
const total = getElement("total");
const elements = [model,brand, count, price, discount, tax, category, total];
const create = getElement("btn");
const del = getElement("co");
console.log(del);
let arr = [];
let productsArray = []

del.addEventListener(("click"),()=>{
    localStorage.clear();
})

btn.addEventListener("click", () => {
    if (validateForm()) {
        const newProd = {
            model: model.value,
            brand:brand.value,
            tax: tax.value,
            price: price.value,
            discount: discount.value,
            count: count.value,
            category: category.value,
            total: total.value,
        };
        const prod = new Product(newProd);
        localStorage.setItem(`${newProd.model}`,JSON.stringify(prod));
        cElement(prod)
        refrechTab();

    } else {
        alert("Missing Fields");
    }
});

const main = () => {
    clearTab();
    totaling();
    const s = JSON.parse(localStorage.getItem("s23"));
    console.log(Object.keys(localStorage))
    prodArr();
    createTable(productsArray);

    
};

main();