const getElement = (id)=>{
    return document.getElementById(id);
}

const title = getElement("title");
const count  = getElement("count");
const discount = getElement("discount");
const tax = getElement("tax");
const price = getElement("price");
const category = getElement("category");
const elements = [title,count,price,discount,tax,category];
const create = getElement("btn");
const total = getElement("total");

const eve = ()=>{
    for (let i of elements){
        i.addEventListener("click",()=>{
            i.value = "";
        })
    }
}
eve();
validation("title");
create.addEventListener("click",()=>{
    console.log(title.value);
    console.log("testttttttttttt",parseInt(title.value));
    console.log(validation("title"));
})
setInterval(()=>{
    if(validation("price") && validation("tax") && validation("discount")){
        const totales = parseFloat(price.value)+parseFloat(tax.value)+parseFloat(discount.value);
        console.log(totales);
        total.value = totales
    }
},1000)
const main=()=>{
    
}
// const createProduct=()=>{

// }

// const x = {
//     title:"iphone",
    
//         price:1100,
//         tax:14,
//         discount:10,
//         count :3,
//         category:"Phone"
// }