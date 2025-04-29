// // Завдання 3: Ввід імені
// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");
// nameInput.addEventListener("input", (event) => {
//   const trimmedValue = event.target.value.trim();
//   nameOutput.textContent = trimmedValue || "Anonymous";
// });

/* Завдання 3: Привітання */
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const name = nameInput.value.trim();
  nameOutput.textContent = name !== '' ? name : 'Anonymous';
});

