

// function hide(){
//     getElementsByClassName(".down-arroow").style.display = "none";
// }


let menuBtn = document.querySelector('#open-menu-btn');
let closeBtn = document.querySelector('#close-menu-btn');
let menu = document.querySelector('.nav__menu');
let dwn_arw = document.querySelector('.uil-angle-double-down');
let certidata = document.querySelector('.certi-data');
let up_arw = document.querySelector('.uil-angle-double-up');
// Open Nav menu

menuBtn.addEventListener('click', () =>{
menu.style.display = "block";
closeBtn.style.display = "inline-block"
menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block";
}
