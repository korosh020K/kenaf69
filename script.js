if (!localStorage.getItem("welcomeShown")) {
    alert("به سایت من خوش آمدید");
    localStorage.setItem("welcomeShown", "yes");
}

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}