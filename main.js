let nav = document.querySelector(".nav");
let toggler = document.querySelector('.toggler');
let back_to_top = document.querySelector('.back-to-top');
toggler.addEventListener('click', function() {
    nav.classList.toggle("nav_1-active");
});
let person_fill = document.querySelector('.person_fill');
let user = document.querySelector('.user');
person_fill.addEventListener('click', function() {
    user.classList.toggle("user-active");
});
window.addEventListener("scroll", function() {
    let scrollHeight = this.window.scrollY > 50;
    back_to_top.classList.toggle("scroll-active", scrollHeight);
});