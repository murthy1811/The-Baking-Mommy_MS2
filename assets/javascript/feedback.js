 
window.onload = function() {
    document.getElementById('feedbackform').addEventListener('submit', function(event) {
        event.preventDefault();
        Swal.fire("Thank you for your feedback!");
        document.getElementById("feedbackform").reset();
        // send email here
    });
}
























// const btn = document.querySelector(".submit-rating");
// const thanksmsg = document.querySelector(".thanks-msg");
// const starRating = document.querySelector(".star-input");
// // Success msg show/hide


// btn.onclick = () => {
//     starRating.style.display = "none";
//     thanksmsg.style.display = "table";
//     return false;
// };


