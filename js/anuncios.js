const anuncios = [
"🌱 Productos veganos 🥔",
"🧪 Sin conservantes ni colorantes artificiales 🚫",
"✨ Batatas 100% naturales 🥔",
"🌾 Sin harinas refinadas ni gluten ❌",
"❌ Sin azúcar ni lácteos 🥛",
"👨‍👩‍👧‍👦 Alimentos saludables para toda la familia ✨"
];

let anuncioActual = 0;

const anuncioTexto =
document.getElementById("announcement-text");

setInterval(() => {

anuncioActual++;

if(anuncioActual >= anuncios.length){
anuncioActual = 0;
}

anuncioTexto.textContent =
anuncios[anuncioActual];

},3000);


const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});