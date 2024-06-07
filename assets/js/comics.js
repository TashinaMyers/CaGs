document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle' /*NAME SUBJECT TO CHANGE*/);
    const currentTheme = localStorage.getItem('theme' /*NAME SUBJECT TO CHANGE*/);

    if (currentTheme === 'light') {
        document.body.classList.remove('dark-theme' /*NAME SUBJECT TO CHANGE*/);
    } else {
        document.body.classList.add('dark-theme' /*NAME SUBJECT TO CHANGE*/);
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme' /*NAME SUBJECT TO CAHNGE*/);

        let theme = 'light' /*NAME SUBJECT TO CHANGE*/;
        if (document.body.classList.contains('dark-theme' /*NAME SUBJECT TO CHANGE*/)) {
            theme = 'dark' /*NAME SUBJECT TO CHANGE*/;
        }
        localStorage.setItem('theme', theme /*NAME SUBJECT TO CHANGE*/);
    });
});
