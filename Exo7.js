function date() 
{

    var jour = new Date();
    var jourDeLaSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    switch (jour.getDay()) 
    {
        case 0: 
        
            alert("On est "+jourDeLaSemaine[jour.getDay()]);
        
            break;
        case 1: 
        
            alert("On est "+jourDeLaSemaine[jour.getDay()]);
        
            break;
        case 2: 
        
            alert("On est "+jourDeLaSemaine[jour.getDay()]);
        
            break;
        case 3: 
        
            alert("On est "+jourDeLaSemaine[jour.getDay()]);
        
            break;
        case 4: 
        
            alert("On est "+jourDeLaSemaine[jour.getDay()]);
        
            break;
        case 5: 
        
            alert("On est "+jourDeLaSemaine[jour.getDay()]);
        
            break;
        case 6: 
        
            alert("On est "+jourDeLaSemaine[jour.getDay()]);
        
            break;
            
        default : 
            alert("Le jour na pas pu etre identifié");
    }
}