let lightMode = localStorage.getItem('lightMode');
const lightModeToggle = document.getElementById('color-scheme-toggle');

const enableLightMode = () => {
    document.body.classList.add('light-mode');
    localStorage.setItem('lightMode', 'enabled');
};
const disableLightMode = () => {
    document.body.classList.remove('light-mode');
    localStorage.setItem('lightMode', 'disabled');
};



if (lightMode === 'enabled') {
    enableLightMode();
}
lightModeToggle.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightMode');
    if (lightMode === 'enabled'){
        disableLightMode();
    }
    else{
        enableLightMode();
    }
})