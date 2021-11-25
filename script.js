const items = document.querySelectorAll(".item");
const nupp = document.querySelector(".button-menu");
const menu = document.querySelector(".container");



nupp.addEventListener("click", () => {
    menu.classList.toggle('active');
});

items.forEach( (el) => {  
    el.addEventListener('click', () => {   
        //el.classList.toggle('active');
        ToggleActive(el);
   });
});



function ToggleActive(el) {
    items.forEach((item) => {
        item.classList.remove("active");
    });

    el.classList.toggle('active');
}


