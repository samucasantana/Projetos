var $inputSenha,
    $inputConfirmarSenha;

const getSenha = ($inputSenha,$inputConfirmarSenha) => {
  $inputSenha = document.getElementById("senha").value
  $inputConfirmarSenha = document.getElementById("Confsenha").value
}
const mascaraDeTelefone = (telefone) => {
  const $inputTelefoneAtual = telefone.value;
  const isCell = $inputTelefoneAtual.length === 9;
  let textoAjustado;
  if(isCell){
      const part1 = $inputTelefoneAtual.slice(0,5);
      const part2 = $inputTelefoneAtual.slice(5,9);
      textoAjustado = `${part1}-${part2}`  
  } else {
      const part1 = $inputTelefone.slice(0,4);
      const part2 = $inputTelefone.slice(4,8);
      textoAjustado = `${part1}-${part2}`
  }
  telefone.value = textoAjustado;
}
const tiraHifen = ($inputTelefone) => {
  const $inputTelefoneAtual = telefone.value;
  const textoAjustado = $inputTelefoneAtual.replace(/\-/g,'');
  telefone.value = textoAjustado;
}
/*
  corpo da função
  const functionInput = () => {}
*/
functionInput();
getTelefone();
getSenha();