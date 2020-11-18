const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')
console.log("funcionou");

for (const card of cards) {
    card.addEventListener('click', function () {
     const videoId = card.getAttribute("id")
     modalOverlay.classList.add('active')
     modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`  
    })
    
    console.log(card);
}

const closeModal = document.querySelector('.close-modal');

closeModal.addEventListener('click', function () {
        modalOverlay.classList.remove('active')
        modalOverlay.querySelector('iframe').src = ""  
    })
