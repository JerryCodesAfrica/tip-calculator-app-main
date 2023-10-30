let billInput = document.querySelector("#bill");
let billPP = document.querySelector("#bill_pp");
let tips = document.getElementsByClassName("grid");
let result = document.querySelector(".result1");
let totalResult = document.querySelector(".result2");
let resetBtn = document.querySelector("#reset");

let viewport = document.querySelector(‘meta[name=viewport]’)
 viewport.setAttribute(‘content’, ‘width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0’);

//calculate the total tip amount

function tipValue(a) {
    let tipCalculator = a.value / 100 * billInput.value;

    let tipperPerson = tipCalculator / billPP.value;

    result.innerHTML = tipperPerson.toFixed(2);

    totalResult.innerHTML = tipCalculator.toFixed(2);
}

//validation

//Number of people
billPP.addEventListener("input", function () {
    let error = document.querySelector(".error_msg");

    if (parseInt(billPP.value) === 0) {
        billPP.style.border = "2px solid red";
        error.style.display = "block";
    } else {
        error.style.display = "none";
        billPP.style.border = "2px solid var(--Light-grayish-cyan)";
    }
});

//bills
billInput.addEventListener("input", function () {
    let oerror = document.querySelector(".error_msg1");

    if (parseInt(billInput.value) === 0) {
        billInput.style.border = "2px solid red";
        oerror.style.display = "block";
    } else {
        oerror.style.display = "none";
        billInput.style.border = "2px solid var(--Light-grayish-cyan)";
    }
});

//reset button

resetBtn.addEventListener("click", function () {
    //reset result section
    result.textContent = "0.00";
    totalResult.textContent = "0.00";
    //clear input fields
    billInput.value = "";
    billPP.value = "";
})

