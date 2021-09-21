// let regressiva = 10;

// while(regressiva >= 1){
//     if(regressiva >=1){
//         console.log(regressiva);
//         regressiva -= 1;
//     }else{
//         return;
//     }
// }

let FuncaoRegressiva = (numero) => {
  console.log(numero);
  if (numero <= 1) {
    return;
  } else {
    FuncaoRegressiva(numero - 1);
  }
};

FuncaoRegressiva(10);
