
/*----------------------------Faq----------------------------*/
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq =>{
    faq.addEventListener("click",() => {
        faq.classList.toggle("active");
    });
});

/*----------------------------Top City----------------------------*/
var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},5000);

