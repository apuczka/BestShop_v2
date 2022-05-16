// show pricing
const form_input = document.querySelectorAll('.form__input')

form_input.forEach(event => {
    event.addEventListener('input', function (event) {
        const formElements = event.currentTarget.value;
        const calc_input = document.querySelectorAll('.calc__input')
        const products = document.querySelector('#products');
        const orders = document.querySelector('#orders')
        const data_products = document.querySelector('[data-id="products"]')
        const data_orders = document.querySelector('[data-id="orders"]')
        console.log('add'+ formElements)
        if (products.value >= 1) {
            data_products.style.display = 'block';
        } else {
            data_products.style.display = 'none';
        }

        if(orders.value >=1) {
            data_orders.style.display = "block";
        }else {
            data_orders.style.display = 'none';
        }
    })})


// choose package
const calc_select = document.querySelector('.calc__select')
const data_value = document.querySelectorAll('[data-value]')
const select_dropdown = document.querySelector('.select__dropdown')
const select_input = document.querySelector('.select__input')
const package = document.querySelector('[data-id="package"]')

select_input.addEventListener('click', (event) => {
    select_dropdown.style.display = "block"
})
data_value[1].addEventListener('click', () => {
    select_input.innerText = "Basic"
    select_input.style.color = "black"
    package.style.display = "block"

    package.innerText = 'Package Basic $2'
    select_dropdown.style.display = "none"

})

data_value[2].addEventListener('click', () => {
    select_input.innerText = "Professional"
    select_input.style.color = "black"
    select_dropdown.style.display = "none"

    package.style.display = "block"
    package.innerText = 'Package Professional $5'


})

data_value[3].addEventListener('click', () => {
    select_input.innerText = "Premium"
    select_input.style.color = "black"
    select_dropdown.style.display = "none"

    package.style.display = "block"
    package.innerText = 'Package Premium $10'

})

//checkbox's
const accounting = document.querySelector('#accounting')
const terminal = document.querySelector("#terminal")
const data_accounting = document.querySelector('[data-id="accounting"]')
const data_terminal = document.querySelector('[data-id="terminal"]')

accounting.addEventListener('change', function () {
    if (this.checked) {
        data_accounting.style.display = "block"
    } else {
        data_accounting.style.display = "none"
    }
})

terminal.addEventListener('change', function () {
    if (this.checked) {
        data_terminal.style.display = "block"
    } else {
        data_terminal.style.display = "none"

    }
})


