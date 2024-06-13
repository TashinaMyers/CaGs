//TOGGLE BUTTON FEATURE

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.add('dark-theme');
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        let theme = 'light';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
});


