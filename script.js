// Seleção dos elementos do DOM
const inputEmail = document.getElementById('email');
const ajudaEmail = document.getElementById('ajuda-email');

const inputSenha = document.getElementById('senha');
const reqTamanho = document.getElementById('req-tamanho');
const reqMaiuscula = document.getElementById('req-maiuscula');
const reqNumero = document.getElementById('req-numero');

// 1. O AJUDANTE (Campo de E-mail)
// O evento 'change' dispara quando o usuário termina de digitar e sai do campo
inputEmail.addEventListener('change', () => {
  const emailOriginal = inputEmail.value;
 
  // Remove espaços no início e fim (.trim()) e converte para minúsculas (.toLowerCase())
  const emailCorrigido = emailOriginal.trim().toLowerCase();
 
  // Se houve alteração no texto, atualiza o campo e avisa o usuário
  if (emailOriginal !== emailCorrigido) {
    inputEmail.value = emailCorrigido;
    ajudaEmail.textContent = "E-mail formatado automaticamente!";
  } else {
    ajudaEmail.textContent = "";
  }
});

// 2. O FISCAL (Campo de Senha)
// O evento 'input' valida a senha em tempo real conforme o usuário digita
inputSenha.addEventListener('input', () => {
  const senha = inputSenha.value;

  // Regra 1: Pelo menos 8 caracteres
  if (senha.length >= 8) {
    reqTamanho.classList.remove('invalido');
    reqTamanho.classList.add('valido');
  } else {
    reqTamanho.classList.remove('valido');
    reqTamanho.classList.add('invalido');
  }

  // Regra 2: Pelo menos uma letra maiúscula
  const temMaiuscula = /[A-Z]/.test(senha);
  if (temMaiuscula) {
    reqMaiuscula.classList.remove('invalido');
    reqMaiuscula.classList.add('valido');
  } else {
    reqMaiuscula.classList.remove('valido');
    reqMaiuscula.classList.add('invalido');
  }

  // Regra 3: Pelo menos um número
  const temNumero = /[0-9]/.test(senha);
  if (temNumero) {
    reqNumero.classList.remove('invalido');
    reqNumero.classList.add('valido');
  } else {
    reqNumero.classList.remove('valido');
    reqNumero.classList.add('invalido');
  }
});