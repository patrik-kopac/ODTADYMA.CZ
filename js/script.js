// ------HAMBURGER MENU--------

// tvorba premenných
const menuIcon = document.querySelector(`.menu-icon`)

const menuList = document.querySelector(`.nav`)

const hamburgerIcon = document.querySelector(".menu-icon .fa-solid")

// prepínanie classov z hamburger menu na krížik a naopak
menuIcon.addEventListener(`click`, () => {
    if (hamburgerIcon.classList[1] === "fa-bars") {
        hamburgerIcon.classList.toggle("fa-xmark")
        hamburgerIcon.classList.remove("fa-bars")
        menuList.style.display = "block";
    } else {
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-xmark");
        menuList.style.display = "none"
    }
})



// ZRUŠENIE SCROLL OKNA S PAYMENTS INFOM

// tvorba premenných 

const payments = document.querySelector(`.payments`)

const paymentsClose = document.querySelector(`.payments-close`)

// preklik na krížik a zmiznutie celého scroll okna

paymentsClose.addEventListener(`click`, () => {
    paymentsClose.style.display = "none";
    payments.style.display = "none";
} )



// ZRUŠENIE VRCHNÉHO OKNA S OBJEDNAVKOVYM INFOM

// tvorba premenných 

const payments = document.querySelector(`.payments`)

const paymentsClose = document.querySelector(`.payments-close`)

// preklik na krížik a zmiznutie celého scroll okna

paymentsClose.addEventListener(`click`, () => {
    paymentsClose.style.display = "none";
    payments.style.display = "none";
} )