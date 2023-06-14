let nums = document.querySelectorAll(".num")
let screen = document.querySelector(".screen")
let operators = document.querySelectorAll(".operator")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
let dot = document.querySelector(".dot")
let del = document.querySelector(".del")

let currentOperand = "";
let selectedOperator = "";
let previousNum = null;
let screenUpdate = ""
let equalCurrent;
let result;
let equalCurr;

nums.forEach(function (num) {
    num.addEventListener('click', function() {
        
        let clickedNum = num.innerText
        currentOperand += clickedNum
        screenUpdate += clickedNum
        // console.log(`${result} ${selectedOperator} ${currentOperand}`)
        updateScreen()
        console.log(currentOperand)
        
    });
});

dot.addEventListener('click', function(){
    
    let text = currentOperand.toString()
    console.log(text)

    if(text.includes('.')){
        return
    }else{
        currentOperand += dot.textContent
        screenUpdate += dot.textContent
        updateScreen()
    }
    
})

operators.forEach(function(operator){
    
    operator.addEventListener('click', function(){
        console.log(`${selectedOperator}  current:${currentOperand} previous:${previousNum}`)
        if(currentOperand === "" && previousNum === null && selectedOperator !== "+"){
            return
        }

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
        }
        if(selectedOperator === "" && previousNum !== null && currentOperand === ""){
            console.log('work')
            screenUpdate += ` ${operator.innerText} `
            selectedOperator = operator.innerText
            updateScreen()
        } else{
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

    if (selectedOperator === "+"){
        result = previous + current
        screenUpdate = result
        equalCurrent = currentOperand
        currentOperand = result
    }else if(selectedOperator === "-"){
        result = previous - current
        screenUpdate = result
        equalCurrent = currentOperand
        currentOperand = result
    }else if(selectedOperator === "*"){
        result = previous * current
        screenUpdate = result
        equalCurrent = currentOperand
        currentOperand = result
    }else if(selectedOperator === "/"){
        result = previous / current
        screenUpdate = result
        equalCurrent = currentOperand
        currentOperand = result
    }
}

equal.addEventListener('click', function(){
    equalCurr = parseFloat(equalCurrent);

    if(currentOperand !== "" && previousNum === null && selectedOperator === "+"){
        result = result += equalCurr
        screenUpdate = result
        currentOperand = result
        updateScreen()
    }else if(currentOperand !== "" && previousNum === null && selectedOperator === "-"){
        result = result -= equalCurr
        screenUpdate = result
        currentOperand = result
        updateScreen()
    }else if(currentOperand !== "" && previousNum === null && selectedOperator === "/"){
        result = result /= equalCurr
        screenUpdate = result
        currentOperand = result
        updateScreen()
    }else if(currentOperand !== "" && previousNum === null && selectedOperator === "*"){
        result = result *= equalCurr
        screenUpdate = result
        currentOperand = result
        updateScreen()
    }
    
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

function check(){
    console.log(`${previousNum} ${selectedOperator} ${currentOperand}`)
}

del.addEventListener('click', function(){
    // let toString = result.toString()
    // screenUpdate = screenUpdate.toString()
    // if(screenUpdate.lastIndexOf(previousNum) && selectedOperator === "" && currentOperand === null){
    //     console.log('lovve')
    // }
    if(currentOperand !== "" &&  previousNum !== null && selectedOperator !== ""){
        currentOperand = currentOperand.slice(0, -1)
        screenUpdate = `${previousNum} ${selectedOperator} ${currentOperand}`
        updateScreen()
    }else if(previousNum !== null && selectedOperator !== "" && currentOperand === ""){
        selectedOperator = selectedOperator.slice(0, -1)
        screenUpdate = `${previousNum} ${selectedOperator} ${currentOperand}`
        updateScreen()
    }else if(selectedOperator === "" && currentOperand === ""){
        previousNum = previousNum.slice(0, -1)
        screenUpdate = `${previousNum}`
        updateScreen()
    }else if( currentOperand !== "" && previousNum === null && selectedOperator === ""){
        currentOperand = currentOperand.slice(0, -1)
        screenUpdate = `${currentOperand}`
        updateScreen()
    }
    else{
        return
    }
    
    // if(result !== undefined){
    //     let toString = currentOpernd.toString()
    //     let resultString = result.toString()
    //     currentOperand = toString.slice(0, -1)
    //     result = resultString.slice(0, 1)
    //     equalCurr = result
    //     console.log(equalCurr)
    //     screenUpdate = currentOperand
    //     updateScreen()
    // }

    // if(previousNum !== null){
    //     numSlice = screenUpdate.slice(0, -1)
    //     previousNum = numSlice
    // }
})