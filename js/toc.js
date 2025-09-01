if(document.getElementById('toc') != null){
    // generate TOC content
    const h4 = document.createElement("h4");
    h4.innerText = "Tartalom"
    document.querySelector('section#content div #toc').appendChild(h4);
    
    const articleHeadings = document.querySelectorAll('section#content div article h3');
    articleHeadings.forEach((element) => {
        let a = document.createElement('a');
        a.innerText = element.innerText;
        a.href = `#${element.id}`;
        document.querySelector('section#content div #toc').appendChild(a);
    });
    var headingLinks = document.querySelectorAll('section#content div #toc a');
    
    
    
    // highlight current link
    let triggerDistance = 400;
    window.addEventListener("scroll", () => {
        let current = "";
        articleHeadings.forEach(element => {
            const elementTop = element.offsetTop;
            if (pageYOffset >= elementTop - triggerDistance) {
                current = element.getAttribute("id");
            }
        });
    
        headingLinks.forEach(link => {
            link.classList.remove("current");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("current");
            }
        });
    });
}