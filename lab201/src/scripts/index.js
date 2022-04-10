/* ADMIN */ 
// add button to open the admin modal
const add = document.querySelector('.add-btn');
const modalContainer = document.querySelector('#modal');
const closeModal = document.querySelector('.close-modal');
modalContainer.style.display = "none";
const openModal = () => {
  add.addEventListener('click', (e) => {
    e.preventDefault();
    modalContainer.style.display = "flex" ;
  })
}

const toCloseModal = () => {
  closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalContainer.style.display = "none";
  })
}
openModal();
toCloseModal()
