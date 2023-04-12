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
    dietNode.style.display = "none";
    dietNode.appendChild(dietTextNode);
    document.getElementById("foodItems").appendChild(dietNode);
    if (diet.value != "") {
        diet.value = ""
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
let contents = document.querySelectorAll(".content");
let cards = document.querySelectorAll(".card");
let tabs = document.querySelectorAll(".tab");
let link = document.querySelector(".links")
let about = document.querySelector(".ingredients")
tabs.forEach((e) => {
    e.onclick = () => {
        tabs.forEach(e => {
            e.style.transform = "";
        });
        e.style.transform = "scale(1.15)"
    }
})
cards.forEach((card) => {
    let nutritionTab = document.querySelector(".nutrition-tab");
    nutritionTab.onclick = () => {
        contents.forEach((card) => {
            card.style.opacity = "0";
            ingredientsTab.style.transform = "";
        })
        tabs.forEach((e => {
            // tabs.style.transform = "";
        }))
        let description = document.querySelector(".nutrition");
        description.style.opacity = "1";
        nutritionTab.style.transform = "scale(1.15)"
    }
    let ingredientsTab = document.querySelector(".ingredients-tab");
    ingredientsTab.onclick = () => {
        let contents = document.querySelectorAll(".content");
        contents.forEach((card) => {
            card.style.opacity = "0";
            nutritionTab.style.transform = "";
        })
        tabs.forEach((e => {
            // tabs.style.transform = "";
        }))
        let ingredients = document.querySelector(".ingredients");
        ingredients.style.opacity = "1";
        ingredientsTab.style.transform = "scale(1.15)"
    }
})