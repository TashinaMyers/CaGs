document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle' /*NAME SUBJECT TO CAHNGE*/);
    const currentTheme = localStorage.getItem('theme' /*NAME SUBJECT TO CAHNGE*/);

    if (currentTheme === 'light') {
        document.body.classList.remove('dark-theme' /*NAME SUBJECT TO CAHNGE*/);
    } else {
        document.body.classList.add('dark-theme' /*NAME SUBJECT TO CAHNGE*/);
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme' /*NAME SUBJECT TO CAHNGE*/);

        let theme = 'light' /*NAME SUBJECT TO CAHNGE*/;
        if (document.body.classList.contains('dark-theme' /*NAME SUBJECT TO CAHNGE*/)) {
            theme = 'dark' /*NAME SUBJECT TO CAHNGE*/;
        }
        localStorage.setItem('theme', theme /*NAME SUBJECT TO CAHNGE*/);
    });
});
