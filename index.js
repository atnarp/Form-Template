function loading() {
    var txt;
    if (confirm("Your registration is processing! Please Wait!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}
