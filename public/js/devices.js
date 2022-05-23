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
        tittle_modal_edit.innerHTML = "Editar Device";
        icone_modal.innerHTML = '<i class="fi fi-rs-computer"></i>';
        container1.innerHTML = `<h2>Patrimônio</h2>
                                <input placeholder="Digite o patrimônio da máquina" type="text" />`
        container2.innerHTML = `<h2>Hostname</h2>
                                <input placeholder="Digite o hostname da máquina" type="text" />`
        container3.innerHTML = `<h2>Sala</h2>
                                <select name="" id="">
                                <option value="null">Escolha uma sala</option>
                                <option value="1A">1A</option>
                                <option value="1B">1B</option>
                                <option value="2A">2A</option>
                                <option value="2B">2B</option>
                                <option value="3A">3A</option>
                                <option value="3B">3B</option>
                                <option value="4A">4A</option>
                                <option value="4B">4B</option>
                                </select>`

        btn_edit.style.display = 'block';
        btn_delete.style.display = 'none';
        btn_addSala.style.display = 'none';
        btn_deleteSala.style.display = 'none';
    },
    
    openDelete() {
        //Open modal;
        // add class active to modal;
        document.querySelector(".modal_edit").classList.add("active");
        tittle_modal_edit.innerHTML = "Excluir Device";
        icone_modal.innerHTML = '<i class="fi fi-rs-computer"></i>';
        container1.innerHTML = `<h2>Patrimônio</h2>
        <input placeholder="Digite o patrimônio da máquina" type="text" />`
        container2.innerHTML = ``
        container3.innerHTML = ``

        
        btn_edit.style.display = 'none';
        btn_delete.style.display = 'block';
        btn_addSala.style.display = 'none';
        btn_deleteSala.style.display = 'none';
    },
    
    openAddSala() {
        //Open modal;
        // add class active to modal;
        document.querySelector(".modal_edit").classList.add("active");
        tittle_modal_edit.innerHTML = "Adicionar Sala";
        icone_modal.innerHTML = '<i class="fi fi-rr-school"></i>';
        container1.innerHTML = `<h2>Nome da Sala</h2>
        <input placeholder="Nome" type="text" />`
        container2.innerHTML = `<h2>Andar</h2>
        <select name="" id="">
                                <option value="null">Escolha um andar</option>
                                <option value="1">1A</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                </select>`
        container3.innerHTML = ``

        btn_edit.style.display = 'none';
        btn_delete.style.display = 'none';
        btn_addSala.style.display = 'block';
        btn_deleteSala.style.display = 'none';
    },
    
    openDeleteSala() {
        //Open modal;
        // add class active to modal;
        document.querySelector(".modal_edit").classList.add("active");
        tittle_modal_edit.innerHTML = "Excluir Sala"
        icone_modal.innerHTML = '<i class="fi fi-rr-school"></i>';
        container1.innerHTML = `<h2>Nome da Sala</h2>
        <input placeholder="Nome" type="text" />`
        container2.innerHTML = ``
        container3.innerHTML = ``

        btn_edit.style.display = 'none';
        btn_delete.style.display = 'none';
        btn_addSala.style.display = 'none';
        btn_deleteSala.style.display = 'block';
    },
    
    close() {
        //Close modal;
        //remove class active to modal;
        document.querySelector(".modal_edit").classList.remove("active");
    },
};