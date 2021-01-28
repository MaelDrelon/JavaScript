var a = 3; 
var b = 2;
function multiplie(x = 8)
{
    var calcul = x *a;
    
    alert("Le résultat est "+calcul+"");
}

function affiche()
{
    multiplie(a);
    multiplie(b);
}