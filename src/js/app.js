// const form_input = document.querySelectorAll('.form__input')

document.querySelector('form').addEventListener('input', function(event){
    event.preventDefault();
    const formElements = event.target.elements;
    console.log(formElements[0].value);
    // if(formElements.value >= 1) {
    //     document.querySelector(".list__item").style.display = "block";
    //
    // }

})





