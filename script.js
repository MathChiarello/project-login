users = [
  {
    user: 'Matheus',
    password: '123',
  },
]

const inputUser = document.querySelector('#user');
const inputPassword = document.querySelector('#password');
const btnSubmit = document.querySelector('#submit');
const btnRegister = document.querySelector('#register');

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  for (let index = 0; index < users.length; index += 1) {
    if ((users[index].user === inputUser.value) &&
    (users[index].password === inputPassword.value)) {
      alert('ACESSO CONCLUÍDO!');
    } else {
      alert('USUÁRIO NÃO ENCONTRADO');
    }
  }
  console.log(users);
  inputPassword.value = '';
});