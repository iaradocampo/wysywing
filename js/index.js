function changeBg(){
    let navbar = document.getElementById('navbar');
    let scrollValue = window.scrollY;
    if(scrollValue < 150 ){
        navbar.classList.remove('bg-scroll');
    }else{
        navbar.classList.add('bg-scroll');
    }
}
window.addEventListener('scroll', changeBg);

const navResponsive = () => {
    const toggler = document.querySelector('.toggler');
    const icon = document.querySelector('.fa-bars');
    const bgNav = document.querySelector('nav');
    const nav = document.querySelector('ul');
    const navLinks = document.querySelectorAll('ul li');
    toggler.addEventListener('click', () => {
        icon.classList.toggle('fa-xmark');
        bgNav.classList.toggle('bg-nav');
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 + 0.5}s`
            }
        });
    });
}
navResponsive();

const slide = () => {
    const card1 = document.getElementById('card-1');
    const card2 = document.getElementById('card-2');
    const card3 = document.getElementById('card-3');

    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const btn3 = document.getElementById('btn-3');

    btn1.addEventListener('click', () =>{
        card1.style.display = 'flex';
        card2.style.display = 'none';
        card3.style.display = 'none';
        btn1.classList.add('active');
        btn2.classList.remove('active');
        btn3.classList.remove('active');
    })

    btn2.addEventListener('click', () =>{
        card2.style.display = 'flex';
        card1.style.display = 'none';
        card3.style.display = 'none';
        btn2.classList.add('active');
        btn1.classList.remove('active');
        btn3.classList.remove('active');
    })
    
    btn3.addEventListener('click', () =>{
        card3.style.display = 'flex';
        card1.style.display = 'none';
        card2.style.display = 'none';
        btn3.classList.add('active');
        btn1.classList.remove('active');
        btn2.classList.remove('active');
    })
}
slide();