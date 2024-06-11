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