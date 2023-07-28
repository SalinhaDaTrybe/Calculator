///////////////////////////////////////////////////////////////////
//      Captura
////////////////////////////////////////////////////////////////////
const op1 = document.getElementById("number1");
const op2 = document.getElementById("number2");
const opPlus = document.getElementById("plus");
const opMinus = document.getElementById("minus");
const opMultiply = document.getElementById("multiply");
const opDivide = document.getElementById("divide");
const opClear = document.getElementById("clear");;

///////////////////////////////////////////////////////////////////
//      função da operação
////////////////////////////////////////////////////////////////////
const operacao = (n1, n2, operador) => {
  switch (operador) {
    case '+':
      return n1+n2;
    case '-':
      return n1-n2;
    case '*':
      return n1*n2;
    case '/':
      return n1/n2;
    case '/':
      // limpar number1,number2 e resposta
    default:
      break;
  }
};

///////////////////////////////////////////////////////////////////
//      ouvindo o evento click
////////////////////////////////////////////////////////////////////
