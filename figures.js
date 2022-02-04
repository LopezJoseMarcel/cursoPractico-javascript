//SQUARE
console.group("Square");

/*const squareSide = 5; 
console.log(`the sides of the square measure ${squareSide} cm`);*/

function perimeterSquare(side) {
    return 4 * side;
}

//perimeter of the square
    //console.log(`the perimeter of the square measure ${perimeterSquare(5)} cm`);

//area
function areaSquare (side) {
   return side ** 2;
}

    //console.log(`the area of the square measure ${squareArea} cm^2`);

console.groupEnd();

console.group("triangle");

function perimeterTriangle(side1, side2, base) {

    return  Number(side1) + Number(side2) + Number(base);
}
function areaTriangle(base, height) {
  return (base * height) / 2;
}

//triangle
/*
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;

console.log(
`The sides of the triangle measure ${triangleSide1} cm, ${triangleSide2} cm 
and its base mesures ${triangleBase} cm. `);

console.log(`the height of the triangle measure ${triangleHeight} cm`);
//perimeter of the triangle
  const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
//area
  const triangleArea = (triangleBase * triangleHeight) / 2;

  console.log(`the perimeter of the triangle measure ${trianglePerimeter} cm`);
  console.log(`the area of the triangle measure ${triangleArea} cm^2`);
  */
console.groupEnd();

console.group("circumference");
//circumference


function diameterCircumference(radius) {
    return radius * 2;
}
function perimeterCircumference(radius) {
    return diameterCircumference(radius) * Math.PI;
}
function areaCircle(radius) {
    return (Math.PI * (radius ** 2));
}

/*
const radius = 4;
const diameter = 2 * radius; 
const pi = Math.PI;

console.log(
`The radius of circumference measures ${radius} cm`);


//perimeter of the circumference
  const circumferencePerimeter = diameter * pi;
//area 
  const circumferenceArea = (pi * (radius ** 2));

  console.log(`the perimeter of the circumference measures ${circumferencePerimeter} cm`);
  console.log(`the area of the circle measures ${circumferenceArea} cm^2`);
  */
console.groupEnd();

//aqui interactuamos con el html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimeter = perimeterSquare(value);
    alert(perimeter);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaSquare(value);
  alert(area);
}
//triangulo
function calcularPerimetroTriangulo(){
  const input1 = document.getElementById("Inputlado1");
  const input2 = document.getElementById("Inputlado2");
  const inputbase = document.getElementById("InputladoBase");
  
  const lado1 = input1.value;
  const lado2 = input2.value;
  const ladoBase = inputbase.value;

  const perimeter = perimeterTriangle(lado1, lado2, ladoBase);
  alert(perimeter);
  
}

function calcularAreaTriangulo(){
 
  const inputbase = document.getElementById("InputladoBase");
  const inputaltura = document.getElementById("InputladoAltura")
  
  
  const altura = inputaltura.value;
  const ladoBase = inputbase.value;

  const area = areaTriangle(ladoBase,altura)
  alert(area);
  
}
//Circunferencia
function calcularPerimetroCircu(){
  const input = document.getElementById("InputCircunferencia");
  const radius = input.value;

  const perimeter = perimeterCircumference(radius);
  alert(perimeter);
}

function calcularAreaCircu(){
  const input = document.getElementById("InputCircunferencia");
  const radius = input.value;

  const area = areaCircle(radius);
  alert(area);
}