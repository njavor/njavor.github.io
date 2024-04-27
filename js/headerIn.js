const header = document.querySelector('header');
const changePosition = 50;


window.addEventListener('scroll', function(){
    if(header.classList.contains('noBg')){
        if(this.scrollY > changePosition){
            header.classList.remove('noBg');
        }
    }
    else{
        console.log("szia");
        if(changePosition >= this.scrollY){
            header.classList.add('noBg');
        }
    }
})