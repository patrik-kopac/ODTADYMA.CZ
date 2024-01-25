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

// ---------ZVACSENIE A ZMENSENIE FOTO-----------

// tvorba premenných
const iBedynky = document.querySelector(`.i-bedynky`)
const iBezobal = document.querySelector(`.i-bezobal`)
const iPlneBedynky = document.querySelector(`.i-plne-bedynky`)
const iKoreni = document.querySelector(`.i-koreni`)
const iBezobal2 = document.querySelector(`.i-bezobal2`)
const iLeco = document.querySelector(`.i-leco`)
const iKreta = document.querySelector(`.i-kreta`)
const iChilli = document.querySelector(`.i-chilli`)
const iZelovoc = document.querySelector(`.i-zelovoc`)
const iMouky = document.querySelector(`.i-mouky`)
const iKrev = document.querySelector(`.i-krev`)
const iSyry = document.querySelector(`.i-syry`)
const iVchod = document.querySelector(`.i-vchod`)
const iPristup = document.querySelector(`.i-pristup`)
const iKont1 = document.querySelector(`.i-kont1`)
const iKont2 = document.querySelector(`.i-kont2`)
const iGift1 = document.querySelector(`.i-gift1`)
const iGift2 = document.querySelector(`.i-gift2`)
const iGift3 = document.querySelector(`.i-gift3`)

const imgBedynky = document.querySelector(`.img-bedynky`)
const imgBezobal = document.querySelector(`.img-bezobal`)
const imgPlneBedynky = document.querySelector(`.img-plne-bedynky`)
const imgKoreni = document.querySelector(`.img-koreni`)
const imgBezobal2 = document.querySelector(`.img-bezobal2`)
const imgLeco = document.querySelector(`.img-leco`)
const imgKreta = document.querySelector(`.img-kreta`)
const imgChilli = document.querySelector(`.img-chilli`)
const imgZelovoc = document.querySelector(`.img-zelovoc`)
const imgMouky = document.querySelector(`.img-mouky`)
const imgKrev = document.querySelector(`.img-krev`)
const imgSyry = document.querySelector(`.img-syry`)
const imgVchod = document.querySelector(`.img-vchod`)
const imgPristup = document.querySelector(`.img-pristup`)
const imgKont1 = document.querySelector(`.img-kont1`)
const imgKont2 = document.querySelector(`.img-kont2`)
const imgGift1 = document.querySelector(`.img-gift1`)
const imgGift2 = document.querySelector(`.img-gift2`)
const imgGift3 = document.querySelector(`.img-gift3`)

const gallery = document.querySelector(`.picture-gallery`)

const x = document.querySelector(`.fa-xmark`)

// funkcia na zatvorenie okna
x.addEventListener(`click`, () => {
    gallery.style.display = "none";
    iBedynky.style.display = "none";
    iBezobal.style.display = "none";
    iPlneBedynky.style.display = "none";
    iKoreni.style.display = "none";
    iBezobal2.style.display = "none";
    iLeco.style.display = "none";
    iKreta.style.display = "none";
    iChilli.style.display = "none";
    iZelovoc.style.display = "none";
    iMouky.style.display = "none";
    iKrev.style.display = "none";
    iSyry.style.display = "none";
    iVchod.style.display = "none";
    iPristup.style.display = "none";
    iKont1.style.display = "none";
    iKont2.style.display = "none";
    iGift2.style.display = "none";
    iGift3.style.display = "none";
} )

// funkcia na zobrazenie vo väčšom móde
const PictureChange = (picture, biggerPicture) => {
    picture.addEventListener(`click`, () => {
        gallery.style.display = "block";
        biggerPicture.style.display = "block";
    })
}

PictureChange(imgBedynky, iBedynky);
PictureChange(imgBezobal, iBezobal);
PictureChange(imgPlneBedynky, iPlneBedynky);
PictureChange(imgKoreni, iKoreni);
PictureChange(imgBezobal2, iBezobal2);
PictureChange(imgLeco, iLeco);
PictureChange(imgKreta, iKreta);
PictureChange(imgChilli, iChilli);
PictureChange(imgZelovoc, iZelovoc);
PictureChange(imgMouky, iMouky);
PictureChange(imgKrev, iKrev);
PictureChange(imgSyry, iSyry);
PictureChange(imgPristup, iPristup);
PictureChange(imgVchod, iVchod);
PictureChange(imgGift1, iGift1);
PictureChange(imgGift2, iGift2);
PictureChange(imgGift3, iGift3);

imgKont1.addEventListener(`click`, () => {
    gallery.style.display = "inline-block";
    iKont1.style.display = "block";
})

imgKont2.addEventListener(`click`, () => {
    gallery.style.display = "inline-block";
    iKont2.style.display = "block";
})