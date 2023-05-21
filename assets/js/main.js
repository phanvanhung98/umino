function navOpen() {
    var x = document.getElementById("menucon");
    if (x.className === "site-navigation") {
        x.className += " navigation-open";
    } else {
        x.className = "site-navigation";
    }
}
