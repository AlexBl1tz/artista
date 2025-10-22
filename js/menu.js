(function(){
    const openButton =document.querySelector('.nav-menu');
    const menu = document.querySelector('.nav-link');
    const CloseMenu = document.querySelector('.nav-close');


    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav-link--show');
    });
    
    CloseMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav-link--show');
    })    
})();