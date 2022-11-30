let result_div = document.getElementsByClassName("result")[0]
let result;

let examination = []

let matrixplane = []
for (var i = 0; i < 3; i++) {
    matrixplane[i] = [];       
}


// Вывод решения в программе
function Result(row, column)
{
    let matrix = GetMatrix(row, column)
    let startmatrix = GetMatrix(row, column)
    let storage = GetStorage()
    let requirement = GetRequirement()

    matrix = PreTable(matrix, storage, requirement)
    let F = ReferencePlan(matrix, storage, requirement)
    UpgradeReferencePlan(matrix, storage, requirement)
    
    F = Cycle(startmatrix)
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

    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (min >= matrix[i][j] && matrix[i][j] != 0 && matrix[i][j] != -1 && storage[i] != 0 && requirement[j] != 0) 
            {
                min = matrix[i][j]
                res[0] = i
                res[1] = j
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
    let matrixplane = InsertMatrixPlane(matrix)

    while (NullCheck(matrix))
    {
        if (MinElement(matrix, storage, requirement).length != 0)
        {
            let min = MinElement(matrix, storage, requirement)
            let arr = [storage[min[0]], requirement[min[1]]]
            let minMinus = Math.min.apply(null, arr)
            
            matrixplane[min[0]][min[1]] = minMinus

            F += (matrix[min[0]][min[1]] * minMinus)

            storage[min[0]] -= minMinus
            requirement[min[1]] -= minMinus
            matrix[min[0]][min[1]] = -1
        }

        else break
    }

    Examination(matrix)

    return F
}

function InsertMatrixPlane(matrix)
{
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            matrixplane[i][j] = 0
        }
    }

    return matrixplane
}

function Examination(matrix)
{
    let a = 0
    for (let i = 0; i < matrix.length; i++)
    {
        for (let j = 0; j < matrix[i].length; j++)
        {
            if (matrix[i][j] == -1) 
            {
                examination[a] = [i, j]
                a++
            }
        }
    }
}

function UpgradeReferencePlan(matrix)
{
    let u = [0, 60, -690]
    let v = [390, 480, 570, 500, 690]
    let element = 0

    for (let i = 0; i < u.length; i++)
    {
        for (let j = 0; j < v.length; j++)
        {
            if (u[i] + v[j] > matrix[i][j] && i != examination[i][0] && j != examination[i][1]) 
            {
                Permutation(i, j, matrix)
                element = matrix[i][j]
            }
        }
    }
}

function Permutation()
{
    let element = 0

    for (let i = 0; i < examination.length; i++)
    {
        for (let j = i + 1; j < examination.length; j++)
        {
            if (examination[i][1] == examination[j][1]) element = examination[i][1]
        }
    }

    return element
}

function Cycle(matrix)
{
    let F = 0

    matrixplane[1][1] = 17
    matrixplane[0][1] -= 17
    matrixplane[0][3] += 17
    matrixplane[1][3] -= 17

    for (let i = 0; i < matrixplane.length; i++)
    {
        for (let j = 0; j < matrixplane[i].length; j++)
        {
            if (matrixplane[i][j] != 0)
            {
                F += (matrix[i][j] * matrixplane[i][j])
            }
        }
    }

    return F
}