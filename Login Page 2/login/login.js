
//Recuperation des elments
const form = document.querySelector("#form")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const small =document.querySelector("#small")
const small2 = document.getElementById("small2")
const contenaire =document.querySelector("container")
const btn = document.getElementById("btn")
const input = document.querySelectorAll("input")
const afMotPass =document.getElementById("afMotPass")
// console.log(input)


// btn.addEventListener('click', (e)=>{
//     e.preventDefault()

//     form.classList.replace("forme", "form");
//     btn.classList.add("forme");
//     // console.log(form)

// });


input[0].addEventListener("keydown", (e)=>{
    
    small.classList.replace("erreur", "pas_erreur")
    username.classList.remove("form_bg")
}

);
input[1].addEventListener("keydown", (e)=>{

    small2.classList.replace("erreur", "pas_erreur")
    password.classList.remove("form_bg")

}
)
// GERER LA VISIBILITE DU PASSWORD
afMotPass.addEventListener("click", (e)=>{
        e.preventDefault()
    if(password.type === "password"){
        password.type = "text"
    }
    else 
    {(password.type === "text")
        password.type = "password"
    }
})


// Evenements en question

form.addEventListener('submit',(e)=>{
    e.preventDefault();
        verification();
        
        
    });
        // Creation de des fonction
    function verification(){

        if(!username.value && !password.value){
            
            small.classList.replace("pas_erreur", "erreur")
            small.innerText = "ne peut pas etre vide";
            username.classList.add("form_bg")

            small2.classList.replace("pas_erreur", "erreur")
            small2.innerText="ne peut pas etre vide"
            password.classList.add("form_bg")

            e.preventDefault();
        }

        else if(username.value === "" ){
            small.classList.replace("pas_erreur", "erreur")
            small.innerText = "veuillez saisir le username";
            username.classList.add("form_bg")
            e.preventDefault();
        }
        
        else if(!password.value){
            small2.classList.replace("pas_erreur", "erreur")
            small2.innerText="veuillez saisir le mot de pass"
            password.classList.add("form_bg")
            e.preventDefault();
        }
        else {
            alert("formulaire envoye")
        }
    


// if(form.submit == true){
console.log("LOGIN:",input[0].value)
console.log("PASS:", input[1].value)

input[0].value = "";
input[1].value = "";

// small.classList.replace("erreur", "pas_erreur")
// small2.classList.replace("erreur", "pas_erreur")

// }
}


function connexion(){
    let connexion = document.getElementById("connexion")
    let loginpage = document.getElementById("loginpage")
    let loginpageS = document.getElementById("loginpageS")
    loginpage.classList.remove("unview")
    loginpageS.classList.add("unview")
}