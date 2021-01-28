function init() {
    var a = document.getElementById("1");
    var env = document.getElementById("2");
    var rez = document.getElementById("4");
    env.onclick = fctSubmit();
    rez.onclick = remise_a_zero();
}

function remise_a_zero() {
    var a = document.getElementById("1");
    var c = document.getElementById("4");
    alert("Vous avez reset le champ ");
}

function fctSubmit() {
    var a = document.getElementById("1");
    alert("Vous avez saisi : " + a.value);
    document.getElementById("3").submit();
}