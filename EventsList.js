del.addEventListener("click", () => {
    localStorage.clear();
});

btn.addEventListener("click", () => {
    if (validateForm()) {
        const newProd = {
            model: model.value,
            brand: brand.value,
            tax: tax.value,
            price: price.value,
            discount: discount.value,
            count: count.value,
            category: category.value,
            total: total.value,
        };
        const prod = new Product(newProd);
        const testing = prod.model;
        if(btn.value =="Update"){
            localStorage.removeItem(updatedElement);
            localStorage.setItem(`${newProd.model}`, JSON.stringify(prod));
            // cElement(prod,"four");
            refrechTab();
            const element = document.getElementById("four")
            Product.num = 0
            while (element.firstChild) {
                element.firstChild.remove();
            }
            productsArray = [];
            prodArr();
            createTable(productsArray,"four")
        }else{
            localStorage.setItem(`${newProd.model}`, JSON.stringify(prod));
            cElement(prod, "four");
            refrechTab();

        }
        // const prod = new Product(newProd);
    } else {
        alert("Missing Fields");
    }
});
showAll.addEventListener("click", () => {
    document.getElementById("five").style.display = "none";
    document.getElementById("four").style.display = "block";
});
window.addEventListener("keydown",(event)=>{
    
    if(event.key=="Enter"){
        if (validateForm()) {
        const newProd = {
            model: model.value,
            brand: brand.value,
            tax: tax.value,
            price: price.value,
            discount: discount.value,
            count: count.value,
            category: category.value,
            total: total.value,
        };
        const prod = new Product(newProd);
        const testing = prod.model;
        
        if(btn.value =="Update"){
            
            localStorage.removeItem(updatedElement);
            localStorage.setItem(`${newProd.model}`, JSON.stringify(prod));
            // cElement(prod,"four");
            refrechTab();
            const element = document.getElementById("four")
            Product.num = 0
            while (element.firstChild) {
                element.firstChild.remove();
            }
            productsArray = [];
            prodArr();
            createTable(productsArray,"four")
        }else{
            localStorage.setItem(`${newProd.model}`, JSON.stringify(prod));
            cElement(prod, "four");
            refrechTab();

        }
        // const prod = new Product(newProd);
    } else {
        alert("Missing Fields");
    }

    }
})