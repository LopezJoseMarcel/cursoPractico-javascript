const sp500 = {
  porciento: 8.26,
  risk: 2.5
};
const nasdaq100 = {
    porciento: 11.5,
    risk: 2.5
} ;
var dow = {
    porciento: 15,
    risk: 2.5
} ;
//bonds
const bonds = {
    porciento: 2.5,
    risk: 1
} ;
//Cryptocurrencies
const bitcoin = {
    porciento: 20,
    risk: 5
} ;
const eth = {
    porciento: 18.5,
    risk: 4.5
} ;
const tet = {
    porciento: 16.0, 
    risk: 4
} ;

const totalDinero = [];

//METODOS 
//(P = Principal, R = Tasa, N = Número de años).
function interesCompuesto(principal,tasa,year) {
    var Cf = principal * Math.pow( 1+tasa / 100, year );
    return Cf;
}
    
function hallarPorciento(totalDinero, instrumento) {
    return (instrumento * 100) / totalDinero;
}

//entrada de datos

function resultado() {
 const inputYear = document.getElementById("year-input");
 const inputSp = document.getElementById("input-SP500");
 const inputN100 = document.getElementById("input-NASDAQ");
 const inputDow = document.getElementById("input-DOW");
 const inputBond = document.getElementById("input-bond");
 const inputBit = document.getElementById("input-Bit");
 const inputEth = document.getElementById("input-ETH");
 const inputT = document.getElementById("input-TET");

const year = Number(inputYear.value);
const Sp500 = Number(inputSp.value) ;
const N100 = Number(inputN100.value) ;
const Dow = Number(inputDow.value) ;
const Bond = Number(inputBond.value) ;
const Bit = Number(inputBit.value) ;
const Eth = Number(inputEth.value) ;
const Tet = Number(inputT.value) ;

//intereses por instrumento financiero
const interesSp = interesCompuesto(Sp500, sp500.porciento, year);
const interesNa = interesCompuesto(N100, nasdaq100.porciento, year);
const interesDow = interesCompuesto(Dow, dow.porciento, year);
const interesBond = interesCompuesto(Bond, bonds.porciento, year);
const interesBit = interesCompuesto(Bit, bitcoin.porciento, year);
const interesEth = interesCompuesto(Eth, eth.porciento, year);
const interesTet = interesCompuesto(Tet, tet.porciento, year);




 const totalDinero = Sp500 + N100 + Dow + Bond + Bit + Eth + Tet;
 const total = interesSp + interesNa + interesDow + interesBond + interesBit + interesEth + interesTet;
 const totalBeneficio = total - totalDinero;
//trabajo de riesgo  Porciento
const totalRisk = (hallarPorciento(totalDinero,Sp500) * sp500.risk) 
 + (hallarPorciento(totalDinero,Sp500) * sp500.risk) 
 + (hallarPorciento(totalDinero,N100) * nasdaq100.risk)
 + (hallarPorciento(totalDinero,Dow) * dow.risk)
 + (hallarPorciento(totalDinero,Bond) * bonds.risk)
 + (hallarPorciento(totalDinero,Bit) * bitcoin.risk)
 + (hallarPorciento(totalDinero,Eth) * eth.risk)
 + (hallarPorciento(totalDinero,Tet) * tet.risk) ;

  const risk = totalRisk / 100;

  //out
  const outLabel1 = document.getElementById("total-benefit-label");
  const outLabel2 = document.getElementById("risk-label");
  const outLabel3 = document.getElementById("total-label");
  
  outLabel1.innerText = totalBeneficio.toFixed(2);
  outLabel2.innerText = risk.toFixed(2);
  outLabel3.innerText = total.toFixed(2);

}


