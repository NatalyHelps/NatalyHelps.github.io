const btn = document.getElementById('btn');
const output = document.getElementById('output');


btn.addEventListener('click', () => {
  let randomNumber = Math.floor(Math.random() * 100);
  output.innerHTML = randomNumber;
});


