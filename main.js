let inputs = document.querySelectorAll("input");
let cardHolder = document.querySelector("input#card-holder");
let nameOnCard = document.querySelector("p.owner-name");
let cardNumber = document.querySelector("input#card-number");
let numberOnCard = document.querySelector("p.card-number");
let monthIn = document.querySelector("input#month");
let yearIn = document.querySelector("input#year");
let monthOnCard = document.querySelector(".exp-date span.month");
let yearOnCard = document.querySelector(".exp-date span.year");
let cvcIn = document.querySelector("input#cvc");
let cvcOnCard = document.querySelector(".back-card p.cvc");
let conf = document.querySelector("input.confirm");
let form = document.querySelector("form");
let complete = document.querySelector("div.thank-u")
let cont = document.querySelector("button.continue");
let history = new Date();
cardNumber.maxLength = "19";
cvcIn.maxLength = "3";
monthIn.maxLength = "2";
yearIn.maxLength = "2";

let regex = /\d{4}\s\d{4}\s\d{4}\s\d{4}/g;

document.addEventListener('focusin', inp => {
    if (inp.target.classList.contains("input") === true) {
        inp.target.style.cssText = "border-width: 2px; border-image: linear-gradient(45deg, hsl(249, 99%, 64%) , hsl(278, 94%, 30%)) 1;"
    }
})



// No errors happen here
cardHolder.addEventListener('focusout', (e) => {
    nameOnCard.innerHTML = e.target.value;
    e.target.style.cssText = "border: 1px solid var(--Light-grayish-violet);"
})

// addEventListener('cuechange')

// May Enter Letters (Error)
let number, mon, year, cv, error1, error2, error3, error4;
cardNumber.addEventListener('focusout', (e) => {
    number = e.target.value;
    if (regex.test(number) === true) {
        numberOnCard.innerHTML = number;
        document.querySelector("p.card-num-error").style.visibility = "hidden";
        e.target.style.cssText = "border: 1px solid var(--Light-grayish-violet);"
        error1 = false;
    } else {
        e.target.style.cssText = "border: 1px solid var(--Red);"
        numberOnCard.innerHTML = "0000 0000 0000 0000";
        document.querySelector("p.card-num-error").style.visibility = "visible";
        error1 = true;
    }
})

// can't be empty && not more than 12 && no letters 

monthIn.addEventListener('focusout', (e) => {
    mon = e.target.value;
    if (mon !== "" && (!(mon[0] >= 'a') && !(mon[0] >= 'z')) && (!(mon[0] >= 'A') && !(mon[0] >= 'Z')) && (!(mon[1] >= 'a') && !(mon[1] >= 'z')) && (!(mon[1] >= 'A') && !(mon[1] >= 'Z')) && parseInt(mon) <= 12 && parseInt(mon) >= 1) {
        monthOnCard.innerHTML = mon;
        document.querySelector("p.empty-date-error").style.visibility = "hidden";
        e.target.style.cssText = "border: 1px solid var(--Light-grayish-violet);"
        error2 = false;
    } else {
        e.target.style.cssText = "border: 1px solid var(--Red);";
        monthOnCard.innerHTML = "00";
        document.querySelector("p.empty-date-error").style.visibility = "visible";
        error2 = true;

    }
})

// may be empty, may be previous year 
yearIn.addEventListener('focusout', (e) => {
    year = e.target.value;
    if (year !== "" && (!(year[0] >= 'a') && !(year[0] >= 'z')) && (!(year[0] >= 'A') && !(year[0] >= 'Z')) && (!(year[1] >= 'a') && !(year[1] >= 'z')) && (!(year[1] >= 'A') && !(year[1] >= 'Z')) && parseInt(year) >= history.getFullYear() - 2000) {
        yearOnCard.innerHTML = year;
        document.querySelector("p.empty-date-error").style.visibility = "hidden";
        e.target.style.cssText = "border: 1px solid var(--Light-grayish-violet);"
        error3 = false;
    } else {
        e.target.style.cssText = "border: 1px solid var(--Red);";
        yearOnCard.innerHTML = "00";
        document.querySelector("p.empty-date-error").style.visibility = "visible";
        error3 = true;

    }

})


// can't be empty and no letters 
cvcIn.addEventListener('focusout', (e) => {
    cv = e.target.value;
    if (cv !== "" && cv.length == 3 && (!(cv[0] >= 'a') && !(cv[0] >= 'z')) && (!(cv[0] >= 'A') && !(cv[0] >= 'Z')) && (!(cv[1] >= 'a') && !(cv[1] >= 'z')) && (!(cv[1] >= 'A') && !(cv[1] >= 'Z')) && (!(cv[2] >= 'a') && !(cv[2] >= 'z')) && (!(cv[2] >= 'A') && !(cv[2] >= 'Z'))) {
        cvcOnCard.innerHTML = cv;
        document.querySelector("p.empty-cvc-error").style.visibility = "hidden";
        e.target.style.cssText = "border: 1px solid var(--Light-grayish-violet);"
        error4 = false;
    } else {
        e.target.style.cssText = "border: 1px solid var(--Red);";
        cvcOnCard.innerHTML = "000";
        document.querySelector("p.empty-cvc-error").style.visibility = "visible";
        error4 = true;

    }

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (error1 === false && error2 === false && error3 === false && error4 === false && cardHolder.value !== "") {
        form.style.display = "none";
        complete.style.display = "block"
    }
})

cont.addEventListener('click', () => {
    window.location.reload();
})

