///////////////////////////////////////////////////////////////////
//      Captura
////////////////////////////////////////////////////////////////////
const op1 = document.getElementById("number1");
const op2 = document.getElementById("number2");
const opPlus = document.getElementById("plus");
const opMinus = document.getElementById("minus");
const opMultiply = document.getElementById("multiply");
const opDivide = document.getElementById("divide");
const result = document.getElementById("divide");
const opClear = document.getElementById("clear");



///////////////////////////////////////////////////////////////////
//      função da operação
////////////////////////////////////////////////////////////////////
const operacao = (operador) => {
  let n1 = 10;
  let n2 = 8;
  // let operador = 
  switch (operador) {
    case '+':
      return console.log(n1+n2);
      case '-':
      return n1-n2;
    case '*':
      return n1*n2;
    case '/':
      return n1/n2;
    case 'c':
      // limpar number1,number2 e resposta
    default:
      break;
    }
  };
  
  ///////////////////////////////////////////////////////////////////
  //      ouvindo o evento click
  ////////////////////////////////////////////////////////////////////
  const soma = (opPlus.addEventListener('click', operacao('+')));
  const subtrai = (opPlus.addEventListener('click', operacao('-')));
  const multiplica = (opPlus.addEventListener('click', operacao('*')));
  const divide = (opPlus.addEventListener('click', operacao('/')));
  const solimpama = (opPlus.addEventListener('click', operacao('c')));