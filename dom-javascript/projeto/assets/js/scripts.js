function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    changeButton.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);

}

function changeText() {
    if (body.classList.contains(darkModeClass)){ // body tem troka de dark mode, então...
        changeButton.innerHTML = lightModeText;
        h1.innerHTML = darkModeText;
        return;
    }
    changeButton.innerHTML = darkModeText;
    h1.innerHTML = lightModeText;
}

const lightModeText = 'Light Mode';
const darkModeText = 'Dark Mode';
const darkModeClass = 'dark-mode';
const changeButton = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

changeButton.addEventListener('click', changeMode);
