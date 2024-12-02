const whatsapp = document.getElementById("whatsApp-hide1");
const whatsapp_number = document.getElementById("whatsApp-hide2");
console.log(whatsapp);
console.log(whatsapp_number);

whatsapp_number.style.display = "none";

whatsapp.addEventListener('mouseover', function(event){
   
    event.stopPropagation();
    whatsapp_number.style.display = "block";
    whatsapp.style.display = "none";
    
   
});
whatsapp.addEventListener('mouseout', () => {
    
    whatsapp_number.style.display = "none";
    whatsapp.style.display = "block";
});