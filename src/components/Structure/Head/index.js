import Head from "./Head";

const toggleMenuElement=document.getElementById('toggle-menu');
        const mainMenuElement=document.getElementById("main-menu");

        toggleMenuElement.addEventListener('click', ()=>{
            mainMenuElement.classList.toggle("main-menu--show");
        })

export default Head;