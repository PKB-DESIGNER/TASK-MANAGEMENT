console.log("je vous ecoute");
// Debut mamipulation du Dashbord
let Acceuil = document.getElementById("Acceuil");
let Taches = document.getElementById("Taches");
let Projets = document.getElementById("Projets");
let Parametre = document.getElementById("Parametre");

let AcceuilDashbord = document.getElementById("AcceuilDashbord");
let TachesDashbord = document.getElementById("TachesDashbord");
let ProjetDashbord = document.getElementById("ProjetDashbord");
let ParametreDashbord = document.getElementById("ParametreDashbord");

// Les evennements

Acceuil.addEventListener("click", (e) => {
  AcceuilA();
});

Taches.addEventListener("click", (e) => {
  TachesT();
});

Projets.addEventListener("click", (e) => {
  ProjetsP();
});

Parametre.addEventListener("click", (e) => {
  ParametreP();
});

//Les fFin evennements

// EVENT SUR ONGLETS

function AcceuilA() {
  console.log("Acceuil Active");
  Acceuil.classList.add("active");
  Taches.classList.remove("active");
  Projets.classList.remove("active");
  Parametre.classList.remove("active");

  TachesDashbord.classList.add("unview");
  AcceuilDashbord.classList.remove("unview");
}

function TachesT() {
  console.log("Taches Active");
  Acceuil.classList.remove("active");
  Taches.classList.add("active");
  Projets.classList.remove("active");
  Parametre.classList.remove("active");

  AcceuilDashbord.classList.add("unview");
  TachesDashbord.classList.remove("unview");
}

function ProjetsP() {
  console.log("Projet Active");
  Acceuil.classList.remove("active");
  Taches.classList.remove("active");
  Projets.classList.add("active");
  Parametre.classList.remove("active");

  AcceuilDashbord.classList.add("unview");
  TachesDashbord.classList.add("unview");
}

function ParametreP() {
  console.log("Parametre Active");
  Acceuil.classList.remove("active");
  Taches.classList.remove("active");
  Projets.classList.remove("active");
  Parametre.classList.add("active");

  AcceuilDashbord.classList.add("unview");
  TachesDashbord.classList.add("unview");
}
// FIN EVENT ONGLETS



// Fin mamipulation du Dashbord

//  Ajouter et fermer une tache

let RetrTask = document.getElementById("RetrTask");
let AjoutTask = document.getElementById("AjoutTask");

// FERMER LE FORMULAIRE
RetrTask.addEventListener("click", (e) => {
  CloseTaskForm();
});

function CloseTaskForm() {
  let AddTask = document.getElementById("Formulaire");
  AddTask.classList.add("unview");
}

// OUVRIR LE FORMULAIRE
AjoutTask.addEventListener("click", (e) => {
  console.log("Ajouter une Tache");
  createNewForm();
});

function createNewForm() {
  let AddTask = document.getElementById("Formulaire");
  AddTask.classList.remove("unview");
  
  
  let TitreT = document.getElementById("Titre");
  let DateCreationT = document.getElementById("DateCreation");
  let DateFinT = document.getElementById("DateFin");
  let DescriptionT = document.getElementById("Description");

  let objetTemporaire = {
    Numero:"",
    Titre:"",
    Priorite:"",
    DateDebut:"",
    Status:"",
    DateFin:"",
    Description:"",};
  
  TitreT.addEventListener("change", (e) =>{
    objetTemporaire.Titre= TitreT.value;
  });
  DateCreationT.addEventListener('change', (e) =>{
    objetTemporaire.DateDebut = DateCreationT.value;
  });
  DateFinT.addEventListener('change', (e) => {
    objetTemporaire.DateFin = DateFinT.value;
  });
  DivInput.addEventListener('change', (e) => {
    findSelected();
    objetTemporaire.Priorite = inputRadioTaches;
  });
  DescriptionT.addEventListener('change', (e) =>  {
    objetTemporaire.Description = DescriptionT.value;
  });
  
  // RECUPERER LES VALEUR DE L"INPUT RADIO
  list = document.querySelectorAll('input[name="Priorite"]');
  
  let findSelected = () => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].checked) 
      inputRadioTaches = list[i].value;
    }
  };
  

  console.log(objetTemporaire);
  
  Tables.push(objetTemporaire)
  console.log(Tables)

  objetsTable()
}

// FUNCTION POUR CREER AJOUTER L'OBJET CREER AU TABLEAU

