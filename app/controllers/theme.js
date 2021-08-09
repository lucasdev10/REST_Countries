const bodyEl = document.getElementById('body');
const textThemeEl = document.getElementById('text-theme');

const handlerTheme = () => {
    const themeSelected = localStorage.getItem('theme');
    
    if (themeSelected === 'dark-theme') {
        bodyEl.className = 'dark-theme';
        changeButtonName('Dark Mode');
    } else {
        bodyEl.className = 'light-theme';
        changeButtonName('Light Mode');
    }
};

const chooseTheme = () => {
    const themeSelected = localStorage.getItem('theme');

    if (themeSelected === 'dark-theme') {
        bodyEl.className = 'light-theme';
        setTheme('light-theme');
        changeButtonName('Light Mode');
    } else {
        bodyEl.className = 'dark-theme';
        setTheme('dark-theme');
        changeButtonName('Dark Mode');
    }
};

const setTheme = (theme) => localStorage.setItem('theme', theme);
const changeButtonName = (text) => textThemeEl.innerText = text;