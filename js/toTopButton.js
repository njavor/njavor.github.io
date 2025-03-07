const changePositionToTop = 1000;

window.onscroll = function() {
    if(this.scrollY >= changePositionToTop)
    {
        document.getElementById('totop').classList.add("show");
    }
    else
    {
        document.getElementById('totop').classList.remove("show");
    }
};