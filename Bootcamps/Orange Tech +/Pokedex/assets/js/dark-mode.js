
toggleDarkMode = document.getElementById('toggleDarkMode')

var darkModeOn = localStorage.getItem("isDarkModeOn");

function darkMode() {
    var body = document.body;
    var h1 = document.getElementsByTagName("h1");
    var h3 = document.getElementsByTagName("h3");
    var content = document.getElementsByClassName("content");

    body.classList.toggle("dark-mode");

    for (let i = 0; i < content.length; i++) {
        content[i].classList.toggle("dark-mode");
        h1[i].classList.toggle("dark-mode-text");
    }
    
    for (let i = 0; i < h3.length; i++) {
        h3[i].classList.toggle("dark-mode-text");
    }

}

toggleDarkMode.addEventListener('click', () => {
    darkMode();
    
    if(null === darkModeOn){
        darkModeOn = false;
    }

    if (darkModeOn == false || darkModeOn == "false") {
        document.getElementById("switch").innerText = "Light Mode";
        localStorage.setItem("isDarkModeOn", true);
        darkModeOn = localStorage.getItem("isDarkModeOn");
    }
    else {
        document.getElementById("switch").innerText = "Dark Mode";
        localStorage.setItem("isDarkModeOn", false); 
        darkModeOn = localStorage.getItem("isDarkModeOn");
    }

})

