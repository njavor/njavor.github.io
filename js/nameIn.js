const title = document.getElementById('logolink');
const asubhead = document.getElementById('nev');

window.addEventListener('scroll', function(){
    if(title.classList.contains('show')){
        if(this.scrollY < asubhead.offsetTop){
        title.classList.remove('show');
        }
    }
    else{
        if( asubhead.offsetTop <= this.scrollY){
        title.classList.add('show');
        }
    }
})