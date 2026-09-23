
// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// DARK / LIGHT MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});


// SERVICE BUTTON

function showMessage(service) {

    alert(
        "You selected: " + service +
        "\n\nKhan JCB Services will contact you soon."
    );

}

 // BOOKING FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        "🚜 Khan JCB Services - New Booking Request%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Work Location: " + location + "%0A" +
        "Work Details: " + message;

    const whatsappURL =
        "https://wa.me/919797029995?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");

    contactForm.reset();

});
