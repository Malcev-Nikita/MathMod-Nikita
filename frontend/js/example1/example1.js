let step = 0

let error_log
let error__close = document.getElementsByClassName("error__close")[0]

let back_step = document.getElementsByClassName('back_step')[0]
let next_step = document.getElementsByClassName('next_step')[0]

let first_step = document.getElementsByClassName('first_step')[0]
let second_step = document.getElementsByClassName('second_step')[0]
let third_step = document.getElementsByClassName('third_step')[0]

let second_step__storage = document.getElementsByClassName('second_step__storage')[0]
let second_step__requirement = document.getElementsByClassName('second_step__requirement')[0]

let row_count
let column_count

let steps = [first_step, second_step, third_step]


next_step.addEventListener('click', function() 
{
    step = new Step(step).Next()
})

back_step.addEventListener('click', function() 
{
    step = new Step(step).Back()
})

error__close.addEventListener('click', function()
{
    error_log.Close()
})