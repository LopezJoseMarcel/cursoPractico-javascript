//Promedio
function calcularMediaAritmetica(lista) {
 /*PRIMERA VIA   
let sumaLista = 0;

for (let i = 0; i < lista.length; i++) {
    sumaLista+= lista[i];
    
}
return sumaLista / lista.length;
*/
/*SEGUNDA VIA 
METODO REDUX
*/
const sumaListaReduce = lista.reduce(
    function (valorI = 0, valorNuevo) {
    return valorI + valorNuevo;
});
 
  return sumaListaReduce / lista.length;
}


//Mediana

function esPar(number) {
    if (number % 2 === 0) {
        return true;                       //es par
   } else{
        return false;                       //es impar        
   }
}

//ordenar lista metodo sort();
function ordenarLista(lista) {
    
    lista.sort(function(a, b) {
      return a - b;
    });
    console.log(lista); 
    return lista;
}



function hallarMediana(lista) {
    ordenarLista(lista);

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


//Moda
const listaM = [1,2,4,4,3,4,3,4,3,34];

const listaCount = {};

listaM.map(function(elemento) {
  if (listaCount[elemento]) {
    listaCount[elemento] += 1;
  } else{
    listaCount[elemento] = 1;
  }
});   

//convertir un objetoen un ararys
const listaArray =  Object.entries(listaCount).sort (function (a, b) {
  return a[1] - b[1];
});

const moda = listaArray[listaArray.length-1];

function CalcularModa(lista) {
  const listaCount = {};
  
  lista.map(function(elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else{
      listaCount[elemento] = 1;
    }
  });  
//convertir un objetoen un ararys
  const listaArray =  Object.entries(listaCount).sort (function (a, b) {
  return a[1] - b[1];
  });
  
  return listaArray[listaArray.length-1];
}