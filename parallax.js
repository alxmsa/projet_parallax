let listBg = document.querySelectorAll('.banner .bg');
let titleBanner = document.querySelector('.banner h1')
let listTab = document.querySelectorAll('.tab')

window.addEventListener('scroll', (event) => {
    //scrollY i the web   scrollbar position pixel
    let top = this.scrollY;
    /* 
    index is the order of class bg(0,1,2,...,8)
    when scrolling the web, the class bg scroll down, the bigger the indes, the faster the movement
    */
    listBg.forEach((bg, index) => {
        if(index != 0 && index != 8){
            bg.style.transform = `translateY(${top*index/2}px)`;
        }else if(index == 0){
            bg.style.transform = `translateY(${top/3}px)`;
        }
    })
    titleBanner.style.transform = `translateY(${top*4/2}px)`;
    /* 
        parallaw scroll in tab
        when tabs positin is less than 500px
        form scrollbar position add active class to animation 
        and vice versa
    */
   listTab.forEach(tab => {
    if(tab.offsetTop - top < 550){
        tab.classList.add('active');
    }else{
        tab.classList.remove('active');
    }
   })
})