function precioFinal(precioOriginal,porcentajeDescuento){

    return (precioOriginal*(100 - porcentajeDescuento)) / 100;
};

//practica Individual
const cupones = [
    "batman_negro",
    "batman_rojo",
    "robin_azul",
    "deadpool"
];





//Funciones 

function onClickButtonPriceDescount(){
const inputPrice = document.getElementById("inputPrice");
const inputDescount = document.getElementById("inputDiscount");
const inputCupon = document.getElementById("inputCupon")

 const price = inputPrice.value;
 var descount = inputDescount.value;
 const cuponDescount = inputCupon.value;

if (descount == 0) {
    switch (cuponDescount) {
        case cupones[0]:
            descount = 15;
            break;
        case cupones[1]:
            descount = 20;
            break;
        case cupones[2]:
            descount = 30;
            break;
        case cupones[3]:
            descount = 50;
             break;  
        default:
            alert("Cupon de descuento incorrecto");         
    } 
}
  
 

 finalPrice = precioFinal(price, descount);

 //mandar el mensaje en html
 const output = document.getElementById("final-price");
 //Como enviar al html
 output.innerText = `El precio de su producto con decuento es $ ${finalPrice} `;

}