import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumsDatabase.js";
import { darkOrLightMode } from "./theme.js";
applyInputRangeStyle()
const albumDiv = document.querySelector(".album__div");
function removeLi() {
    let li = document.getElementsByClassName("album__item");
    let liLength = li.length;
    for(let i=0; i<liLength; i++){
        albumDiv.removeChild(li[0]);
    }
} 
removeLi()
function createCard(lista){
    for(let i=0; i<lista.length; i++){
        const liJs = document.createElement("li");
        const imgJs = document.createElement("img");
        const h3Js = document.createElement("h3");
        const divJsD = document.createElement("div");
        const pJsN = document.createElement("p");
        const pJsT = document.createElement("p");
        const divjsD2 = document.createElement("div");
        const pJsP = document.createElement("p");
        const buttonJs = document.createElement("button");
        
        
        liJs.classList.add("album__item");
        h3Js.classList.add("h3-L");
        pJsN.classList.add("album__names-L");
        pJsT.classList.add("album__types-L");
        pJsP.classList.add("album__p-L");
        buttonJs.classList.add("album__button-L");
        h3Js.classList.add("albums__titles");
        divJsD.classList.add("albums__description");
        divjsD2.classList.add("albums__description");
        
        imgJs.src = lista[i].img;
        h3Js.innerText = lista[i].title;
        pJsN.innerText = lista[i].band;
        pJsT.innerText = lista[i].genre;
        pJsP.innerText = lista[i].price;
        buttonJs.innerText = "Comprar";
        
        divJsD.appendChild(pJsN);
        divJsD.appendChild(pJsT);
        divjsD2.appendChild(pJsP);
        divjsD2.appendChild(buttonJs);
        
        liJs.appendChild(imgJs);
        liJs.appendChild(h3Js);
        liJs.appendChild(divJsD);
        liJs.appendChild(divjsD2);
        
        albumDiv.appendChild(liJs)
    }
}

createCard(albumList);

const buttonAll = document.querySelector("#todos");
const buttonPop = document.querySelector("#pop");
const buttonMPB = document.querySelector("#mpb");
const buttonForro = document.querySelector("#forro");
const buttonSamba = document.querySelector("#samba");
const buttonBaiao = document.querySelector("#baiao");
const buttonRap = document.querySelector("#rap");
const buttonHipHop = document.querySelector("#hiphop");
function createFilterListbyGenres(list, valorInput) {
    removeLi()
    const valorMinuscula = valorInput.toLowerCase();
    const filterList = list.filter((element, index) => {
        const elementMenor = element.genre.toLowerCase();
        const input = elementMenor.includes(valorMinuscula);
        console.log(input)
        return input
    })
    createCard(filterList)
}
buttonPop.addEventListener("click", function (e) {
    createFilterListbyGenres(albumList, "pop");
    verificaCorDeCriacao()
})
buttonMPB.addEventListener("click", function (e) {
    createFilterListbyGenres(albumList, "MPB")
    verificaCorDeCriacao()
})
buttonForro.addEventListener("click", function (e) {
    createFilterListbyGenres(albumList, "Forro")
    verificaCorDeCriacao()
})
buttonSamba.addEventListener("click", function (e) {
    createFilterListbyGenres(albumList, "Samba")
    verificaCorDeCriacao()
})
buttonBaiao.addEventListener("click", function (e) {
    createFilterListbyGenres(albumList, "Baiao")
    verificaCorDeCriacao()
})
buttonRap.addEventListener("click", function (e) {
    createFilterListbyGenres(albumList, "Rap")
    verificaCorDeCriacao()
})
buttonHipHop.addEventListener("click", function (e) {
    createFilterListbyGenres(albumList, "Hip-Hop")
    verificaCorDeCriacao()
})
buttonAll.addEventListener("click", function (e) {
    removeLi();
    createCard(albumList);
    verificaCorDeCriacao()
})

const inputRange = document.getElementById("input-range");
let inputValue = document.getElementById("input-value");

function createFilterListByPrice(list) {
    removeLi()
    let inputValueNow = inputRange.value;
    const filterList = list.filter((element, index) => {
        let elementPrice = element.price;
        let elementFixed = parseInt(elementPrice);
        return elementFixed <= inputValueNow
    })
    createCard(filterList);
    
}
inputRange.addEventListener("input", (e) => {
    inputValue.innerText = inputRange.value;
    createFilterListByPrice(albumList)
})

function verificaCorDeCriacao() {
    let darkVerificacao = JSON.parse(localStorage.getItem("@openMusic:theme"))
    console.log(darkVerificacao)
    if (darkVerificacao) {
        const albumItem = document.querySelectorAll(".album__item");
        for(let i=0; i<albumItem.length; i++){
            albumItem[i].classList.toggle("album__item-D");
        }
        const h3Album = document.querySelectorAll(".h3-L");
        for(let i= 0; i<h3Album.length; i++){
            h3Album[i].classList.toggle("h3-D");
        }
        const namesAlbum = document.querySelectorAll(".album__names-L");
        for(let i= 0; i<namesAlbum.length; i++){
            namesAlbum[i].classList.toggle("album__names-D");
        }
        const typesAlbum = document.querySelectorAll(".album__types-L");
        for(let i= 0; i<typesAlbum.length; i++){
            typesAlbum[i].classList.toggle("album__types-D");
        }
        const pAlbum = document.querySelectorAll(".album__p-L");
        for(let i= 0; i<pAlbum.length; i++){
            pAlbum[i].classList.toggle("album__p-D");
        }
        const buttonAlbum = document.querySelectorAll(".album__button-L");
        for(let i= 0; i<buttonAlbum.length; i++){
            buttonAlbum[i].classList.toggle("album__button-D");
        }
        return console.log("precisou")
    } else {
        return console.log("não precisou")
    }
}
darkOrLightMode()