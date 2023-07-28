///////////////////////////////////////////////////////////////////
//      Captura
////////////////////////////////////////////////////////////////////
const op1 = document.getElementById("number1");
const op2 = document.getElementById("number2");
// const opPlus = document.getElementById("plus");
// const opMinus = document.getElementById("minus");
// const opMultiply = document.getElementById("multiply");
// const opDivide = document.getElementById("divide");
// const opClear = document.getElementById("clear");
const result = document.getElementById("resposta");
const sinal = document.getElementById("operacao");
const botoes = document.querySelectorAll("#button-area");



///////////////////////////////////////////////////////////////////
//      função da operação
////////////////////////////////////////////////////////////////////
const operacao = (event) => {
  let n1 = Number(op1.value);
  let n2 = Number(op2.value);
  const operador = event.target.innerText
  let resultado;
  switch (operador) {
    case '+':
      resultado = n1 + n2;
      break;
    case '-':
      resultado = n1 - n2;
      break;
    case '*':
      resultado = n1 * n2;
      break;
    case '/':
      resultado = n1 / n2;
      break;
    case 'c':
      // limpar number1,number2, sinal e resposta
      op1.value = '';
      op2.value = '';
      sinal.innerText = '';
      result.textContent = '';
      return;
    default:
      break;
  }
  result.innerText = resultado;
}
///////////////////////////////////////////////////////////////////
//      ouvindo o evento click
////////////////////////////////////////////////////////////////////
// opPlus.addEventListener('click', () => operacao('+'));
// opMinus.addEventListener('click', () => operacao('-'));
// opMultiply.addEventListener('click', () => operacao('*'));
// opDivide.addEventListener('click', () => operacao('/'));
// opClear.addEventListener('click', () => operacao('c'));

botoes.forEach((botao) => {
  botao.addEventListener('click', operacao)
});


