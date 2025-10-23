(function () {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    const modalButton = document.querySelector('.about__img-button')
    const modal = document.querySelector('.modal')
    const body = document.body

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)
    
    function openModal(event) {
        event.preventDefault()
        body.classList.toggle('body--opened-modal')
    }

    function closeModal(event) {
        event.preventDefault()

        const target = event.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            body.classList.remove('body--opened-modal')
        }   

    }
    
})()

