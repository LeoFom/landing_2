"use strict"

document.addEventListener('DOMContentLoaded', function()  {
  const form= document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault();

    let error = formValidate(form);
  }

  function formValidate(form) {
    let error = 0;
    let formReq= document.querySelectorAll('.-req');

    for (let index = 0; index < formReq.length; index++){
      const inout = formReq[index];
      formRemoveError(input);
      if (input.classList.contains('-email')){
        if (emailTest(input)) {
          formAdError(input);
          error++;
        }
      }  else if (input.getAttribute("type") === "checkbox" && input.checkbox === false){
        formAddError(input);
        error++;
      }  else  {
           if (input.value === ''){
             formAddError(input);
             error++;
           }
      }

    } 
  }

  function formAddError(input) {
    input.parentElement.classList.add('-error');
    input.classList.add('-error'); 
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('-error');
    input.classList.remove('-error');
  }
  // ������� ����� email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
  
});