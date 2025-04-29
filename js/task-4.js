// // Завдання 4: Логін-форма
// const loginForm = document.querySelector(".login-form");
// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const email = event.target.elements.email.value.trim();
//   const password = event.target.elements.password.value.trim();
//   if (!email || !password) {
//     return alert("All form fields must be filled in");
//   }
//   console.log({ email, password });
//   event.target.reset();
// });


/* Завдання 4: Логін форма */
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = loginForm.elements;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(formData);
  loginForm.reset();
});