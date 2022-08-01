// Модалка обычная
class Modal {
    constructor(classModal) {
        this.$popup = document.querySelector(classModal)
    }

    show() {
        this.$popup.style.display = 'flex'
        this.$popup.style.justifyContent = 'center'
        this.$popup.style.alignItems = 'center'
    }

    hide() {
        this.$popup.style.display = 'none'
    }
}

const modalMessage = new Modal('.modal-msg');

const modalMsgOpen = document.querySelector('.modal-msg__open');

modalMsgOpen.addEventListener('click', () => {
    modalMessage.show();
})

modalMessage.$popup.addEventListener('click', (e) => {
    if(
        e.target.matches('.modal-msg__close') ||
        !e.target.closest('.modal-msg__wrap')
    ) {
        modalMessage.hide()
    }
})

// Модалка с формой
class ModalWithForm extends Modal {
    constructor(classModal, inputName, inputEmail) {
        super(classModal)
        this.$name = document.querySelector(inputName)
        this.$email = document.querySelector(inputEmail)
    }

    clearInputs() {
        this.$name.value = '';
        this.$email.value = '';
    }
}

const modalForm = new ModalWithForm('.modal-form', '.modal-form__name', '.modal-form__email')

const modalFormOpen = document.querySelector('.modal-form__open');

modalFormOpen.addEventListener('click', () => {
    modalForm.show();
})

modalForm.$popup.addEventListener('click', (e) => {
    if(
        e.target.matches('.modal-form__close') ||
        !e.target.closest('.modal-form__wrap')
    ) {
        modalForm.hide();
        modalForm.clearInputs();
    }
})

