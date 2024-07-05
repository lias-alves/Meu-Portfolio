$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            console.log('rolou')
        } else {
            $('.navbar').removeClass("sticky");
            console.log('de rolou kkk')
        } 
    });


});

//aperta o menu aparece

function btn2() {
    const menu = document.querySelector('.menuCli1');
    if (menu.style.display = 'none') {
        menu.style.display = 'inline-block';
        menu.style.left = 0;
    }
    
}

function btn() {
    const menu = document.querySelector('.menuCli1');

    if (menu.style.display = 'inline-block') {
        menu.style.display = 'none';
    }
    
}

