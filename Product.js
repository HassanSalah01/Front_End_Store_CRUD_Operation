class Product {
    static num = 0;
    constructor(prod) {
        Product.num++;
        this.id = Product.num;
        this.brand = prod.brand;
        this.model = prod.model;
        this.category = prod.category;
        this.price = prod.price;
        this.tax = prod.tax;
        this.discount = prod.discount;
        this.total = prod.total;
        this.count = prod.count;
    }
    setModel(val) {
        this.model = val;
    }
    getTit() {
        return this.model;
    }

    setPrice(val) {
        this.price = val;
    }

    getPrice() {
        return this.price;
    }

    setTax(val) {
        this.tax = val;
    }

    getTax() {
        return this.tax;
    }

    setDiscount(val) {
        this.discount = val;
    }

    getDiscount() {
        return this.discount;
    }

    setCount(val) {
        this.count = val;
    }

    getCount() {
        return this.count;
    }

    setCategory(val) {
        this.category = val;
    }

    getCategory() {
        return this.category;
    }
    printData() {
        console.log(this.model);
        console.log(this.count);
    }
}
