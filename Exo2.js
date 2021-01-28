function exo2()
{
    var longueur; 
    var perimetre;
    var calcul;

    longueur = prompt("Quelle est la longueur du rayon?");
    longueur = parseFloat(longueur);

    perimetre = 2* Math.PI * (longueur /2);
    alert("le périmétre du cercle est de "+perimetre.toFixed(2)+"cm");

    calcul = Math.PI * Math.pow((longueur /2), 2);

    alert("l'aire du cercle est de "+calcul.toFixed(2)+"cm");  
}