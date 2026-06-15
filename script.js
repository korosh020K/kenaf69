if (!localStorage.getItem("welcomeShown")) {
    alert("به سایت من خوش آمدید");
    localStorage.setItem("welcomeShown", "yes");
}