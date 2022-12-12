function DarkMode() {
    const Body  = document.querySelector("body");
    const Nav = document.querySelector("nav");
    const Moon = document. querySelector("i");
    const Search = document.querySelector('.search');
    const Button = document.querySelector('.Dark');
    const Select = document.querySelector('select');
    const Title = document.querySelectorAll('.DisplayCountry');
     if(Moon.classList.contains("fa-regular")) {
        Moon.classList.replace("fa-regular", 'fa-solid');
        Body.classList.add("dark");
        Nav.classList.add("dark");
     }
     else{
        Moon.classList.replace("fa-solid", "fa-regular");
        Body.classList.remove("dark")
        Nav.classList.remove("dark")
     }
}