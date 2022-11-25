class Error
{
    #error_view = document.getElementsByClassName('error')[0]
    #error__text = document.getElementsByClassName("error__text")[0]

    constructor(text)
    {
        this.#error_view.classList.remove("error_unactive")
        this.#error_view.classList.add("error_active")
        this.#error__text.innerHTML = text
    }

    Close()
    {
        this.#error_view.classList.remove("error_active")
        this.#error_view.classList.add("error_unactive")
    }
}