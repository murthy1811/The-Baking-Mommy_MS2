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


/* sendMail is a function called on submitting the form for feedback in html  */

function sendMail(contactForm) {
    emailjs.send("service_xkqr1dk", "template_8p5dh3t", {

        /* variables cakechoice, cakerating, cakerecommend, overallrating were called in html while onclick option is used for each feedback question */

        "caketype": cakeChoice,
        "cakeflavour": contactForm.choice.value,
        "cakerating": cakeRating,
        "recommendation": cakeRecommend,
        "tellus": contactForm.comments.value,
        "starrating": overallRating

    });
}
















