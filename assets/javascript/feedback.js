

$('#submitBtn').prop('disabled', true);


function formcheck(){
 
     if ($('.form-check-input').change()=='true' &&  $('.form-control').val().length >0 && $('.star-input').change()=='true') {
        $('#submitBtn').prop('disabled', false);

    } else{
        return false;
    }
};

//   document.getElementById("submitBtn").addEventListener("click", submitconfirm);
   

function submitconfirm(){
    event.preventDefault();
            Swal.fire("Thank you for your feedback!");
              
    return false;
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


