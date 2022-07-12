// import AirDatepicker from 'js/air-datepicker';
// import localeEn from 'js/en';

let today = new Date().toISOString().substr(0, 10);
document.querySelector(".cooming__date").value = today;


new AirDatepicker('#date_in', {
    // locale: localeEn
    startDate: new Date(),
    autoClose: true,
    minDate: new Date(),
    // language: 'en',
    // isMobile: true,
})

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
