const modalDash = {
    open() {
        //Open modal;
        // add class active to modal;
        document.querySelector(".modal_dash").classList.add("active");
        tittle_modal.innerHTML = "HOSTNAME: xxx-xxxx"
        dashTop.style.display='flex'
        dashBottom.style.display='flex'
        dashAdd.style.display='none'
        modalDev.style.maxWidth='75%'
        modalDev.style.maxHeight='90%'
    },
    open_add() {
        document.querySelector(".modal_dash").classList.add("active");
        tittle_modal.innerHTML = "ADICIONAR DEVICE"
        dashTop.style.display='none'
        dashBottom.style.display='none'
        dashAdd.style.display='flex'
        modalDev.style.maxWidth='50%'   
        modalDev.style.maxHeight='57%'
    },
    close() {
        //Close modal;
        //remove class active to modal;
        document.querySelector(".modal_dash").classList.remove("active");
    },
    
};

const modalEdit = {
    open() {
        //Open modal;
        // add class active to modal;
        document.querySelector(".modal_edit").classList.add("active");
    },
    close() {
        //Close modal;
        //remove class active to modal;
        document.querySelector(".modal_edit").classList.remove("active");
    },
};

const modalDelete = {
    open() {
        //Open modal;
        // add class active to modal;
        document.querySelector(".modal_delete").classList.add("active");
    },
    close() {
        //Close modal;
        //remove class active to modal;
        document.querySelector(".modal_delete").classList.remove("active");
    },
};

const modalAddSala = {
    open() {
        //Open modal;
        // add class active to modal;
        document.querySelector(".modal_addSala").classList.add("active");
    },
    close() {
        //Close modal;
        //remove class active to modal;
        document.querySelector(".modal_addSala").classList.remove("active");
    },
};

const modalDeleteSala = {
    open() {
        //Open modal;
        // add class active to modal;
        document.querySelector(".modal_deleteSala").classList.add("active");
    },
    close() {
        //Close modal;
        //remove class active to modal;
        document.querySelector(".modal_deleteSala").classList.remove("active");
    },
};