// NOUVELLE AVEC LES ARRAYS

let Tables = [
  {
    Numero:"",
    Titre:"",
    Priorite:"",
    DateDebut:"",
    Status:"",
    DateFin:"",
    Description:"",
  },
]

let Ttboby = document.getElementById('tbody');

// Fonction Pour Gerer les lignes d'objets en tableau

function objetsTable(){
  // let tboby = document.getElementById("tbody")[0];
  
  Ttboby.innerHTML = "";

  Tables.forEach((item,index) =>{
    
    let row = document.createElement("tr");
    for(let key in item){
      let cellule = document.createElement("td")
      cellule.textContent = item[key];
      row.appendChild(cellule);
    };
// Evennement SUR LES LIGNEs DE TABLEAU modification ? suppression ?

const newCellule = document.createElement("td")
const editButton = document.createElement("button")
      editButton.textContent = 'Modifier'
      editButton.onclick = () => editRow(index);

      newCellule.appendChild(editButton);
      row.appendChild(newCellule);
      Ttboby.appendChild(row);
  });
}
// objetsTable();

// CREER LES FONCTIONS APPELEES

function editButton(index){

    const newNumero = prompt("Entre le nouveau Numero ", Tables[index].Numero)
    const newTitre = prompt("Entre le nouveau Titre Titre", Tables[index].Titre)
    const newPriorite = prompt("Entre le nouveau Priorite ", Tables[index].Priorite)
    const newDateDebut = prompt("Entre le nouveau DateDebut ", Tables[index].DateDebut)
    const newStatus = prompt("Entre le nouveau Status ", Tables[index].Status)
    const newDateFin = prompt("Entre le nouveau DateFin ", Tables[index].DateFin)
    // const newDescription = prompt("Entre le nouveau Description ", Tables[index].Description)

    if(newNumero) Tables[index].Numero = newNumero;
    if(newTitre) Tables[index].Numero = newTitre;
    if(newPriorite) Tables[index].Numero = newPriorite;
    if(newDateDebut) Tables[index].Numero = newDateDebut;
    if(newStatus) Tables[index].Numero = newStatus;
    if(newDateFin) Tables[index].Numero = newDateFin;
    // if(newDescription) Tables[index].Numero = newDescription;

    objetsTable();
  }
  








// OPERATION SUR LA DESCRIPTION DES TACHES

const fermer = document.getElementById("fermer")
const TablauT = document.getElementById("TablauTaches")
const rows = TablauT.getElementsByTagName("tr")
// const tbody = document.getElementsByTagName("TablauTaches")

fermer.onclick = () =>{
  const Description = document.getElementById("DescriptionT")
  Description.classList.add("unview")
}















//ANCIEN CODE MANIPULATION FORMULAIRE



// // FIN ACTION FORMULAIRE

// // RENPLISSAGE DU TABLEAU AVEC LE FOMULAIRE
// const button = document.getElementById("button");
// const Formulaire = document.getElementById("Formulaire");
// let TablauTaches = document
//   .getElementById("TablauTaches")
//   .getElementsByTagName("tbody")[0];

// // RECUPERER LES VALEUR DE L"INPUT RADIO
// list = document.querySelectorAll('input[name="Priorite"]');

// // button.addEventListener("click", function () {
// //   findSelected();
// // });

// let findSelected = () => {
//   //console.log(list);
//   for (let i = 0; i < list.length; i++) {
//     if (list[i].checked) 
//       // console.log(list[i].value);
//     inputRadioTaches = list[i].value;
//   }
// };


// // CREATION DE L'OBJET

// const tdescrip = document.getElementById("tdescrip")

// // tdescrip.addEventListener("change", (e) => {
// //   e.preventDefault();
// //   EventListener();
// // });

// // function EventListener() {
//   const ObjetTaleauTaches = {
//     Numero:"",
//     Titre:"",
//     Priorite:"",
//     DateDebut:"",
//     Status:"",
//     Status:"",
//     DateFin:"",
//     Description:"",
//   };
  
// let TitreT = document.getElementById("Titre");
// let DateCreationT = document.getElementById("DateCreation");
// let DateFinT = document.getElementById("DateFin");
// let DescriptionT = document.getElementById("Description");


// TitreT.addEventListener("change", (e) =>{
  
