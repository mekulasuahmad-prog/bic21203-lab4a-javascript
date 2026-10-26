const result = document.getElementById("result")

function checkInput(){
    let value = userInput.value.trim();
    let number = Number(value);

    if(value ==="" || !Number.isFinite(number)){
        result.textContent = "Please enter a valid number!";

    }

    else if (number < 10){
        result.textContent = "The number is lower than 10";


    }

    else if (number > 10){
        result.textContent = "The number is higher than 10";


    }

    else {
        result.textContent = "The number is equal to  10";


    }
}

checkBtn.addEventListener("click", checkInput);