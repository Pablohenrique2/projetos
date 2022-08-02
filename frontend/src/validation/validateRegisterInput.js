import validator from 'validator';

const validateRegisterInput = data => {
  let errors = {};

  const { username, email, password, password2 } = data;

  if (localStorage.users) {
    let lsUsers = localStorage.users;
    lsUsers = JSON.parse(lsUsers);
    let index = lsUsers.findIndex(user => user.username === username);
    if (index > -1) {
      errors.username = 'O nome de usuário já existe!';
    }
  }

  if (validator.isEmpty(username)) {
    errors.username = 'O campo Nome de usuário é obrigatório.';
  }

  if (!validator.isEmail(email)) {
    errors.email = 'Por favor insira um endereço de e-mail válido.';
  }

  if (validator.isEmpty(email)) {
    errors.email = 'O campo E-mail é obrigatório.';
  }

  if (validator.isEmpty(password)) {
    errors.password = 'O campo Senha é obrigatório.';
  }

  if (!validator.equals(password, password2)) {
    errors.password2 = 'A senha deve corresponder!';
  }

  if (validator.isEmpty(password2)) {
    errors.password2 = 'O campo Confirmar Senha é obrigatório.';
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default validateRegisterInput;
