
// quantity script start 
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
    for (let index= 0; index < quantityButtons.length; index++) {
        const quantityButton = quantityButtons[index];
        quantityButton.addEventListener("click", function (e) {
            let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
            if (quantityButton.classList.contains('quantity__button_plus')) {
                value++;
                if (value > 3) {
                    value = 3
                }
            } else {
                value = value - 1;
                if (value < 0) {
                    value = 0
                }
            }
            quantityButton.closest('.quantity').querySelector('input').value = value;
        });
    }
}

const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    // настройки (не обязательно), см. API
});


document.addEventListener('DOMContentLoaded', () => {

  const elements = document.querySelectorAll('[data-mask="price_input"]') // ищем все поля с атрибутом data-mask="phone"
  if (!elements) return // если таких нет, прекращаем выполнение функции
  const priceOptions = { // создаем объект параметров
    mask: Number,
    thousandsSeparator: ' '
  }
  elements.forEach(el => { // для каждого найденного поля с атрибутом [data-mask="phone"]
    IMask(el, priceOptions) // инициализируем плагин с установленными выше параметрами
  })

})
