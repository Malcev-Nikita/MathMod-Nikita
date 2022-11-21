let step = 1

let back_step = document.getElementsByClassName('back_step')[0]
let next_step = document.getElementsByClassName('next_step')[0]

back_step.addEventListener('click', function() 
{
    if (step <= 1)
    {
        new Error("Вы ещё не прошли дальше, чтобы вернуться назад")
    }
})

next_step.addEventListener('click', function() 
{
    if (valid) step++;
})