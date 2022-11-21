let example = document.getElementsByClassName("example")
let main__button = document.getElementsByClassName("main__button")

let closebtn = document.getElementsByClassName("example__close")

let j;


for (let i = 0; i < main__button.length; i++)
{
    main__button[i].addEventListener("click", function() 
    {
        if (i == 0) j = 1
        else if (i == 1) j = 0

        if (example[j].classList.contains("example_active"))
        {
            example[j].classList.remove("example_active")
            example[j].classList.add("example_unactive")

            example[i].classList.add("example_active")
            example[i].classList.remove("example_unactive")
        }

        else
        {
            example[i].classList.add("example_active")
            example[i].classList.remove("example_unactive")
        }

    })
}


for (let i = 0; i < closebtn.length; i++)
{
    closebtn[i].addEventListener("click", function()
    {
        example[i].classList.remove("example_active")
        example[i].classList.add("example_unactive")
    })
}