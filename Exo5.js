function boucle()
{
    var tab = new Array(3);
    for(var i = 0; i < tab.length; i++)
    {
        tab[i] = i*i;
    }
    alert(tab);
}

function boucle2()
{
    var longeur = prompt("Quelle longueur voulez que votre tableaux soit?")
    var tab = new Array();

    for(var i = 0; i < longeur; i++)
    {
        tab[i] = i*i;
    }
    alert(tab);
}