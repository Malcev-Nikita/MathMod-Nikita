let error_log
let error__close = document.getElementsByClassName("error__close")[0]

function next(step)
{
    step++

    if (step == 2)
    {
        let input = document.querySelectorAll("input")
        let valid = true;

        for(let i = 0; i < input.length; i++)
        {
            if (!Number(input[i].value) || Number(input[i].value) <= 0)
            {
                error_log = new Error("Введены неправильные данные!")
                valid = false
            }
        }

        if (!valid)
        {
            step--
        }
    }

    if (step >= 3)
    {
        error_log = new Error("Задача уже решена")
        step--
    }

    steps[step - 1].classList.remove(steps[step - 1].classList[0] + "_active")
    steps[step].classList.add(steps[step].classList[0] + "_active")

    if (step == 1) 
    {
        row_count = document.getElementsByClassName("row_count")[0]
        column_count = document.getElementsByClassName("column_count")[0]

        CreateTableSecondStap(row_count.options[row_count.selectedIndex].text, 
                              column_count.options[column_count.selectedIndex].text)

        CreateTableSecondStapStorage(row_count.options[row_count.selectedIndex].text)
        CreateTableSecondStaprequirement(column_count.options[column_count.selectedIndex].text)
    }

    else if (step == 2) 
    {
        Result(Number(row_count.options[row_count.selectedIndex].text), 
               Number(column_count.options[column_count.selectedIndex].text))
    }

    return step
}

function back(step)
{
    if (step <= 0)
    {
        error_log = new Error("Вы ещё не прошли дальше, чтобы вернуться назад")
    }
    else
    {
        step--

        steps[step].classList.add(steps[step].classList[0] + "_active")
        steps[step + 1].classList.remove(steps[step + 1].classList[0] + "_active")
    }

    return step
}

error__close.addEventListener('click', function()
{
    error_log.Close()
})