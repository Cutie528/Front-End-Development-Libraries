$(document).ready(function(){
 var quote, author; 
 
 function getNewQuote() { 
  $.ajax({ 
   type: "get", 
   url: "http://api.forismatic.com/api/1.0/", 
   jsonp: 'jsonp', 
   dataType: 'jsonp', 
   data: { 
    method: 'getQuote', 
    lang: 'en', 
    format: 'jsonp' 
   }, 
   success: function(response) { 
    quote = response.quoteText; 
    author = response.quoteAuthor; 
    $('.quote').text('\"' + quote + '\"'); 
    if (author) { 
     $('.author').text('by ' + author); 
    } else { 
     $('.author').text('by Unknown'); 
    } 
   } 
  }); 
 } 
 
 
 getNewQuote(); 
 
 function colors(){
 	return Math.floor(Math.random() * 255);
 }
 
 $('.change').on('click', 
 function(event) { 
  event.preventDefault(); 
  getNewQuote(); 
  var r=colors();
  var g=colors();
  var b=colors();
  console.log(r);
 
  $("body").animate({
  	backgroundColor:"rgb(" + r + "," + g + "," + b + ")"
  	}, 1000);
  $(".quote-text").animate({
  	color:"rgb(" + r + "," + g + "," + b + ")"
  });
  $(".btn").animate({
  	backgroundColor:"rgb(" + r + "," + g + "," + b + ")"
  },1000);
 }); 
 
 $('.twitter').on('click', 
 function(event) { 
  event.preventDefault(); 
  window.open('http://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' by ' + author)); 
 }); 
 
 $('.weibo').on('click', 
 function(event) { 
  event.preventDefault(); 
  window.open('http://v.t.sina.com.cn/share/share.php?title=' + encodeURIComponent(quote + ' by ' + author)); 
 }) 
});

/*
  Code by Gabriel Nunes
  Modified by Todd Chaffee to use Camper gist for JSON Quote data.
*/

/*
const projectName = 'random-quote-machine';
let quotesData;
 var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
var currentQuote = '',
  currentAuthor = '';

function getQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url:
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}

function getRandomQuote() {
  return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );

  $('#tumblr-quote').attr(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(currentAuthor) +
      '&content=' +
      encodeURIComponent(currentQuote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );

  $('.quote-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.quote);
  });

  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(randomQuote.author);
  });

  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });

  $('#new-quote').on('click', getQuote);
});
  */