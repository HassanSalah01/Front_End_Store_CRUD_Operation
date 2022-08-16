const main = () => {
    clearTab();
    totaling();
    const s = JSON.parse(localStorage.getItem("s23"));
    console.log(Object.keys(localStorage));
    prodArr();
    createTable(productsArray, "four");
    console.log(productsArray);
    console.log(searchType("brand","test"));
};

main();
