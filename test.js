function Show() {
    document.getElementById("menu").style.display="block";
}

function Hide() {
    document.getElementById("menu").style.display="none";
}


function Show2() {
    document.getElementById("menu2").style.display="block";
}

function Hide2() {
    document.getElementById("menu2").style.display="none";
}

function dropdown2() {
    var caja = document.getElementById("menu2");
    if(caja.style.display == "none"){
        Show2();
        document.getElementById("divulgacionWord2").style.position = "absolute";
    }
    else{
        Hide2();
        document.getElementById("divulgacionWord2").style.position = "relative";
}
}

function dropdown() {
    var caja = document.getElementById("menu");
    if(caja.style.display == "none"){
        Show();
        document.getElementById("divulgacionWord").style.position = "absolute";
    }
    else{
        Hide();
        document.getElementById("divulgacionWord").style.position = "relative";
}
}


'It\'s six o\'clock.';
"Remember to say \"please\" and \"thank you.\"";
