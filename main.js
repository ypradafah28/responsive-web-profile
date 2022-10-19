const nav = document.querySelector("#nav");
const close = document.querySelector("#close");
const bars = document.querySelector("#bar");
const list = document.querySelector("#list");

bars.addEventListener("click", function () {
    bars.classList.add("hidden");
    close.classList.remove("hidden");
    list.classList.remove("hidden");
});

close.addEventListener("click", function () {
    close.classList.add("hidden")
    list.classList.add("hidden")
    bars.classList.remove("hidden")
});
