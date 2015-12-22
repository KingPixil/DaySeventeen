var quotes = ["Don't cry because it's over, smile because it happened.@Dr. Seuss", "Be yourself; everyone else is already taken.@Oscar Wilde", "No one can make you feel inferior without your consent.@Eleanor Roosevelt", "If you tell the truth, you don't have to remember anything.@Mark Twain", "Always forgive your enemies; nothing annoys them so much.@Oscar Wilde", "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.@Bil Keane", "I love deadlines. I love the whooshing noise they make as they go by.@Douglas Adams"];

randomNum = 0;

$("button").click(function() {
  generateQuote();
  generateGradient();
});

var generateQuote = function() {
  randomNum = Math.floor((Math.random() * quotes.length) + 1);
  var quote = quotes[randomNum].split("@");
  $(".quote").html(quote[0]);
  $(".author").html(quote[1]);
};

