const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");

const modalImg = document.getElementById("modalMainImg");
const modalThumbs = document.getElementById("modalThumbs");

const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalExtra = document.getElementById("modalExtra");
const modalBtn = document.getElementById("modalBtn");


// ABRIR MODAL
document.querySelectorAll(".producto-card").forEach(card => {

    card.addEventListener("click", () => {

        const img = card.querySelector(".producto-img");

        const title = card.querySelector("h3").innerText;
        const price = card.querySelector(".precio").innerText;
        const desc = card.querySelector(".producto-info p").innerText;

        const extra =
            card.querySelector(".producto-extra")?.innerHTML || "";

        // IMÁGENES
        const images = JSON.parse(img.dataset.images);

        // DATOS PRINCIPALES
        modalImg.src = images[0];

        modalTitle.innerText = title;
        modalPrice.innerText = price;
        modalDesc.innerText = desc;

        modalBtn.href =
            `https://wa.me/573154237583?text=Quiero%20${title}`;

        // INFORMACIÓN EXTRA
        modalExtra.innerHTML = extra;

        // MINIATURAS
        modalThumbs.innerHTML = "";

        images.forEach(image => {

            const thumb = document.createElement("img");

            thumb.src = image;

            thumb.addEventListener("click", () => {
                modalImg.src = image;
            });

            modalThumbs.appendChild(thumb);

        });

        // MOSTRAR MODAL
        modal.classList.add("active");

    });

});


// CERRAR CON X
closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});


// CERRAR HACIENDO CLICK AFUERA
modal.addEventListener("click", e => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});