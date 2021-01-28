var tab = [-2,1,4];

function soustrait(x)
{
   if(x >= 0)
   {
        return calcul = x-2;
   }
   else
   {
       return calcul = "Nombre négatif !";
   }
   alert("Le résultat est "+calcul+"");
}
function Affiche()
{
    alert(soustrait(tab[0]));
    alert(soustrait(tab[tab.length -1]));
}