let nums = document.querySelectorAll(".num")
let screen = document.querySelector(".screen")
let operators = document.querySelectorAll(".operator")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
let dot = document.querySelector(".dot")

let currentOperand = "";
let selectedOperator = null;
let previousNum = null;
let screenUpdate = ""



nums.forEach(function (num) {
    num.addEventListener('click', function() {
        let clickedNum = num.innerText
        currentOperand += clickedNum
        screenUpdate += clickedNum
        updateScreen()
        
    });
});

dot.addEventListener('click', function(){
    if(currentOperand.includes('.')){
        return
    }else{
        currentOperand += dot.textContent
        screenUpdate += dot.textContent
        updateScreen()
    }
})


operators.forEach(function(operator){
    operator.addEventListener('click', function(){
        

        if(currentOperand === "" && previousNum === null && selectedOperator !== "+"){
            return
        }
        
        console.log('food')

        if(previousNum !== null && currentOperand !== "" && selectedOperator !== null ){
            calculate()
            selectedOperator = operator.innerText
            screenUpdate += ` ${operator.innerText} `
            updateScreen()
            previousNum = currentOperand;
            currentOperand = "";
        }
        if(previousNum === null && selectedOperator === selectedOperator && currentOperand !== "" ){
            screenUpdate += ` ${operator.innerText} `
            selectedOperator = operator.innerText
            updateScreen()
            previousNum = currentOperand;
            currentOperand = "";
            
        }else{
            return
        }

    })
})


function updateScreen(){
   screen.textContent = screenUpdate
}

function calculate(){

    const previous = parseFloat(previousNum);
    const current = parseFloat(currentOperand);
    let result;

    if (selectedOperator === "+"){
        result = previous + current
        screenUpdate = result
        currentOperand = result
    }else if(selectedOperator === "-"){
        result = previous - current
        screenUpdate = result
        currentOperand = result
    }else if(selectedOperator === "*"){
        result = previous * current
        screenUpdate = result
        currentOperand = result
    }else if(selectedOperator === "/"){
        result = previous / current
        screenUpdate = result
        currentOperand = result
    }
    
}


equal.addEventListener('click', function(){
    if(previousNum !== null && currentOperand !== "" && selectedOperator !== null){
        calculate()
        previousNum = null
        updateScreen()
    }
})

clear.addEventListener('click', function(){
    currentOperand = "";
    selectedOperator = null;
    previousNum = null;
    screenUpdate = ''
    updateScreen()
})