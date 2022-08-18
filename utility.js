const clearTab = () => {
    for (let i of elements) {
        i.addEventListener("click", () => {
            i.value = "";
        });
    }
};
const refrechTab = () => {
    for (let i of elements) {
        i.value = i.id;
    }
};

const totaling = () => {
    setInterval(() => {
        console.log(productsArray.length);
        console.log(localStorage.length);
        if (productsArray.length < localStorage.length) {
            console.log(productsArray, "before");
            productsArray = [];
            console.log(productsArray.length, "after delete");
            prodArr();
        }
        const element = document.getElementById("five");
        if (search.value == "" && element != null) {
            while (element.firstChild) {
                element.firstChild.remove();
            }
            document.getElementById("four").style.display = "block";
        }
        if (validateNumberField()) {
            const [newPrice, newTax, newDiscount] = [
                parseFloat(price.value),
                parseFloat(tax.value),
                parseFloat(discount.value),
            ];
            const totales =
                newPrice +
                calculatePercent(newPrice, newTax) -
                calculatePercent(newPrice, newDiscount);
            total.value = totales;
        }
    }, 1000);
};
const calculatePercent = (num, tax) => {
    return parseFloat(num * (tax / 100));
};
const getElement = (id) => {
    return document.getElementById(id);
};
