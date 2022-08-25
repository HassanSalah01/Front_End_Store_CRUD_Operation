const main = () => {
    clearTab();
    totaling();
    const s = JSON.parse(localStorage.getItem("s23"));
    prodArr();
    createTable(productsArray, "four");
};

main();
