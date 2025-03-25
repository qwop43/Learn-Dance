document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

   
    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    
    document.querySelectorAll(".nav-list li a").forEach(item => {
        item.addEventListener("click", function () {
            navList.classList.remove("active");
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("confirmationMessage").style.display = "block"; 
    this.reset();
});