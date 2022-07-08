export default function () {
  const selectItem = document.querySelector('.select-js');
  const selectTitle = selectItem.querySelector('.select__title-js');
  const selectLabels = selectItem.querySelectorAll('.select__label-js');

  const popupSelect = document.querySelector('.popup-select');
  const popupSelectTitle = popupSelect.querySelector('.popup-select__title');
  const popupSelectLabels = popupSelect.querySelectorAll('.popup-select__label');

  const popupinnerField = document.querySelector(".popup__input-inner");
  const innerField = document.querySelector(".form__input-inner");

  const positionField = document.querySelector(".position-js");


// Toggle menu
  function getSelect(title, select) {
    title.addEventListener('click', () => {
      if ('active' === select.getAttribute('data-state')) {
        select.setAttribute('data-state', '');
      } else {
        select.setAttribute('data-state', 'active');
      }
    });
  }

  getSelect(popupSelectTitle, popupSelect)
  getSelect(selectTitle, selectItem)

  const popupId = "singleSelect9";
  const formId = "singleSelect4";

  const atrr = $('.position-js');
  const popupAtrr = $('.popup-position-js');


  function getLabels(select, title, labels, inner, id, atrr) {
    for (let i = 0; i < labels.length; i++) {
      labels[i].addEventListener('click', (evt) => {
        title.textContent = evt.target.textContent;

        select.setAttribute('data-state', '');

        let selectInput = document.querySelector("#" + evt.target.getAttribute("for"))

        if (selectInput.id === id) {
          inner.classList.remove("hidden");
          atrr.attr( 'name','position')
        } else {
          inner.classList.add("hidden")
          atrr.removeAttr('name')
        }
      });
    }
  }

  getLabels(selectItem, selectTitle, selectLabels, innerField, formId, atrr)
  getLabels(popupSelect, popupSelectTitle, popupSelectLabels, popupinnerField, popupId, popupAtrr)

}
