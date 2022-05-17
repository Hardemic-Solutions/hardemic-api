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