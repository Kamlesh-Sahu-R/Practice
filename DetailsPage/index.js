const whatsapp = document.getElementById("whatsApp-hide1");
const whatsapp_number = document.getElementById("whatsApp-hide2");
console.log(whatsapp);
console.log(whatsapp_number);

whatsapp.addEventListener('mouseover', () => {
   
    whatsapp_number.style.display = "block"
});
whatsapp.addEventListener('mouseout', () => {
    
    whatsapp_number.style.display = "none"
});