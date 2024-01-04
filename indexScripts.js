const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// let gatherText;
// gatherText = document.getElementById("testingThis").innerText;
// console.log(gatherText);
