//TOGGLE BUTTON FEATURE

// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggleButton = document.getElementById('theme-toggle');
//     const currentTheme = localStorage.getItem('theme');

//     if (currentTheme === 'light') {
//         document.body.classList.remove('dark-theme');
//     } else {
//         document.body.classList.add('dark-theme');
//     }

//     themeToggleButton.addEventListener('click', () => {
//         document.body.classList.toggle('dark-theme');

//         let theme = 'light';
//         if (document.body.classList.contains('dark-theme')) {
//             theme = 'dark';
//         }
//         localStorage.setItem('theme', theme);
//     });
// });

// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
console.log('modal works');
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}