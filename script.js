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

//The next stuff to do is to update the equal to function and convert the result to a string and update the screen upate with it

nums.forEach(function (num) {
    num.addEventListener('click', function() {
        let clickedNum = num.innerText
        
        if(screenUpdate.indexOf(previousNum) === 0 && selectedOperator === ""){
            
            screenUpdate += clickedNum
            previousNum += clickedNum
            console.log('okay')
            updateScreen()
        }else{
            currentOperand += clickedNum
            screenUpdate += clickedNum
            // console.log(`${result} ${selectedOperator} ${currentOperand}`)
            updateScreen()
        }
    });
});

//This do has an issue, it only appends to the current operand and not previous. Fix this.
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

        if(previousNum !== null && currentOperand !== "" && selectedOperator !== "" ){
            calculate()
            selectedOperator = operator.innerText
            screenUpdate += ` ${operator.innerText}`
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
        //This is when you do and equal to and want to perform another operation with the result
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
        currentOperand = result.toString()
    }else if(selectedOperator === "-"){
        result = previous - current
        screenUpdate = result
        equalCurrent = currentOperand
        currentOperand = result.toString()
    }else if(selectedOperator === "*"){
        result = previous * current
        screenUpdate = result
        equalCurrent = currentOperand
        currentOperand = result.toString()
    }else if(selectedOperator === "/"){
        result = previous / current
        screenUpdate = result
        equalCurrent = currentOperand
        currentOperand = result.toString()
    }
}

equal.addEventListener('click', function(){
    equalCurr = parseFloat(equalCurrent);
    //The commented code below is a functionality to make the calculate function run when clicked on multiple times
    // if(currentOperand !== "" && previousNum === null && selectedOperator === "+"){
    //     result = result += equalCurr
    //     screenUpdate = result
    //     currentOperand = result.toString()
    //     updateScreen()
    // }else if(currentOperand !== "" && previousNum === null && selectedOperator === "-"){
    //     result = result -= equalCurr
    //     screenUpdate = result
    //     currentOperand = result.toString()
    //     updateScreen()
    // }else if(currentOperand !== "" && previousNum === null && selectedOperator === "/"){
    //     result = result /= equalCurr
    //     screenUpdate = result
    //     currentOperand = result.toString()
    //     updateScreen()
    // }else if(currentOperand !== "" && previousNum === null && selectedOperator === "*"){
    //     result = result *= equalCurr
    //     screenUpdate = result
    //     currentOperand = result.toString()
    //     updateScreen()
    // }
    
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

// function check(){
//     console.log(`pre:${previousNum} op:${selectedOperator} cu:${currentOperand}`)
//     console.log(screenUpdate)
// }

del.addEventListener('click', function(){
    if(currentOperand !== "" &&  previousNum !== null && selectedOperator !== ""){
        currentOperand = currentOperand.slice(0, -1)
        screenUpdate = `${previousNum} ${selectedOperator} ${currentOperand}`
        updateScreen()
    }else if(previousNum !== null && selectedOperator !== "" && currentOperand === ""){
        selectedOperator = selectedOperator.slice(0, -1)
        screenUpdate = `${previousNum}`
        updateScreen()
    }else if(selectedOperator === "" && currentOperand === ""){
        previousNum = previousNum.slice(0, -1)
        screenUpdate = `${previousNum}`
        updateScreen()
    }else if( currentOperand !== "" && previousNum === null && selectedOperator === ""){
        currentOperand = currentOperand.slice(0, -1)
        screenUpdate = `${currentOperand}`
        updateScreen()
    }else if(previousNum === null && selectedOperator !== "" && currentOperand !== ""){
        currentOperand = currentOperand.slice(0, -1)
        screenUpdate = `${currentOperand}`
        updateScreen()
    }
    else{
        return;
    }
})