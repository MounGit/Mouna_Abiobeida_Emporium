// NAVBAR SCROLL

let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.style.position = "relative"
        nav.firstElementChild.style.position = "absolute"
        nav.firstElementChild.style.left = "15px"
        nav.firstElementChild.style.width = "max-content"
    } else {
        nav.style.position = "relative"
        nav.firstElementChild.style.position = "relative"
    }


})


// MODE NUIT / JOUR

let btnNuit = document.querySelector("#nuit");

let btnJour = document.querySelector("#jour");
btnJour.style.boxShadow = "1px 1px 1px teal"

let h1 = document.querySelector("h1");

let tabH6 = Array.from(document.querySelectorAll("h6"));

let tabH3 = Array.from(document.querySelectorAll("h3"));

let tabLiNav = Array.from(document.querySelectorAll(".nav"));
console.log(tabLiNav)

console.log(tabH6)
btnNuit.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    nav.style.backgroundColor = "black";
    h1.style.color = "white"
    btnNuit.style.boxShadow = "1px 1px 1px teal"
    btnJour.style.boxShadow = "none"

    tabH6.forEach(element => {
        element.style.color = "white"
    });

    tabH3.forEach(element => {
        element.style.color = "white"
    });

    tabLiNav.forEach(element => {
        element.style.color = "white"
    });
});

btnJour.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    nav.style.backgroundColor = "white";
    h1.style.color = "black"
    btnJour.style.boxShadow = "1px 1px 1px teal"
    btnNuit.style.boxShadow = "none"
    tabH6.forEach(element => {
        element.style.color = "black"
    });

    tabH3.forEach(element => {
        element.style.color = "black"
    });

    tabLiNav.forEach(element => {
        element.style.color = "black"
    });
});


// HOVER
console.log(tabLiNav)
tabLiNav.forEach(element => {
    nav.addEventListener("mouseover", (e) => {
        if (e.target == element) {
            element.setAttribute("class", "hover");
        }
    })
});

tabLiNav.forEach(element => {
    nav.addEventListener("mouseout", (e) => {
        if (e.target == element) {
            element.removeAttribute("class");
        }
    })
});


// CONNEXION INSCRIPTION

let sectCo = document.querySelector(".sectCo")
let sectInscr = document.querySelector(".sectInscr")
let opacite = document.querySelector(".opacite")
console.log(sectInscr)

document.body.addEventListener("click", (e)=>{
    console.log(e.target)
    if(e.target.innerHTML == "CONNEXION"){
        sectCo.style.display = "flex"
        sectInscr.style.display = "none"
        opacite.style.display = "block"
    }else if (e.target.innerHTML == "INSCRIPTION"){
        sectInscr.style.display = "flex"
        sectCo.style.display = "none"
        opacite.style.display = "block"
    }else if(e.target.className == "fas fa-cross"){
        sectInscr.style.display = "none"
        sectCo.style.display = "none"
        opacite.style.display = "none"
    }

})