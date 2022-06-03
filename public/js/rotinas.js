const modalRotina = {
  open() {
      //Open modal;
      // add class active to modal;
      document.querySelector(".modal_rotina").classList.add("active");
      
  },
  close() {
      //Close modal;
      //remove class active to modal;
      document.querySelector(".modal_rotina").classList.remove("active");
  },
};

const modalEditarRotina = {
  open(idRotina) {
      //Open modal;
      // add class active to modal;
      document.querySelector(".modal_editarRotina").classList.add("active");
      btn_editar.innerHTML = `<button onclick="editarRotina(${idRotina})" class="add_button" style="width: 100%;">Editar</button>`
  },
  close() {
      //Close modal;
      //remove class active to modal;
      document.querySelector(".modal_editarRotina").classList.remove("active");
  },
};