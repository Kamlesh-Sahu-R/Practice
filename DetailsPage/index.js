const whatsapp = document.getElementById("whatsApp-hide1");
const whatsapp_number = document.getElementById("whatsApp-hide2");
console.log(whatsapp);
console.log(whatsapp_number);

whatsapp.addEventListener('mouseover', function(event){
   
    
    whatsapp_number.style.display = "block";
    whatsapp.style.display = "none";
    event.stopImmediatePropagation();
    event.defaultPrevented();
    
   
});
whatsapp.addEventListener('mouseout', () => {
    
    whatsapp_number.style.display = "none";
    whatsapp.style.display = "block";
});