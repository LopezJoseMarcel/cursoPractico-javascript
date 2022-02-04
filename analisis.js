const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);


const salariosColForPromedio = colombia.map(function(persona) {
    return persona.salary;
});

var salarioOrd = salariosCol.sort(function (a, b) {
    return a - b;
});





//mediana
//medianaGeneral
function esPar(number) {
    if (number % 2 === 0) {
        return true;                       //es par
   } else{
        return false;                       //es impar        
   }
}

function hallarMediana(lista) {
 
    let mediana;
    let index;
    if (esPar(lista.length)) {
      mediana = ((lista [lista.length / 2]) + (lista [(lista.length / 2)-1])) / 2; 
    }else{
        index = parseInt(lista.length / 2);
        mediana = lista [index];
    }

    return mediana;
}

//Mediana general
console.log(salarioOrd);
const medianaGeneral = hallarMediana(salarioOrd);
//mediana Top 10%
var spliceStart = 0;  //donde comienza el corte 
var spliceCount = 0 ; // numero de Splice

spliceStart = (salarioOrd.length * (90)) / 100;
spliceCount = 20 - spliceStart;

const salariosTopcolombia = salarioOrd.splice(spliceStart, spliceCount);

const medianaTop10 = hallarMediana(salariosTopcolombia);

console.group("Mediana");
console.log(`La mediana de los salarios es: ${medianaGeneral} y la del top 10% es ${medianaTop10}`);
console.groupEnd();

//Media Aritmetica
function promedio(lista) {
    const sumaAcum = lista.reduce(function (valorDef = 0, valor) {
        return valorDef + valor;
    });
    return sumaAcum / lista.length;
}


console.group("Promedio");
console.log(`El promedio de los salarios es: ${promedio(salariosColForPromedio)} `);
console.groupEnd();