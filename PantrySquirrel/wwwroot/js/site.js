const userFoodItems = [];
function AddIngredient() {
    let text = document.getElementById("UI").value;
    let node = document.createElement("li");
    let xBtn = document.createElement("div");
    let textnode = document.createTextNode(text);

    node.classList.add("button");
    xBtn.classList.add("fa-xmark")
    xBtn.classList.add("fa-solid")

    node.appendChild(textnode);
    node.appendChild(xBtn);
    userFoodItems.push(text);
    console.log(userFoodItems);

    document.getElementById("foodItems").appendChild(node);
    if (UI.value != "") {
        UI.value = ""
    }
    xBtn.onclick = () => {
        xBtn.parentElement.remove();
        xBtn.remove();
        ConvertingToString();
    }
    ConvertingToString();
}
function ConvertingToString() {
    const foodItems = document.getElementById("foodItems")
    const stringHolder = document.getElementById("userIngredientsString");
    let str = "";
    for (let i = 0; i < foodItems.children.length; i++) {
        const listItem = foodItems.children[i];
        str += listItem.textContent + " ";
    }
    stringHolder.value = str;
    console.log(str);
}
// ----------------- nav bar ---------------- //
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "75%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}