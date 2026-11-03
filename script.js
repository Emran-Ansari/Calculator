
const expressionContainer = document.querySelector('main>section>h3')
const resultContainer = document.querySelector('main>section>h2')
const calculatorBTNS = document.querySelectorAll('main>article>h3')

let expression = ''
let result = ''

calculatorBTNS.forEach((element) => {
    element.addEventListener('click', () => {
        let content = element.innerHTML
        if (content == 'C') {
            expression = ''
            result = ''
            expressionContainer.innerHTML = expression
            resultContainer.innerHTML = result
        }
        else if (content == 'CE') {
            expression = expression.slice(0, -1)
            expressionContainer.innerHTML = expression
        }
        else if (content == '🔙') {
            expression = expression.slice(0, -1)
            expressionContainer.innerHTML = expression
        }
        else if (content == 'X') {
            expression = expression + '*'
            expressionContainer.innerHTML = expression
        }
        else if (content == '=') {
            result = eval(expression)
            resultContainer.innerHTML = result

        }
        else if (content == '✔') {

        }
        else {
            expression = expression + element.innerHTML
            expressionContainer.innerHTML = expression
        }
    })
})