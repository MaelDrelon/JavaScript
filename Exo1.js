function exo1()
{
    var longueur; 
    var largeur;
    var calcul;

    longueur = prompt("Quelle est la longueur?");
    longueur = parseFloat(longueur);

    largeur = prompt("Quelle est la largeur?");
    largeur = parseFloat(largeur);

    calcul = longueur * largeur;

    alert("l'aire du rectangle est de "+calcul+"cm2");  
}
