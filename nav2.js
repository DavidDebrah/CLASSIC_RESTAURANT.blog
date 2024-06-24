let nav_2 = document.getElementById("nav2");
let toggler_2 = document.querySelector('.toggler2');
let back_to_top = document.querySelector('.back-to-top');
toggler_2.addEventListener('click', function() {
    nav_2.classList.toggle("nav_2-active");
});
window.addEventListener("scroll", function() {
    let scrollHeight = this.window.scrollY > 50;
    back_to_top.classList.toggle("scroll-active", scrollHeight);
});
let person1_fill = document.querySelector('.person1_fill');
let user1 = document.querySelector('.user1');
person1_fill.addEventListener('click', function() {
    user1.classList.toggle("user1-active");
});
let welcome = document.querySelector('welcome');
let welcome1 = document.getElementById('welcome1');
let welcome1_btn = document.getElementById('welcome1_btn');
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    welcome1.classList.toggle("welcome1-active");
});
btn.addEventListener('click', function() {
    welcome1_btn.classList.toggle('welcome1_btn-active');
});