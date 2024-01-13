const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');
const languageButton = document.querySelector('.changeLanguageButton');
const languages = document.querySelector('.buttonContent');
const spanishLanguage = document.querySelector('#spanish');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// let gatherText;
// gatherText = document.getElementById("testingThis").innerText;
// console.log(gatherText); // THE ACTUAL TEXT OF THE <P>

languageButton.addEventListener('click', function(){
    languages.classList.toggle('active');
});

// spanishLanguage.addEventListener('click', function(){
//     let language = document.getElementById("everything").innerText;
//     language.toLocaleString("es-ES");
// })
