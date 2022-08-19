const deleting = (x)=>{
    const name = x.model;
    localStorage.removeItem(name);
    const element = document.getElementById("four")
    Product.num = 0
    while (element.firstChild) {
        element.firstChild.remove();
    }
    productsArray = [];
    prodArr();
    createTable(productsArray,"four")
}