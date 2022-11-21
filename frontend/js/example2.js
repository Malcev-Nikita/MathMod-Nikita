let step = 0

let back_step = document.getElementsByClassName('back_step')[0]
let next_step = document.getElementsByClassName('next_step')[0]

let first_step = document.getElementsByClassName('first_step')[0]
let second_step = document.getElementsByClassName('second_step')[0]

let steps = [first_step, second_step]

function CreateTableSecondStap(row, column)
{
    document.getElementsByClassName('second_step__table')[0].remove()

    let table = document.createElement("table")
    table.className = "second_step__table"
    second_step.appendChild(table)

    for (let i = 0; i < row; i++)
    {
        let tr = document.createElement("tr")

        for (let j = 0; j < column; j++)
        {
            let th = document.createElement("th")
            let input = document.createElement("input")

            th.appendChild(input)
            tr.appendChild(th)
        }

        document.getElementsByClassName('second_step__table')[0].appendChild(tr)
    }
}

back_step.addEventListener('click', function() 
{
    if (step <= 0)
    {
        new Error("Вы ещё не прошли дальше, чтобы вернуться назад")
    }
    else
    {
        step--

        steps[step].classList.add(steps[step].classList[0] + "_active")
        steps[step + 1].classList.remove(steps[step + 1].classList[0] + "_active")
    }
})

next_step.addEventListener('click', function() 
{
    step++

    if (step >= 2)
    {
        new Error("Пока не завезли контент")
        step--
    }

    steps[step - 1].classList.remove(steps[step - 1].classList[0] + "_active")
    steps[step].classList.add(steps[step].classList[0] + "_active")

    if (step == 1) 
    {
        let row_count = document.getElementsByClassName("row_count")[0]
        let column_count = document.getElementsByClassName("column_count")[0]

        CreateTableSecondStap(row_count.options[row_count.selectedIndex].text, 
                              column_count.options[column_count.selectedIndex].text)
    }
})