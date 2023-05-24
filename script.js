let nums = document.querySelectorAll(".num")
let screen = document.querySelector(".screen")
let operators = document.querySelectorAll(".operator")
let equal = document.querySelector(".equal")

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

        

        // console.log(`previous ${previousNum}`)
        // console.log(`current ${currentOperand}`)

    })
})


function updateScreen(){
   screen.textContent = screenUpdate
}

function calculate(){

    const previous = parseFloat(previousNum);
    const current = parseFloat(currentOperand);
    let result;

    // console.log(`previous ${previous}`)
    // console.log(`current ${current}`)

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
    // currentOperand = result.toString();
}


equal.addEventListener('click', function(){
    calculate()
    previousNum = null
    updateScreen()
})















// operators.forEach(function(operator){
//     operator.addEventListener('click', function(){
//         isClicked = true;
//         screen.textContent += operator.innerText

//         if (previousNum !== null && selectedOperator !== null && currentOperand !== "") {
//             calculate();
//         } 
//         selectedOperator = operator.innerText;
//         previousNum = currentOperand;
//         currentOperand = "";
//     })
// })






// function calculate() {
//     const previous = parseFloat(previousNum);
//     const current = parseFloat(currentOperand);
//     let result;
    
//     if (selectedOperator === "+") {
//       result = previous + current;
//     } else if (selectedOperator === "-") {
//       result = previous - current;
//     } else if (selectedOperator === "*") {
//       result = previous * current;
//     } else if (selectedOperator === "/") {
//       result = previous / current;
//     }
    
//     currentOperand = result.toString();
//     previousNum = null;
//     selectedOperator = null;
//     updateScreen();
// }
  
//   // Example usage
// updateScreen();
