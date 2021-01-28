function appel(){
    var a = "Nom de code du navigateur : " + navigator.appCodeName;

    alert(a);
    var b = "Nom du navigateur : " + navigator.appName;
  
    alert(b);
    var c = "Information de la version : " + navigator.appVersion;
   
    alert(c);
    var d = "Cookies activés : " + navigator.cookieEnabled;
    
    alert(d);
    var e = "Language du navigateur : " + navigator.language;
    
    alert(e);
    var f = "Platforme : " + navigator.platform;
   
    alert(f);
    var g = "Nom du moteur du navigateur : " + navigator.product;
    
    alert(g);
    var h = "En-tête utilisateur-agent envoyé : " + navigator.userAgent;
    
    alert(h);
}