const title = document.getElementById('logolink');
const asubhead = document.getElementById('nev');

const resetwidth = 550;



// WIDTH CHECK
if(this.window.innerWidth < resetwidth){
    title.classList.add('show');
}
window.addEventListener('resize', function(){
    if(this.window.innerWidth < resetwidth){
        title.classList.add('show');
    }
    else if(this.scrollY < asubhead.offsetTop){
        title.classList.remove('show');
    }
})



// SCROLL CHECK
window.addEventListener('scroll', function(){
    if(this.window.innerWidth >= resetwidth){
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
    }
})

