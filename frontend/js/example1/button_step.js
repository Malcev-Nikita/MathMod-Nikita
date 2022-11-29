let error_log
let error__close = document.getElementsByClassName("error__close")[0]

function next(step)
{
    step++

    steps[step - 1].classList.remove(steps[step - 1].classList[0] + "_active")
    steps[step].classList.add(steps[step].classList[0] + "_active")

    if (step == 1) 
    {

    }
    else if (step == 2)
    {
        
    }
    else if (step >= 3)
    {
        error_log = new Error("Задача уже решена")
        step--
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