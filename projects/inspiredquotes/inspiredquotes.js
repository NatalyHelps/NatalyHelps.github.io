const btn = document.getElementById('btn');
const output = document.getElementById('output');
const quote = [
  `"If you push something away, it's still got you. You're busy not doing it" -Ram Dass`,
  `"When the flower blooms, the bees come uninvited." -Ramakrishna`,
`"As long as you have some desire about how you think it ought to be, you can't hear how it is." -Ram Dass` ,
];

btn.addEventListener('click', () => {
  let randomQuote = quote[Math.floor(Math.random() * quote.length)];
  output.innerHTML = randomQuote;
});


