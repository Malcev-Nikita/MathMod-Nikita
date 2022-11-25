let result_div = document.getElementsByClassName("result")[0]
let result;


function Result(row, column)
{
    let matrix = GetMatrix(row, column)
    let storage = GetStorage()
    let requirement = GetRequirement()

    matrix = PreTable(matrix, storage, requirement)
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

function PreTable(matrix, storage, requirement)
{
    let sum_storage = 0
    let sum_requirement = 0

    for (let i = 0; i < storage.length; i++)
    {
        sum_storage += storage[i]
    }

    for (let i = 0; i < requirement.length; i++)
    {
        sum_requirement += requirement[i]
    }


    if (sum_storage < sum_requirement)
    {
        let pre = []

        for (let i = 0; i < matrix.length; i++)
        {
            pre[i] = 0
        }
        storage[matrix[0].length] = sum_requirement - sum_storage

        matrix[matrix.length] = pre
    }
    else if (sum_storage > sum_requirement)
    {
        for (let i = 0; i < matrix.length; i++)
        {
            matrix[i][matrix[i].length] = 0
        }
        requirement[matrix[0].length] = sum_storage - sum_requirement 
    }

    return matrix
}

