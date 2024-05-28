// Ce code initialise une grille de jeu de puissance 4 avec 6 colonnes et 7 lignes
// Il récupère également un élément HTML avec l'ID 'contenu' et un bouton avec l'ID 'n_jeu'

let colonne = 7; // Nombre de colonnes dans la grille de jeu
let ligne = 6; // Nombre de lignes dans la grille de jeu

let tableau = new Array(); // Création d'un tableau vide pour stocker les jetons
let contenuElt = document.getElementById('contenu'); // Récupération de l'élément HTML avec l'ID 'contenu'
let joueur = 1; // Le joueur 1 joue en premier

let boutonElt = document.getElementById('n_jeu'); // Récupération du bouton avec l'ID 'n_jeu'


// Ajout d'un gestionnaire pour l'événement "click" sur le bouton
boutonElt.addEventListener("click", function() {
joueur = 1; // Le joueur 1 joue en premier
n_jeu(); // Appel de la fonction 'n_jeu'
});


const departMinutes = 5
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)

// Fonction de création du tableau

function tableau_de_jeux(ligne,colonne){
    // On vide l'affichage
    contenuElt.innerHTML="";
    // On crée l'élément table du DOM
    let tableElt=document.createElement('table');
    // Chaque case est un élément du tableau à deux dimensions
    // On declare une variable "ligne"
    for (let i=0; i<ligne;i++){
        // Deuxième dimension du tableau
        tableau[i]=new Array();
        // Element tr du web
        let ligneElt=document.createElement('tr');
        ligneElt.id="L"+i;
        // On parcours les colonnes de la ligne
        for (let j=0; j<colonne; j++){
            // Chaque case est initialisée à 0
            tableau[i][j]=0;
            // Element td de la page web
            let colonneElt=document.createElement('td');
            colonneElt.id="L"+i+"C"+j;
            // Ajout des colonnes à la ligne
            ligneElt.appendChild(colonneElt);
        };
        // Ajout des lignes au tableau
        tableElt.appendChild(ligneElt);
    };
    // ajout du tableau au contenu
    contenuElt.appendChild(tableElt);
    // ajout des évènement click sur le tableau
    for (let i=0; i<ligne;i++){
        for (let j=0; j<colonne; j++){
            //ajoutEventCase(i,j);
            // on recupere la case correspondante
            let caseElt=document.getElementById("L"+i+"C"+j);
            // puis on y ajoute l'evenement clique
            caseElt.addEventListener('click',clique);
        };
    };
    

}


// Fonction d'initialisation d'une nouvelle partie
function n_jeu(){
    tableau_de_jeux(ligne,colonne);
    arret=false;
    reset = true;
}

// Fonction clique qui fait que lorsqu'on clique sur une case 
function clique(){
    // on recupère la colone corespondant a la case cliquée
    let n=Number(this.id.charAt(3));
    let l=ligne-1;
    //ici on parcourt les lignes de la colonne enpartant de la dernière    
    while (l>-1){
            //si la case est vide on recupére la case pour y ajouté un element
            if (tableau[l][n]==0){
                let caseMinElt=document.getElementById("L"+l+"C"+n);
                let divElt=document.createElement('div');
                divElt.className="joueur";
                caseMinElt.appendChild(divElt);
                // on change la couleure de cette case en fonction du joueur
                divElt.style.backgroundColor=joueur==1?"red":"yellow";
                // On met à jour le tableau en mettant la valeur du joueur courant dans la case
                tableau[l][n]=joueur;
                // Ici placé la vérification de victoire
                v_victoire(l,n);
                ///changement de joueur
                joueur*=-1;
                // on sort de la boucle
                l=-1;
            }
            // on passe a la ligne suivante
            else {
            l--
            };
        };
}


// Fonction de Vérification de victoire

function v_victoire(i,j){
    // Vérification horizontale
    let countLigne=0;
    let h=0;
    while (h<colonne){
        if (tableau[i][h]==joueur){
            countLigne++;
            h++;
        }
        else if (tableau[i][h]!==joueur&&countLigne==4){
            h++;
        }
        else {
            countLigne=0;
            h++;
        };
    };
    
    // Vérification verticale
    let countColonne=0;
    let v=0;
    while (v<ligne){
        if (tableau[v][j]==joueur){
            countColonne++;
            v++;
        }
        else if (tableau[v][j]!==joueur&&countColonne==4){
            v++;
        }
        else {
            countColonne=0;
            v++;
        };
    };
    
    // Vérification diagonale
    let countDiag=0;
    let d=-Math.min(i,j);
    
    while(i+d<ligne&&j+d<colonne&&i+d>=0&&j+d>=0){
        
        if (tableau[i+d][j+d]==joueur){
            countDiag++;
            d++;
        }
        else if (tableau[i+d][j+d]!==joueur&&countDiag==4){
            d++;
        }
        else {
            countDiag=0;
            d++;
        };
    };
    
    // Vérification anti-diagonale
    let countAntiDiag=0;
    let a=-Math.min(i,colonne-1-j);
    while(i+a<ligne&&j-a<colonne&&i+a>=0&&j-a>=0){
        if (tableau[i+a][j-a]==joueur){
            countAntiDiag++;
            a++;
        }
        else if (tableau[i+a][j-a]!==joueur&&countAntiDiag==4){
            a++;
        }
        else {
            countAntiDiag=0;
            a++;
        };
    } ;
    
    
    // Affichage Résultat
    if (countLigne>=4||countColonne>=4||countDiag>=4||countAntiDiag>=4){
        
        victoire=true;
        // Affichage Vainqueur
        let gagnant=(joueur==1)?"joueur 1 (rouge)":"joueur 2 (jaune)";
        let victoireElt=document.createElement('div');
        victoireElt.innerHTML="<h2>Le "+gagnant+" est le gagnant</h2>";
        contenuElt.appendChild(victoireElt);
        // On supprime les évènements clics
        for (let i=0; i<ligne;i++){
            for (let j=0; j<colonne; j++){
                let caseElt=document.getElementById("L"+i+"C"+j);
                caseElt.removeEventListener('click',clique);
            
            };
        };
    
    }
    else {
        console.log("tour suivant");
        // Affichage Tour suivant 
    };
}

let arret = true;
    let reset = false;
    function chronometer() {
        let seconds = 0;
        setInterval(() => {
        if(reset == true) {
            seconds = 0;
            reset = false;
        }
        if(arret == true) {
            clearInterval(chrono);
            }
        else if(arret == false) {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        if(remainingSeconds < 10) {
            document.getElementById("timer").innerHTML = (`${minutes}:0${remainingSeconds}`);
            }
        else {
        document.getElementById("timer").innerHTML = (`${minutes}:${remainingSeconds}`);
        }
        }}, 1000);
    }
    chrono = chronometer();


    

    
    
