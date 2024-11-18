document.querySelector(".m-menu").addEventListener("click", function() {
    const menu = document.querySelector(".menu-item1");
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";  
    } else {
        menu.style.display = "none";   
    }
});