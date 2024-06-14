// API KEYS AND OUR BASE URL TO FETCH
const publicKey = 'd4b82bf715543f7ae3a70dc5b98b7073';
const privateKey = '93963f6373dcf5f4053f8bf2fba0013a98aebee0';
const baseUrl = 'https://gateway.marvel.com:443/v1/public/comics';

//  EVENT LISTENER ON EACH BUTTON IN COMICS.HTML

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const characterName = event.target.getAttribute('href').substring(1);
            fetchComics(characterName);
        });
    });
});

//  FUNCTION THAT WILL FETCH OUR COMICS!!!!

const fetchComics = (characterName) => {
    const timestamp = new Date().getTime();
    const hash = CryptoJS.MD5(`${timestamp}${privateKey}${publicKey}`).toString();

    const characterIds = {
        'Captain America': 1009220,
        'Iron Man': 1009368,
        'Thor': 1009664,
        'Black Widow': 1009189,
        'Doctor Strange': 1009282,
        'Spider-Man': 1009610
    };

    // RETRIEVES CHARACTERID USING OUR CHARACTERNAME

    const characterId = characterIds[characterName];
    if (!characterId) {
        console.error('Character not found:', characterName);
        return;
    }

    const url = `${baseUrl}?characters=${characterId}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayComics(data.data.results))
        .catch(error => console.error('Error fetching comics:', error));

        //  FUNCTION THAT DISPLAYS OUR RESUTLS IN OUR HTML

        const displayComics = (comics) => {
            const main = document.querySelector('aside ul');

            // CLEARS PREVIOUS RESULTS

            main.innerHTML = '';
        
            //SETS A MAX OF FIVE COMICS AT A TIME

            const maxResults = 5;
            for (let i = 0; i < Math.min(comics.length, maxResults); i++) {
                const comic = comics[i];
                const li = document.createElement('li');
                const title = document.createElement('h2');
                const img = document.createElement('img');
        
                if (comic.thumbnail && comic.thumbnail.path && comic.thumbnail.extension) {
                    img.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
                    img.alt = comic.title;
                } else {
                    console.error('Thumbnail information missing for comic:', comic.title);
                    
                    // SKIPS THIS COMIC IF THUMBNIAL IS MISSING
                    
                    continue;
                }

                title.textContent = comic.title;
        
                li.appendChild(title);
                li.appendChild(img);
                main.appendChild(li);
            }
        
            if (comics.length > maxResults) {
                const nextButton = document.createElement('button');
                nextButton.textContent = 'Next';
                nextButton.addEventListener('click', () => {
                    displayNextComics(comics, maxResults);
                });
                main.appendChild(nextButton);
            }
        }
        
            // FUNCTION TO DISPLAY NEXT FIVE COMICS

        const displayNextComics = (comics, startIndex) => {
            const main = document.querySelector('aside ul');
            const maxResults = 5;

            //  CLEARS PREVIOUS DATA

            main.innerHTML = '';
        
            for (let i = startIndex; i < Math.min(comics.length, startIndex + maxResults); i++) {
                const comic = comics[i];
                const li = document.createElement('li');
                const title = document.createElement('h2');
                const img = document.createElement('img');
        
                if (comic.thumbnail && comic.thumbnail.path && comic.thumbnail.extension) {
                    img.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
                    img.alt = comic.title;
                } else {
                    console.error('Thumbnail information missing for comic:', comic.title);
                    
                    // SKIPS COMIC IF THUMBNAIL IS MISSING

                    continue;
                }

                title.textContent = comic.title;
        
                li.appendChild(title);
                li.appendChild(img);
                main.appendChild(li);
            }
        
                // CREATES A BUTTON IF RESULTS SURPASS OUR INITIAL PARAMITER

            if (startIndex + maxResults < comics.length) {
                const prevButton = document.createElement('button');
                prevButton.textContent = 'Previous';
                prevButton.addEventListener('click', () => {
                    displayComics(comics);
                });
                main.appendChild(prevButton);
        
                const nextButton = document.createElement('button');
                nextButton.textContent = 'Next';
                nextButton.addEventListener('click', () => {
                    displayNextComics(comics, startIndex + maxResults);
                });
                main.appendChild(nextButton);
            }
        }
    }