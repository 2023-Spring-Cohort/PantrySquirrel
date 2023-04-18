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

function AddDietary() {
    let dietInputVal = document.getElementById("diet").value;
    let dietTextNode = document.createTextNode(dietInputVal);
    let dietNode = document.createElement("li");
    let xBtn = document.createElement("div");

    dietNode.classList.add("buttonDiet");
    xBtn.classList.add("fa-xmark")
    xBtn.classList.add("fa-solid")
    
    dietNode.appendChild(dietTextNode);
    dietNode.appendChild(xBtn);

    document.getElementById("foodItems").appendChild(dietNode);
    if (diet.value != "") {
        diet.value = ""
    }
    xBtn.onclick = () => {
        xBtn.parentElement.remove();
        xBtn.remove();
        ConvertingToString();
    }
    ConvertingToString()
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
    document.getElementById("myNav").style.height = "45%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
//-----------------card javascript-----------//
let cards = document.querySelectorAll(".card");
let tabs = document.querySelectorAll(".tab");
cards.forEach((card) => {
   
    let desTabs = card.lastElementChild.firstElementChild.nextElementSibling.firstElementChild
    let ingTabs = card.lastElementChild.firstElementChild.nextElementSibling.lastElementChild
    let desContents = card.lastElementChild.lastElementChild.firstElementChild
    let ingContents = card.lastElementChild.lastElementChild.lastElementChild


    desTabs.onclick = () => {
        ingTabs.style.transform = "";
        ingContents.style.opacity = "0";
        desContents.style.opacity = "1";
        
        desTabs.style.transform = "scale(1.15)"

        desContents.style.zIndex = "2";
        ingContents.style.zIndex = "-1";
    }
    ingTabs.onclick = () => {
        desTabs.style.transform = "";
        desContents.style.opacity = "0";
        ingContents.style.opacity = "1";

        ingTabs.style.transform = "scale(1.15)"

        ingContents.style.zIndex = "2";
        desContents.style.zIndex = "-1";

    }
})

let ingredientItems = document.querySelectorAll(".recipe-ingredient")
ingredientItems.forEach((e) => {

    e.onclick = () => {

        if (e.classList.contains("hasIt")) {

            e.classList.remove("hasIt");
            e.classList.add("notHasIt");
        }
        else {

            e.classList.remove("notHasIt");
            e.classList.add("hasIt");
                
        }

    }

})
