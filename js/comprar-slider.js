const track = document.querySelector(".comprar-track");
track.innerHTML += track.innerHTML;

let index = 0;

setInterval(() => {

items.forEach(i => i.classList.remove("active"));

index++;

if(index >= items.length){
index = 0;
}

items[index].classList.add("active");

},3000);