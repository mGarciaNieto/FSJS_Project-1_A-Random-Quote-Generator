/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
@author Manuel Garcia-Nieto
******************************************/

'use strict'

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
const quotes = [
  {
    quote: "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    source: 'Nicole Kidman',
    citation: 'Lighthouse',
    year: 2001,
    tags: 'Inspirational'
  },
  {
    quote: 'In the long run, the sharpest weapon of all is a kind and gentle spirit.',
    source: 'Anne Frank',
    citation: 'The Diary of Anne Frank',
    year: 1945,
    tags: 'Book'
  },
  {
    quote: 'Make it so!',
    source: 'Captain Jean Luc Picard',
    citation: 'Star Treck: The Next Generation'
  },
  {
    quote: 'Optimism is the faith that leads to achievement',
    source: 'Hellen Keller'
  },
  {
    quote: 'Never memorize something that you can look up.',
    source: 'Albert Einstein',
    tags: 'Theoretical Physicist'
  },
  {
    quote:
      'If you know the enemy and you know yourself, you need not fear the result of a hundred battles. If you know yourself but not the enemy, for every victory gained you will also suffer a defeat. If you know neither the enemy nor yourself, you will succumb in every battle.',
    source: 'Sun Tzu',
    citation: 'The Art of War',
    year: '400 BC',
    tags: 'Book'
  }
]

/***
 * `BACKGROUND_COLOR` array
 ***/
const BACKGROUND_COLOR = ['#808080', '#17202a', '#1162ac', '#aeb6bf', '#f1948a', '#b491c3', '#1b2631']

/**
 * `getRandomNumber` function
 */
function getRandomNumber() {
  return Math.floor(Math.random() * quotes.length)
}

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote() {
  return quotes[getRandomNumber()]
}
/**
 * `getRamdonColor`function
 */
function getRandomColor() {
  return BACKGROUND_COLOR[getRandomNumber()]
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  const randomQuote = getRandomQuote()
  let strHTML = `<p class='quote'> ${randomQuote.quote} </p><p class='source'> ${randomQuote.source}`
  if (randomQuote.hasOwnProperty('citation')) {
    strHTML += `<span class="citation">${randomQuote.citation}</span>`
  }
  if (randomQuote.hasOwnProperty('year')) {
    strHTML += `<span class="year">${randomQuote.year}</span>`
  }
  if (randomQuote.hasOwnProperty('tags')) {
    strHTML += `<span class="tags">${randomQuote.tags}</span>`
  }
  strHTML += `</p>`
  document.getElementById('quote-box').innerHTML = strHTML
  document.querySelector('.container').style.backgroundColor = getRandomColor()
}

/**
 * `setInterval` function
 *
 * @param  {func} printQuote - Function
 * @param  {int} 10000 - Time in milliseconds to delay between executions, in this case 10 seconds
 */
setInterval(printQuote, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener('click', printQuote, false)
