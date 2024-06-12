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


const appendDataToList = (data) => {
    const ul = document.getElementsByClassName('catch')[0]; // Assuming there is only one element with class 'catch'

    // CLEARS PREVIOUS DATA IF NECESSARY

    ul.innerHTML = '';

    data.forEach(item => {

        // CREATES AN LI ELEMENT PER EACH ITEM RETURNED

        const li = document.createElement('li');
        li.textContent = item.title;
        ul.appendChild(li);
    });
};
