const clearTab = () => {
    for (let i of elements) {
        i.addEventListener("click", () => {
            i.value = "";
        });
    }
};

const totaling = ()=>{
    setInterval(() => {
        if (validateNumberField()) {
            const [newPrice , newTax , newDiscount] = [parseFloat(price.value) , parseFloat(tax.value) ,parseFloat(discount.value)];
            const totales =
                newPrice+calculatePercent(newPrice,newTax)-calculatePercent(newPrice,newDiscount)
            total.value = totales;
        }
    }, 1000);
}
const calculatePercent = (num,tax)=>{
    return parseFloat(num*(tax/100));
}