(function(){
    "use strict"

    const ratingPage = document.querySelector(".rating-body");
    const thankYouPage = document.querySelector(".thank-you-page");
    const ratingBtn = document.querySelectorAll(".rating-button button");


    let rating;

    ratingBtn.forEach(function(button){
        button.addEventListener("click", function(){
            ratingBtn.forEach(function(eachbtn){
                eachbtn.className = "rating-btn";
            });
            rating = button.innerHTML;
        button.classList.add("clickedBtn");
        
        })
    });

    document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault();
        if(rating > 0){
            ratingPage.style.display = "none";
            thankYouPage.style.display = "block"
            document.querySelector(".thank-you-page .rating-message p").innerHTML = `You selected ${rating} out of 5 `;
        }else{
            document.querySelector(".error").style.display = "block";
            ratingBtn.forEach(function(button){
                button.setAttribute('disabled', 'disabled')
            });
            setTimeout(function(){
                document.querySelector(".error").style.display = "none";
                ratingBtn.forEach(function(button){
                    button.removeAttribute('disabled')
                });
            }, 3000)
        }
    })

}());