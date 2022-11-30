let step = 0

let back_step = document.getElementsByClassName('back_step')[0]
let next_step = document.getElementsByClassName('next_step')[0]

let first_step = document.getElementsByClassName('first_step')[0]
let second_step = document.getElementsByClassName('second_step')[0]
let third_step = document.getElementsByClassName('third_step')[0]

let second_step__storage = document.getElementsByClassName('second_step__storage')[0]
let second_step__requirement = document.getElementsByClassName('second_step__requirement')[0]

let row_count
let column_count

let datematrix = [[520, 480, 650, 500, 720], [450, 525, 630, 560, 750]]
let datestorage = [40, 70]
let daterequirement = [20, 30, 15, 27, 28]

let steps = [first_step, second_step, third_step]

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
            input.classList.add("example2_input_matrix")
            input.value = datematrix[i][j]

            th.appendChild(input)
            tr.appendChild(th)
        }
        
        document.getElementsByClassName('second_step__table')[0].appendChild(tr)
    }
}

function CreateTableSecondStapStorage(row)
{
    document.getElementsByClassName('second_step__storage')[0].remove()

    let table = document.createElement("table")
    table.className = "second_step__storage"
    second_step.appendChild(table)

    let thead = document.createElement("thead")
    thead.textContent = "Запасы"
    document.getElementsByClassName('second_step__storage')[0].appendChild(thead)

    for (let i = 0; i < row; i++)
    {
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        let input = document.createElement("input")
        input.classList.add("example2_input_storage")
        input.value = datestorage[i]

        th.appendChild(input)
        tr.appendChild(th)

        document.getElementsByClassName('second_step__storage')[0].appendChild(tr)
    }
}

function CreateTableSecondStaprequirement(column)
{
    document.getElementsByClassName('second_step__requirement')[0].remove()

    let table = document.createElement("table")
    table.className = "second_step__requirement"
    second_step.appendChild(table)

    let thead = document.createElement("thead")
    thead.textContent = "Потребности"
    document.getElementsByClassName('second_step__requirement')[0].appendChild(thead)

    for (let i = 0; i < column; i++)
    {
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        let input = document.createElement("input")
        input.classList.add("example2_input_requirement")
        input.value = daterequirement[i]

        th.appendChild(input)
        tr.appendChild(th)

        document.getElementsByClassName('second_step__requirement')[0].appendChild(tr)
    }
}

back_step.addEventListener('click', function() 
{
    step = back(step)
})

next_step.addEventListener('click', function() 
{
    step = next(step)
})