import validator from 'validator';

const validateRegisterInput = data => {
  let errors = {};

  const { username, password } = data;

  if (validator.isEmpty(username)) {
    errors.username = 'O campo Nome de usuário é obrigatório.';
  }

  if (validator.isEmpty(password)) {
    errors.password = 'O campo Senha é obrigatório.';
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default validateRegisterInput;
