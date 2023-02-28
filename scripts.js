console.log(document.title);

document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";

document.querySelector(".infocard-list-pkmn-lg").style.backgroundColor = "green";

console.log(document.URL);

console.log(document.domain);


let images = document.querySelectorAll("img");

console.log(images);

for(let image of images) {
image.setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif");
}

let flying = document.querySelectorAll(".itype.flying");
for (item of flying) {
    item.parentNode.parentNode.parentNode.style.backgroundColor = "yellow";
}

