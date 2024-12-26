function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header');
}

//Chamando a função ao carregar 
window.addEventListener('scroll', scrollHeader);