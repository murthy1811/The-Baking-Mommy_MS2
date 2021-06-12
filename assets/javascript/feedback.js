/* ---------------------------------------------------------------------feedback js for confirmation */

window.onload = function () {
    document.getElementById('feedbackform').addEventListener('submit', function (event) {
        event.preventDefault();
        Swal.fire("Thank you for your feedback!");
        document.getElementById("feedbackform").reset();
        // send email here

    });
};

/* ---------------------------------------------------------------------js for sending mail */

function sendMail(contactForm) {
    emailjs.send("service_xkqr1dk", "template_8p5dh3t", {
        "caketype": cakeChoice,
        "cakeflavour": contactForm.choice.value,
        "cakerating": cakeRating,
        "recommendation": cakeRecommend,
        "tellus": contactForm.comments.value,
        "starrating": overallRating

    });
}
















