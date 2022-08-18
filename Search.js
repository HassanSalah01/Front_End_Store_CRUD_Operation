const searchType = (x, y) => {
    console.log(productsArray);
    let arr = [];
    if (x == "brand") {
        arr = productsArray.filter((pro) => {
            return pro.brand == y;
        });
    } else if (x == "model") {
        arr = productsArray.filter((pro) => {
            return pro.model == y;
        });
    } else {
        arr = productsArray.filter((pro) => {
            return pro.category == y;
        });
    }
    return arr;
};

const searching = (x) => {
    if (validateText("search") && search.value != "Search") {
        console.log("sssssssssssss ");
        const newValue = search.value;
        const test = searchType(x, newValue);
        console.log(test);
        document.getElementById("four").style.display = "none";
        createTable(test, "five");
    } else {
        console.log("weonfg");
    }
};

sBrand.addEventListener("click", () => {
    searching("brand");
});

sModel.addEventListener("click", () => {
    searching("model");
});

sCategory.addEventListener("click", () => {
    searching("category");
});
