import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumsDatabase.js";
applyInputRangeStyle()
function createCard(lista){
    const albumDiv = document.querySelector(".album__div")
    for(let i=0; i<lista.length; i++){
        console.log(lista[i].title);
        console.log(lista[i].genre);
        console.log(lista[i].band);
        console.log(lista[i].price);
        console.log(lista[i].img);
        const divJs = document.createElement("div");
        const imgJs = document.createElement("img");
        const h3Js = document.createElement("h3");
        const divJsD = document.createElement("div");
        const pJsN = document.createElement("p");
        const pJsT = document.createElement("p");
        const divjsD2 = document.createElement("div");
        const pJsP = document.createElement("p");
        const buttonJs = document.createElement("button");
        
        divJs.classList.add("album__item");
        h3Js.classList.add("albums__titles");
        h3Js.classList.add("h3-L");
        divJsD.classList.add("albums__description");
        pJsN.classList.add("album__names-L");
        pJsT.classList.add("album__types-L");
        divjsD2.classList.add("albums__description");
        pJsP.classList.add("album__p-L");
        buttonJs.classList.add("album__button-L");
        
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
        
        divJs.appendChild(imgJs);
        divJs.appendChild(h3Js);
        divJs.appendChild(divJsD);
        divJs.appendChild(divjsD2);
        
        albumDiv.appendChild(divJs)
    }
}
createCard(albumList)