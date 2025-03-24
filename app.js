document.addEventListener("DOMContentLoaded", function () {
    // Navbar Toggle Button
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    
    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });

    // Buy Now Button Alert
    const buyButtons = document.querySelectorAll(".buy-btn");
    buyButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("আপনার পণ্য কার্টে যোগ করা হয়েছে!");
        });
    });

    // Shop Now Button Alert (including New Arrivals section)
    const shopNowButtons = document.querySelectorAll("button.text-uppercase, #home button");
    shopNowButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Shop Now বাটনে ক্লিক করা হয়েছে! শপিং শুরু করুন!");
        });
    });

    // Contact Form Validation
    const contactBtn = document.querySelector("#contact-btn");
    contactBtn.addEventListener("click", function () {
        const name = document.querySelector("input[placeholder='Name']").value.trim();
        const email = document.querySelector("input[placeholder='Email']").value.trim();
        const phone = document.querySelector("input[placeholder='Phone']").value.trim();
        
        if (name === "" || email === "" || phone === "") {
            alert("অনুগ্রহ করে সকল তথ্য পূরণ করুন!");
        } else {
            alert("আপনার বার্তা সফলভাবে পাঠানো হয়েছে!");
        }
    });
});


// sproduct section
var MainImg = document.getElementById('MainImg');
        var smallimg = document.getElementsByClassName('small-img');
        smallimg[0].onclick = function(){
            MainImg.src = smallimg[0].src;
        }
        smallimg[1].onclick = function(){
            MainImg.src = smallimg[1].src;
        }
        smallimg[2].onclick = function(){
            MainImg.src = smallimg[2].src;
        }
        smallimg[3].onclick = function(){
            MainImg.src = smallimg[3].src;
        }


