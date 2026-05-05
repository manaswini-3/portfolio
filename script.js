function toggleDarkMode() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        document.body.style.background = "#f4f4f4";
        document.body.style.color = "black";
    } else {
        document.body.style.background = "#0f172a";
        document.body.style.color = "white";
    }
}
