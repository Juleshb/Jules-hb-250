/* SERVICES MODAL */

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'), 
      modalCloses = document.querySelectorAll('.services__modal-close'), 
      servicesModals = document.querySelectorAll('.services__modal'),
      servicesModalContent = document.querySelectorAll('.services__modal-content')

const modal = modalClick => {
    modalViews[modalClick].classList.add('active-modal') 
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})