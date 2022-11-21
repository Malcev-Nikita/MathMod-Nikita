let example = document.getElementsByClassName("example")
let main__button = document.getElementsByClassName("main__button")

let closebtn = document.getElementsByClassName("example__close")


for (let i = 0; i < main__button.length; i++)
{
    main__button[i].addEventListener("click", function() {

        if (main__button[i].classList.contains("example_active"))
        {
            main__button[i].classList.remove("example_active")
            main__button[i].classList.add("example_unactive")
        }

        else if (!main__button[i].classList.contains("example_active"))
        {
            example[i].classList.add("example_active")
            example[i].classList.remove("example_unactive")
        }

    })
}


for (let i = 0; i < closebtn.length; i++)
{
    closebtn[i].addEventListener("click", function(){

        if (!example[i].classList.contains("example_active"))
        {
            example[j].classList.add(example[j].classList[0] + "_unactive")
        }

        example[j].classList.remove(example[j].classList[0] + "_active")
    
    })
}