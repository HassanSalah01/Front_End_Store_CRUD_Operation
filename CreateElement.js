const cElement = (x, divName) => {
    const div = document.createElement("div");
    div.id = x.id;
    document.getElementById(divName).appendChild(div);
    const ul = document.createElement("ul");
    ul.className = "tableList2";
    div.appendChild(ul);
    for (const [value, ttt] of Object.entries(x)) {
        const li = document.createElement("li");
        li.innerHTML = ttt;
        ul.appendChild(li);
    }
    const li = document.createElement("li");
    const li2 = document.createElement("li");
    li.id= "btnUpdate"
    li2.id= "btnUpdate"
    li.innerHTML = "UPDATE";
    li2.innerHTML = "DELETE";
    li.addEventListener("click",()=>{
        update(x);
    })
    li2.addEventListener("click",()=>{
        deleting(x);
    })
    ul.appendChild(li);
    ul.appendChild(li2);
};
const prodArr = () => {
    const arr = Object.keys(localStorage);
    for (let i = 0; i < arr.length; i++) {
        productsArray.push(
            new Product(JSON.parse(localStorage.getItem(arr[i])))
        );
    }
};

const createTable = (x, divName) => {
    for (let i = 0; i < x.length; i++) {
        cElement(x[i], divName);
    }
};
