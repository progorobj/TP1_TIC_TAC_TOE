
var tab= ["","","","","","","","",""]

let i = 0;
let etat = false;
let etatGagnant = 0;
let img= document.getElementById("image");
let cochez=document.getElementById("coche");

function jouer(element)
{
    /*Si une case est déjà cocher on affiche un message informant l'utilisateur de cocher une autre case*/


    if((element.innerHTML==="X" || element.innerHTML==="O") && etatGagnant===0)
    {

        cochez.innerHTML="Cochez une case vide !";
        cochez.classList.add("casevide");
    }
    else{
        cochez.innerHTML=null;
        cochez.classList.remove("casevide");
    }

    /*si la case est vide est etat est false on insert un 'X' si la case est vide et l'etat gagnant est 0 et l'état est true on insert un 'O'*/
    if(tab[i]=="" && etat==false && etatGagnant==0)
    {

        if(element.innerHTML!=="X" && element.innerHTML!=="O") {
            tab[i] = "X";
            element.innerHTML = tab[i];
            etat = true;
            element.setAttribute("class", "rouge");

            img.setAttribute("src","imgo.png");

            let joueurO = document.getElementById("joueurxo");
            joueurO.innerHTML="Joueur O";
            joueurO.setAttribute("class","joueuro");
            i++;

        }

    }
    else if(tab[i]=="" && etat==true && etatGagnant==0)
    {


        if(element.innerHTML!=="X" && element.innerHTML!=="O") {
            tab[i] = "O";
            element.innerHTML = tab[i];
            element.setAttribute("class", "bleu");

            img.setAttribute("src","imgx.png");

            let joueurX = document.getElementById("joueurxo");
            joueurX.innerHTML="Joueur X";
            joueurX.setAttribute("class","joueurx");

            i++;
            etat = false;
        }

    }

    XOgagne();

}


/*Fonction qui vérifie toute les cases pour déterminer quel jouer est gagnant*/

function XOgagne() {

    let c1 = document.getElementById("c1").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;
    let c4 = document.getElementById("c4").innerHTML;
    let c5 = document.getElementById("c5").innerHTML;
    let c6 = document.getElementById("c6").innerHTML;
    let c7 = document.getElementById("c7").innerHTML;
    let c8 = document.getElementById("c8").innerHTML;
    let c9 = document.getElementById("c9").innerHTML;
    let gagne = document.getElementById("gagne");



    if ((c1 === c2) && (c2 === c3) && (c3 === "X" || c3 === "O")) {
        if (c3 === "X") etatGagnant = 1;
        else   etatGagnant = 2;
    }
    else if ((c4 === c5) && (c5 === c6) && (c6 === "X" || c6 === "O")) {
        if (c6 === "X") etatGagnant = 1;
        else  etatGagnant = 2;
    }
    else if ((c7 === c8) && (c8 === c9) && (c9 === "X" || c9 === "O")) {
        if (c9 === "X")   etatGagnant = 1;
        else  etatGagnant = 2;
    }
    else  if ((c1 === c4) && (c4 === c7) && (c7 === "X" || c7 === "O")) {
        if (c7 === "X") etatGagnant = 1;
        else  etatGagnant = 2;
    }
    else if ((c2 === c5) && (c5 === c8) && (c8 === "X" || c8 === "O")) {
        if (c8 === "X") etatGagnant = 1;
        else  etatGagnant = 2;
    }
    else if ((c3 === c6) && (c6 === c9) && (c9 === "X" || c9 === "O")) {
        if (c9 == "X") etatGagnant = 1;
        else  etatGagnant = 2;
    }
    else if ((c1 === c5) && (c5 === c9) && (c9 === "X" || c9 === "O")) {
        if (c9 === "X") etatGagnant = 1;
        else  etatGagnant = 2;

    }
    else if ((c3 === c5) && (c5 === c7) && (c7 === "X"|| c7 === "O")) {
        if (c7 === "X") etatGagnant = 1;
        else  etatGagnant = 2;
    }


    // dans cette partie on determine le gagnant et on set la classe approprié


    if (etatGagnant === 1)
    {
        gagne.innerHTML = "X gagne!";
        gagne.setAttribute("class", "gagne");
        img.setAttribute("src","imgx.png");
    }
    else if(etatGagnant===2)
    {
        gagne.innerHTML = "O gagne!";
        gagne.setAttribute("class", "gagne");
        img.setAttribute("src","imgo.png");
    }


    //Cette partie du code permet de  déterminer si une partie est nulle
    let occ=0;
    for (let i=0 ; i<tab.length;i++)
    {
        if(tab[i]!=="")
        {
            occ++;
        }
    }


    if(occ===9 && etatGagnant !==(1 || 2))
    {
        gagne.innerHTML = "Partie nulle !";
        gagne.setAttribute("class", "gagne");
        img= document.getElementById("image");
        img.setAttribute("src","imgnulle.png");
        cochez.classList.remove("casevide");
    }


}
