import isEmail from 'validator/lib/isEmail';

export default function validations(email = '', password = '') {
  const errors = [];
  const letras = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ';
  const numeros = '0123456789';
  const simbolos = `?./-=+[]<>@!#$%'&*(){}:|;," `;
  // verifica se o email é válido:
  if (!isEmail(email)) errors.push('E-mail inválido!');
  // verifica se a senha tem ao menos 8 caracteres:
  if (password.length < 8)
    errors.push('A senha deve ter ao menos 8 caracteres!');
  // verifica se a senha inica ou termina com espaço vazio:
  if (password[0] === ' ' || password[password.length] === ' ')
    errors.push('A senha não pode iniciar nem terminar com espaços!');
  // verifica se a senha contém ao menos um número:
  let i = password.length - 1;
  let found = false;
  while (i >= 0) {
    if (numeros.indexOf(password[i]) >= 0) {
      found = true;
      break;
    }

    i -= 1;
  }
  if (!found) errors.push('A senha deve conter ao menos um número!');
  // verifica se a senha contém ao menos uma letra (maiúscula ou minúscula):
  i = password.length - 1;
  found = false;
  while (i >= 0) {
    if (letras.indexOf(password[i]) >= 0) {
      found = true;
      break;
    }

    i -= 1;
  }
  if (!found) errors.push('A senha deve conter ao menos uma letra!');
  // verifica se a senha contém ao menos um símbolo:
  i = password.length - 1;
  found = false;
  while (i >= 0) {
    if (simbolos.indexOf(password[i]) >= 0) {
      found = true;
      break;
    }

    i -= 1;
  }
  if (!found)
    errors.push(`A senha deve conter ao menos um dos símbolos: ${simbolos}`);
  // verifica se a senha só contem os números,símbolos e letras permitidos:
  i = password.length - 1;
  found = false;
  while (i >= 0) {
    if (
      !(
        simbolos.indexOf(password[i]) >= 0 ||
        letras.indexOf(password[i]) >= 0 ||
        numeros.indexOf(password[i]) >= 0
      )
    ) {
      found = true;
      break;
    }

    i -= 1;
  }
  if (found) errors.push(`A senha informada possui caracteres inválidos`);
  // retorna o array de erros:
  return errors;
}
