// GET ELEMENTS
const signup_right=document.getElementById("signup_right")
const show_categorie=document.getElementById("show_categorie")
const cover=document.querySelector(".cover")



// TO SHOW/UNSHOW NAV CATEGORIES WHEN USER CLICK ON THE TOGGLE BUTTON
function showCategories(){
        if(show_categorie.style.display!="flex"){
            signup_right.style.display="flex";
            cover.classList.remove("cover")
            cover.classList.add("cover_effect")
            return show_categorie.style.display="flex";
        }

        show_categorie.style.display="none"
        cover.classList.remove("cover_effect")
        cover.classList.add("cover")
    }  


