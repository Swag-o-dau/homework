const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const body = document.body
// const clsBtn = document.querySelector('.modal__close-btn') 

const openModal = () => {
    modal.classList.add('modal--open')
    body.classList.add('body--fixed')
}

const closeModal = () => {
    modal.classList.toggle('modal--open')
    body.classList.remove('body--fixed')
}

btn.addEventListener('click', openModal)

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        closeModal()
    }
})

// clsBtn.addEventListener('click', () => {
//     modal.classList.remove('modal--open')
// })

document.addEventListener('keydown', event => {
    if(event.code === 'Escape' && modal.classList.contains('modal--open')) {
        closeModal()
    }
})