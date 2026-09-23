// ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});


// ================= BOOKING FORM =================

document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const work = document.getElementById("work").value;
    const message = document.getElementById("message").value;


    const whatsappNumber = "919797029995";


    const text =
        "🚜 KHAN JCB SERVICES - BOOKING REQUEST%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Location: " + encodeURIComponent(location) + "%0A" +
        "Work Required: " + encodeURIComponent(work) + "%0A" +
        "Message: " + encodeURIComponent(message);


    const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + text;


    window.open(whatsappURL, "_blank");

});
