// FUNCTION TO HANDLE OPENING AND CLOSING OF MODALS

const initializeModals = () => {
    const images = document.querySelectorAll('#myImg');
    const modals = document.querySelectorAll('.modal');

    images.forEach((img, index) => {
        const modal = modals[index];
        const modalImg = modal.querySelector('.modal-content');
        const captionText = modal.querySelector('.caption');
        const closeBtn = modal.querySelector('.close');

        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// INITIALIZES MODALS FUNCTION UPON LOADING IN OUR PAGE

initializeModals();

// FUNCTION THAT FETCHES DATA FROM OUR API

const fetchData = async (category) => {
    const url = `https://www.freetogame.com/api/games?category=${category}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        appendDataToList(data);
    } catch (error) {
        console.error(`Error fetching data:`, error);
    }
};

// FUNCTION THAT APPENDS DATA IN EMPTY UL IN HTML FILE

const appendDataToList = (data) => {
    const ul = document.getElementsByClassName('catch')[0];

    // CLEARS PREVIOUS DATA IF NECESSARY

    ul.innerHTML = '';

    data.forEach(item => {

        // CREATES AN LI ELEMENT PER EACH ITEM RETURNED

        const li = document.createElement('li');
        li.textContent = item.title;
        ul.appendChild(li);
    });
};


// EVENT LISTENERS ADDED TO BUTTON THAT CHANGES OUT CATEGORY VARIABLE 

document.getElementById('btn1').addEventListener('click', () => fetchData('strategy'));
document.getElementById('btn2').addEventListener('click', () => fetchData('shooter'));
document.getElementById('btn3').addEventListener('click', () => fetchData('mmorpg'));
document.getElementById('btn4').addEventListener('click', () => fetchData('survival'));
