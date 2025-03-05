const modal = document.getElementById('modal-add-notification');
const cancelButton = document.getElementById('cancel');

const  btnShowModal = document.getElementById('btn-show-modal');

console.log([modal, cancelButton, btnShowModal])

btnShowModal.addEventListener('click', e =>{
    modal.classList.remove('hidden');
})
cancelButton.addEventListener('click', e =>{
    modal.classList.add('hidden');
})