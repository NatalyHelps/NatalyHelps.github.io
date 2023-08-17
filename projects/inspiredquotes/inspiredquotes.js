const btn = document.getElementById('btn');
const output = document.getElementById('output');
const quote = [
  `"If you push something away, it's still got you. You're busy not doing it" Ram Dass`,
  `"When the flower blooms, the bees come uninvited." -Ramakrishna`,
`"As long as you have some desire about how you think it ought to be, you can't hear how it is." -Ram Dass` ,
];

// Function to format the author's name with bold
function formatAuthor(entry) {
  let parts = entry.split(' -'); // Split at the em-dash
  if (parts.length === 2) {
    return parts[0] + ' -<strong>' + parts[1] + '</strong>'; // Bold the author's name
  } else {
    return entry; // Return unchanged if formatting fails
  }
}

// Iterate through the entries and format the author's names
quote = quote.map(formatAuthor);

btn.addEventListener('click', () => {
  let randomQuote = quote[Math.floor(Math.random() * quote.length)];
  output.innerHTML = randomQuote;
});


