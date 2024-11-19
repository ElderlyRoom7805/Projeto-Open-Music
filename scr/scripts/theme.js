export function darkOrLightMode(){
    const buttonChange = document.querySelector(".header__change");

    function themeChange(){
        const bodyDark = document.querySelector(".body-L");
        bodyDark.classList.toggle("body-D");
        
        const headDark = document.querySelector(".head-L");
        headDark.classList.toggle("head-D");
        
        const h1Dark = document.querySelector(".header__h1-L");
        h1Dark.classList.toggle("header__h1-D");
        
        const spanDark = document.querySelector(".span-L");
        spanDark.classList.toggle("span-D");
        
        const changeDark = document.querySelector(".L");
        changeDark.classList.toggle("D");
        
        const divNamesDark = document.querySelectorAll(".div__names-L");
        for(let i=0; i<divNamesDark.length; i++){
            divNamesDark[i].classList.toggle("div__names-D");
        }
        
        const h2Genre = document.querySelectorAll(".h2-L");
        for(let i=0; i<h2Genre.length; i++){
            h2Genre[i].classList.toggle("h2-D");
        }
        
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
    };
    let darkMode = false;

    function localStorageChanged() {
        darkMode = JSON.parse(localStorage.getItem("@openMusic:theme"));
        if(darkMode){
            return themeChange();
        }
    };

    buttonChange.addEventListener("click", function(e){
        darkMode = !darkMode;
        localStorage.setItem("@openMusic:theme", JSON.stringify(darkMode));
        themeChange();
    });
    localStorageChanged();
}