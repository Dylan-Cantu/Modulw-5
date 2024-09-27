let loading = 0;

while (loading < 100) {

    console.log("Website is still loading.");

    loading++;
}


const names = ["Dylan", "Andrew", "Cantu", "Lebron", "James"];

for (name of names) {

console.log(name);
if (name === "Cantu") {
    console.log("Dylan A. Cantu is on the list");
    break;
}
}

// Dom Manipulation

const text = document.querySelector(".title");

const changeColor = document.querySelector(".changeColor");

const userList = document.querySelector(".name-list");

const listInput = document.querySelector(".list-input");

const addListBtn = document.querySelector(".addListBtn");

    addListBtn.addEventListener("click", function(){

        const newLi = document.createElement("LI");
    
        const liContent = document.createTextNode(listInput.value);
    
        newLi.appendChild(liContent);
    
        userList.appendChild(newLi);
    
    });

    text.classList.add("change");