let theme = localStorage.getItem('theme');

const themeButton = document.querySelector("#theme-button");
const body = document.querySelector("body");

const darkTheme = () => {
    body.classList.add("dark");
    localStorage.setItem('theme', 'dark');
};
const lightTheme = () => {
    body.classList.remove("dark");
    localStorage.setItem('theme', 'light');
};



if (theme === 'dark' || (theme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeButton.querySelector("svg #sun").style.animation = "0s toMoon forwards";
    darkTheme();
};

themeButton.addEventListener("click", function () {
    if(!body.classList.contains("dark")){
        themeButton.querySelector("svg #sun").style.animation = "0.8s toMoon";
        darkTheme();
    }
    else{
        themeButton.querySelector("svg #sun").style.animation = "0.8s toSun";
        lightTheme();
    }
});