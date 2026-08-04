const display = document.getElementById("display");

let currentInput = "";

// Adiciona números
function appendNumber(number){

    currentInput += number;

    display.textContent = currentInput;
}

// Adiciona operadores
function appendOperator(operator){

    currentInput += operator;

    display.textContent = currentInput;
}

// Limpa tudo
function clearDisplay(){

    currentInput = "";

    display.textContent = "0";
}

// Calcula o resultado
function calculate(){

    try{

        let result = eval(currentInput);

        display.textContent = result;

        currentInput = result.toString();

    }

    catch{

        display.textContent = "Erro";

        currentInput = "";

    }

}