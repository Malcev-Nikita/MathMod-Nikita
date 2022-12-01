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

let datematrix = [[2, 3, 1, 2], [4, 2, 1, 2], [1, 2, 3, 1]]
let datelimit = [30, 40, 25]
let datefunction = [2, 1, 3, 5]

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

function CreateTableSecondStapSeeks(row)
{
    document.getElementsByClassName('second_step__seeks')[0].remove()

    let table = document.createElement("table")
    table.className = "second_step__seeks"
    second_step.appendChild(table)

    for (let i = 0; i < row; i++)
    {
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        let select = document.createElement("select")
        let more = document.createElement("option")
        let less = document.createElement("option")
        let equals = document.createElement("option")
        select.classList.add("example1_select_seek")
        more.value = "more"
        more.innerHTML = ">="
        less.value = "less"
        less.innerHTML = "<="
        equals.value = "equals"
        equals.innerHTML = "="

        select.appendChild(less)
        select.appendChild(more)
        select.appendChild(equals)
        th.appendChild(select)
        tr.appendChild(th)

        document.getElementsByClassName('second_step__seeks')[0].appendChild(tr)
    }
}

function CreateTableSecondStapLimit(row)
{
    document.getElementsByClassName('second_step__borders')[0].remove()

    let table = document.createElement("table")
    table.className = "second_step__borders"
    second_step.appendChild(table)

    for (let i = 0; i < row; i++)
    {
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        let input = document.createElement("input")
        input.classList.add("example1_input_storage")
        input.value = datelimit[i]

        th.appendChild(input)
        tr.appendChild(th)

        document.getElementsByClassName('second_step__borders')[0].appendChild(tr)
    }
}

function CreateTableSecondStapFunction(column)
{
    document.getElementsByClassName('second_step__function')[0].remove()

    let table = document.createElement("table")
    table.className = "second_step__function"
    second_step.appendChild(table)

    for (let i = 0; i < column; i++)
    {
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        let input = document.createElement("input")
        input.classList.add("example2_input_requirement")
        input.value = datefunction[i]

        th.appendChild(input)
        tr.appendChild(th)

        document.getElementsByClassName('second_step__function')[0].appendChild(tr)
    }
    let arrow = document.createElement("p")
    arrow.innerHTML = "&#8594;"
    document.getElementsByClassName('second_step__function')[0].appendChild(arrow)

    let select = document.createElement("select")
    let optionmax = document.createElement("option")
    let optionmin = document.createElement("option")
    optionmax.value = "max"
    optionmax.innerHTML = "max"
    optionmin.value = "min"
    optionmin.innerHTML = "min"

    select.appendChild(optionmax)
    select.appendChild(optionmin)

    document.getElementsByClassName('second_step__function')[0].appendChild(select)
}

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