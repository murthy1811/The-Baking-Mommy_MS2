
// JS for star ratings ( code credit to : https://www.markuptag.com/feedback-form-with-star-rating-html/)

const btn = document.querySelector(".submit-rating");
const thanksmsg = document.querySelector(".thanks-msg");
const starRating = document.querySelector(".star-input");
// Success msg show/hide
btn.onclick = () => {
    starRating.style.display = "none";
    thanksmsg.style.display = "table";
    return false;
};