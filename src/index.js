 
  
  import checkPrice from './modules/checkPrice';
  import formSend from './modules/formSend';
  import accordPrice from './modules/accordPrice';
  import accordQuestion from './modules/accordQuestion';
  import popups from './modules/popups';
  import showMore from './modules/showMore';
  import validator from './modules/validator';

  checkPrice();
  popups(); //открытие модального окна
  showMore(); // показать болдьше акций
  accordQuestion(); //аккордеон для блока с вопросами
  accordPrice(); //аккордеон для блока с ценой
  formSend(); // отправка форм
  validator(); //валидация
