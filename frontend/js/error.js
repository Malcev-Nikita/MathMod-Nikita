let error_view = document.getElementsByClassName('error')[0]
let error__text = document.getElementsByClassName("error__text")[0]
let error__close = document.getElementsByClassName("error__close")[0]

class Error
{
    constructor(text)
    {
        error_view.classList.remove("error_unactive")
        error_view.classList.add("error_active")
        error__text.innerHTML = text
    }
}

error__close.addEventListener('click', function()
{
    error_view.classList.remove("error_active")
    error_view.classList.add("error_unactive")
})