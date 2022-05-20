// show pricing
const form_input = document.querySelectorAll('.form__input')
const products = document.querySelector('#products');
const data_products = document.querySelector('[data-id="products"]')
const data_orders = document.querySelector('[data-id="orders"]')
const orders = document.querySelector('#orders')
// let sum = 0
form_input.forEach(event => {

    event.addEventListener('input', function (event) {
        const formElements = event.currentTarget.value;

        const calc_input = document.querySelectorAll('.calc__input')
        if (products.value >= 1) {
            data_products.style.display = 'flex';
        } else {
            data_products.style.display = 'none';
        }

        if(orders.value >=1) {
            data_orders.style.display = "flex";
        }else {
            data_orders.style.display = 'none';
        }
        const inner_calc_products = `${products.value} * $0.5`;
        const inner_price_products = products.value * 0.5;
        const inner_calc_orders = `${orders.value} * $0.5`;
        const inner_price_orders = orders.value * 0.5;
        data_products.querySelector('.item__calc').textContent = inner_calc_products;
        data_products.querySelector('.item__price').textContent = `$ ${inner_price_products}`
        data_orders.querySelector('.item__calc').textContent = inner_calc_orders;
        data_orders.querySelector('.item__price').textContent = `$ ${inner_price_orders}`
        // sum = inner_price_orders + inner_price_products
        // total_price.innerText = sum
        // console.log(sum)
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
    package.style.display = "flex"

    select_dropdown.style.display = "none"
    package.querySelector(".item__calc").innerText = "Basic"
    package.querySelector(".item__price").innerText = 10

})

data_value[2].addEventListener('click', () => {
    select_input.innerText = "Professional"
    select_input.style.color = "black"
    select_dropdown.style.display = "none"

    package.style.display = "flex"

    package.querySelector(".item__calc").innerText = "Professional"
    package.querySelector(".item__price").innerText = 20


})

data_value[3].addEventListener('click', () => {
    select_input.innerText = "Premium"
    select_input.style.color = "black"
    select_dropdown.style.display = "none"

    package.style.display = "flex"

    package.querySelector(".item__calc").innerText = "Premium"
    package.querySelector(".item__price").innerText = 30

})

//checkbox's
const accounting = document.querySelector('#accounting')
const terminal = document.querySelector("#terminal")
const data_accounting = document.querySelector('[data-id="accounting"]')
const data_terminal = document.querySelector('[data-id="terminal"]')
accounting.addEventListener('change', function () {
    if (this.checked) {
        data_accounting.style.display = "flex"

    } else {
        data_accounting.style.display = "none"
    }
})

terminal.addEventListener('change', function () {
    if (this.checked) {
        data_terminal.style.display = "flex"
    } else {
        data_terminal.style.display = "none"

    }
})

//summary total
const list_item = document.querySelectorAll('.list__item')
document.querySelector('#total-price').style.display = "flex";
const total_price = document.querySelector('.total__price')
const item_price = document.querySelectorAll('.item__price')
let sum = 0
total_price.innerText = 0;

item_price.forEach(function(price) {
    sum = sum + item_price.value;
    total_price.innerText = sum
    console.log(price.value)
})

    // } else {


        // total_price.innerText =
        // total_price.innerText = sum_price

    // }
// })



