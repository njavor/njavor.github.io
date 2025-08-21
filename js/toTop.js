const changePositionToTop = 1000;

window.onscroll = function() {
    if(this.scrollY >= changePositionToTop)
    {
        document.getElementById('to-top').classList.add("show");
    }
    else
    {
        document.getElementById('to-top').classList.remove("show");
    }
};