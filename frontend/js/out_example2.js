let result_textarea = document.getElementById("result")
let result;


function Result(row, column)
{
    let matrix = GetMatrix(row, column)
    let storage = GetStorage()
    let requirement = GetRequirement()

    let a = SumA(storage)
    let b = SumB(requirement)
    let ab = ""
    if (a != b) ab = "не"

    result_textarea.value = 
    `
    Проверим необходимое и достаточное условие разрешимости задачи.

    a = ${a}
    b = ${b}

    Задача является ${ab} сбалансированной
    `
}

function GetMatrix(row, column)
{
    let input = document.getElementsByClassName("example2_input_matrix")
    let array = new Array(column);
    let a = 0

    for (let i = 0; i < row; i++)
    {
        array[i] = []

        for (let j = 0; j < column; j++)
        {
            array[i][j] = Number(input[a].value)
            a++
        }
    }

    return array
}

function GetStorage()
{
    let input = document.getElementsByClassName("example2_input_storage")
    let array = [];

    for (let i = 0; i < input.length; i++)
    {
        array.push(Number(input[i].value))
    }

    return array
}

function GetRequirement()
{
    let input = document.getElementsByClassName("example2_input_requirement")
    let array = [];

    for (let i = 0; i < input.length; i++)
    {
        array.push(Number(input[i].value))
    }

    return array
}

function SumA(storage)
{
    let sum = 0

    for (let i = 0; i < storage.length; i++)
    {
        sum += storage[i]
    }

    return sum;
}

function SumB(requirement)
{
    let sum = 0

    for (let i = 0; i < requirement.length; i++)
    {
        sum += requirement[i]
    }

    return sum;
}