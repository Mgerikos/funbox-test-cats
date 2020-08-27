(function() {
  var cardsAbout = document.querySelectorAll('.cards__item-card');
  var cardsAboutBtn = document.querySelectorAll('.cards__button');

  for (var i = 0; i < cardsAbout.length; i++) {
    cardsAbout[i].addEventListener('click', onCardAboutClick);
    cardsAbout[i].addEventListener('keydown', onCardAboutKeyDown);
    cardsAboutBtn[i].addEventListener('click', cardsAboutBtnClick);
  }

  function cardsAboutBtnClick(evt) {
    var element = evt.target.parentNode.previousElementSibling;
    element.classList.toggle('cards__item-card-selected');
  }

  function onCardAboutClick(evt) {
    this.classList.toggle('cards__item-card-selected');
  }

  function onCardAboutKeyDown(evt) {
    var KEY_CODE = {
      TAB: 9,
      ENTER: 13
    };

    if (evt.keyCode === KEY_CODE.TAB) return;
    if (evt.keyCode === KEY_CODE.ENTER) {
      this.classList.toggle('cards__item-card-selected');
    }
  }
})();
