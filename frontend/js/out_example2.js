let result_div = document.getElementsByClassName("result")[0]
let result;

let examination = []

// Вывод решения в программе
function Result(row, column)
{
    let matrix = GetMatrix(row, column)
    let storage = GetStorage()
    let requirement = GetRequirement()

    matrix = PreTable(matrix, storage, requirement)
    let F = ReferencePlan(matrix, storage, requirement)
    console.log(F)
}

// Составить матрицу данных по матрице тарифов
function GetMatrix(row, column)
{
    let input = document.getElementsByClassName("example2_input_matrix")
    let array = [];
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

// Составить массив по запасам
function GetStorage()
{
    let input = document.getElementsByClassName("example2_input_storage")
    let array = [];

    for (let i = 0; i < input.length; i++)
    {
        array[i] = Number(input[i].value)
    }

    return array
}

// Составить массив по потребностям
function GetRequirement()
{
    let input = document.getElementsByClassName("example2_input_requirement")
    let array = [];

    for (let i = 0; i < input.length; i++)
    {
        array[i] = Number(input[i].value)
    }

    return array
}

// Составление оптимальной таблицы
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

        for (let i = 0; i < matrix[0].length; i++)
        {
            pre[i] = 0
        }
        storage[matrix.length] = sum_requirement - sum_storage

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

// Поиск минимального эллемента в матрице
function MinElement(matrix, storage, requirement)
{
    let min = MaxElement(matrix);
    let res = []
    let a = 0

    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (min >= matrix[i][j] && matrix[i][j] != 0 && matrix[i][j] != -1 && storage[i] != 0 && requirement[j] != 0) 
            {
                min = matrix[i][j]
                res[0] = i
                res[1] = j

                examination[a] = res
                a++
            }
        }
    }

    return res
}

function MaxElement(matrix)
{
    let max = 0

    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (max < matrix[i][j]) max = matrix[i][j]
        }
    }

    return max
}

function NullCheck(matrix)
{
    let res = true
    let preres = true

    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (matrix[i][j] <= 0 && !preres) preres = true

            else preres = false
        }
    }

   if (preres) res == false

   return res
}

function ReferencePlan(matrix, storage, requirement)
{
    let F = 0

    while (NullCheck(matrix))
    {
        if (MinElement(matrix, storage, requirement).length != 0)
        {
            let min = MinElement(matrix, storage, requirement)
            let arr = [storage[min[0]], requirement[min[1]]]
            let minMinus = Math.min.apply(null, arr)

            F += (matrix[min[0]][min[1]] * minMinus)

            storage[min[0]] -= minMinus
            requirement[min[1]] -= minMinus
            matrix[min[0]][min[1]] = -1
        }

        else break
    }

    return F
}

function UpgradeReferencePlan(matrix, storage, requirement)
{
    let u = []
    let v = []

    u[0] = 0

    for (let i = 0; i < storage.length; i++)
    {
        for (let j = 0; j < requirement.length; j++)
        {
            if (i == 0)
            {
                v[j] = matrix[examination[i]][examination[j]]
            }
            
            else if (examination[i]  == [])
        }
    }
}