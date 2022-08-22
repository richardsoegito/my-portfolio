// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.add('flex');
        toTop.classList.remove('hidden');
    } else{
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik di Luar Hamburger
window.addEventListener('click',function(e){
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// DarkMode Toggle
const darkMode = document.querySelector('#darkMode');
const html = document.querySelector('html');

darkMode.addEventListener('click', function() {
    if(darkMode.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else{
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
})

// Pindahkan posisi toggle sesuai mode
if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('prefers-color-scheme: dark)').matches)){
    darkMode.checked = true;
}else{
    darkMode.checked = false;
}