//   ObjetTaleauTaches.Titre= TitreT.value;
// });
// DateCreationT.addEventListener('change', (e) =>{
//   ObjetTaleauTaches.DateDebut = DateCreationT.value;
// });
// DateFinT.addEventListener('change', (e) => {
//   ObjetTaleauTaches.DateFin = DateFinT.value;
// });
// DivInput.addEventListener('change', (e) => {
//   findSelected();
//   ObjetTaleauTaches.Priorite = inputRadioTaches;
// });
// DescriptionT.addEventListener('change', (e) =>  {
//   ObjetTaleauTaches.Description = DescriptionT.value;
// });

  
//   console.log(ObjetTaleauTaches);
// // };








// let compteur = 0;
// let id = 1
// const tbody =document.getElementById("TablauTaches").getElementsByTagName('tbody')[0];

// button.addEventListener("click", function () {
//   console.log(ObjetTaleauTaches)
  
//   compteur++;
  
//   findSelected();
  
  
//   ObjetTaleauTaches.Numero = compteur;
  
//   // CREATION DES NOUVELLES LIGNE DANS MON TABLEAU
  
  
//   const ligne = document.createElement("tr");
// tbody.appendChild(ligne);
// ligne.id = id++; 


// // Object.keys(ObjetTaleauTaches).forEach(cle => {
  
// //   console.log(`Clé: ${cle}, Valeur: ${ObjetTaleauTaches[cle]}`);
// // });
// const ordreColonnes = ['Numero','Titre','Priorite','DateDebut','Status','DateFin','Description'];
    
//   ordreColonnes.forEach(cle =>{
//   const colone = document.createElement("td");
//   colone.textContent = ObjetTaleauTaches[cle];
  
//   if (cle === 'Description'){
//     colone.classList.add('unview'); 
//   };
//   ligne.appendChild(colone);

//   // colone.dataset = ObjetTaleauTaches;

  
//   // tbody.ligne.forEach(colone =>{
//     // STOCKAGE DE CES DONNE POUR POURVOIR LE RECUPERER PLUS TARD
//     // colone.dataset.Numero = ObjetTaleauTaches.Numero;
//     // colone.dataset.Titre = ObjetTaleauTaches.Titre;
//     // colone.dataset.Priorite = ObjetTaleauTaches.Priorite;
//     // colone.dataset.DateDebut = ObjetTaleauTaches.DateDebut;
//     // colone.dataset.Status = ObjetTaleauTaches.Status;
//     // colone.dataset.DateFin = ObjetTaleauTaches.DateFin;
//     // colone.dataset.Description = ObjetTaleauTaches.Description;
    
  
    
//     // EVENNEMENT SUR LES COLONE
//     ligne.addEventListener('click', () => {
      
//       // console.log(tbody)
      
//       // Récupérer les données de l'utilisateur cliqué à partir des attributs data-*
//       const Numero = colone.dataset.Numero;
//       const Titre = colone.dataset.Titre ;
//       const Priorite = colone.dataset.Priorite;
//       const DateDebut = colone.dataset.DateDebut;
//       const Status = colone.dataset.Status;
//       const DateFin = colone.dataset.DateFin;
//       const Description = colone.dataset.Description;
      
//       const DescriptionT = document.getElementById("DescriptionT")
//       DescriptionT.classList.remove("unview");
      
//       let TitleTaches = document.getElementById("TitreT");
//       TitleTaches.textContent = Titre;
      
//       let DateDebutT = document.getElementById("DateDebutT");
//       DateDebutT.textContent= DateDebut;
      
//       let DateFinT = document.getElementById("DateFinT");
//       DateFinT.textContent = DateFin;
      
//       let statusT = document.getElementById("StatusT");
//       statusT.textContent = Status;
      
//       let PrioriteT = document.getElementById("PrioriteT");
//       PrioriteT.textContent = Priorite;
      
//       let DescriptionAfficharge = document.getElementById("DescriptionAfficharge");
//       DescriptionAfficharge.textContent = Description;
      
      
//     });
//     });
//   console.log(tbody)
//   console.log(ObjetTaleauTaches.value)
// });




// OPERATION SUR LA DESCRIPTION DES TACHES

// const fermer = document.getElementById("fermer")
// const TablauT = document.getElementById("TablauTaches")
// const rows = TablauT.getElementsByTagName("tr")
// // const tbody = document.getElementsByTagName("TablauTaches")

// fermer.onclick = () =>{
//   const Description = document.getElementById("DescriptionT")
//   Description.classList.add("unview")
// }





