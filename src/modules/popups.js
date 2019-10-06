const popups = () => {
  const popupBtn = document.querySelectorAll('.call-btn'),
        popupAll = document.querySelectorAll('.popup'),
        more = document.querySelector('.sentence'),
        checkBtn = document.querySelector('.check-btn'),
        consultationBtn = document.querySelector('.consultation-btn'); 

  const showPopup = (classPopup) => { //функция для открытия модального окна
    popupAll.forEach((el) =>{
      if(el.classList.contains(classPopup)){
        el.style.display = 'block';
      }
    })
    closePopup(classPopup)
  };
  const closePopup = (classPopup) => { // функция для закрытия модального окна
    document.querySelector(`.${classPopup}`).addEventListener('click', (event) =>{
      let target = event.target;
      if(!target.closest(`.popup-dialog`) || target.closest('.popup-close')){
        document.querySelector(`.${classPopup}`).style.display = 'none';
      }
    });

  };
  

  popupBtn.forEach(element => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      if(element.classList.contains('construct-btn')){
        showPopup('popup-discount');
        return;
      }
      showPopup('popup-call');
    })
  });

  more.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    if(target.classList.contains('discount-btn')){
      showPopup('popup-discount');
    }
  });

  checkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showPopup('popup-check');
  });
  
  consultationBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    showPopup('popup-consultation');
  });

};
export default popups;