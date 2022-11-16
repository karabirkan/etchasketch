const button = document.createElement("button");
header.appendChild(button);
button.innerText = "Button";
button.addEventListener("click", function popUp() {
    prompt("hey yo")


})



for ( let i =0; i<256; i++){


const square = document.createElement("div");
square.classList.add("square");
document.getElementById("container").appendChild(square);
square.textContent = "test";


square.addEventListener("mouseover", changeHoverIn);
square.addEventListener("mouseout", changeHoverOut);

function changeHoverIn(){

    square.setAttribute("style", "background-color:blue;")
};

function changeHoverOut(){

    square.setAttribute("style", "background-color:yellow;")
};


}
