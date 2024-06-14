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

 // FUNCTION THAT COLLECTS ALL INPUT DATA

 document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blog-form');
    const errorMessage = document.getElementById('error-message');

    blogForm.addEventListener('submit', event => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();

        if (!username || !title || !content) {
            errorMessage.textContent = 'All fields are required!';
            return;
        }

        const newPost = {
            username,
            title,
            content,
            timestamp: new Date().toLocaleString()
        };

        let blogPosts = JSON.parse(localStorage.getItem('blogposts')) || [];
        blogPosts.push(newPost);

        localStorage.setItem('blogposts', JSON.stringify(blogPosts));

        blogForm.reset();
        errorMessage.textContent = 'Blog post submitted successfully!';
    });
});
