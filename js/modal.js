(() => {
    const refs = {
        openModalBtn: document.querySelectorAll("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };
  
    function disableScroll() {
        document.body.style.setProperty('overflow', 'hidden', 'important');
    }
  
    function enableScroll() {
        document.body.style.removeProperty('overflow');
    }
  
    function openModal() {
        refs.modal.classList.remove("is-hidden");
        disableScroll();
    }
  
    function closeModal() {
        refs.modal.classList.add("is-hidden");
        enableScroll();
    }

    refs.openModalBtn.forEach(element => {
        element.addEventListener("click", openModal);
    });

    refs.closeModalBtn.addEventListener("click", closeModal);
  })();