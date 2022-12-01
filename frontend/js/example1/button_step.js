class Step
{
    #steps = [first_step, second_step, third_step]
    #step = 0

    constructor (step)
    {
        this.#step = step 
    }

    Next()
    {
        this.#step++

        if (this.#step == 1) 
        {
            row_count = document.getElementsByClassName("row_count")[0]
            column_count = document.getElementsByClassName("column_count")[0]

            CreateTableSecondStap(row_count.options[row_count.selectedIndex].text, 
                                  column_count.options[column_count.selectedIndex].text)
            CreateTableSecondStapSeeks(row_count.options[row_count.selectedIndex].text)
            CreateTableSecondStapLimit(row_count.options[row_count.selectedIndex].text)
            CreateTableSecondStapFunction(column_count.options[column_count.selectedIndex].text)
        }
        else if (this.#step == 2)
        {
            let input = document.querySelectorAll("input")
            let valid = true;

            for(let i = 0; i < input.length; i++)
            {
                if (!Number(input[i].value) || Number(input[i].value) <= 0)
                {
                    error_log = new Error("Введены неправильные данные!")
                    valid = false
                }
            }

            if (!valid) this.#step--
            
            // else Result(Number(row_count.options[row_count.selectedIndex].text), 
            //             Number(column_count.options[column_count.selectedIndex].text))
        }
        else if (this.#step >= 3)
        {
            error_log = new Error("Задача уже решена")
            this.#step--
        }

        this.#steps[this.#step - 1].classList.remove(this.#steps[this.#step - 1].classList[0] + "_active")
        this.#steps[this.#step].classList.add(this.#steps[this.#step].classList[0] + "_active")

        return this.#step
    }

    Back()
    {
        if (this.#step <= 0)
        {
            error_log = new Error("Вы ещё не прошли дальше, чтобы вернуться назад")
        }
        else
        {
            this.#step--

            this.#steps[this.#step].classList.add(this.#steps[this.#step].classList[0] + "_active")
            this.#steps[this.#step + 1].classList.remove(this.#steps[this.#step + 1].classList[0] + "_active")
        }

        return this.#step
    }
}
