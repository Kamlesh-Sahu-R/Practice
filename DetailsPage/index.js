const whatsapp = document.getElementById("whatsApp-hide1");
const whatsapp_number = document.getElementById("whatsApp-hide2");
let count = 1;

whatsapp.addEventListener('click', function(event){
    count += 1;
    if(count/2){
        whatsapp_number.style.display = "block";
        whatsapp.style.display = "none";
    }else{
        whatsapp_number.style.display = "none";
        whatsapp.style.display = "block";
    }
   console.log(count);
});
whatsapp_number.addEventListener('click', function(event){
    count += 1;
    if(count/2){
        whatsapp_number.style.display = "none";
        whatsapp.style.display = "block";
    }else{
        whatsapp_number.style.display = "block";
        whatsapp.style.display = "none";
    }
   console.log(count);
});
