let quotes = [
    "Waitforittttttttttt. -Shawn",
    "Get over here! -Scorpion",
    "My life needs editing. -Mort Sahl",
    "Better to remain silent and be thought a fool than to speak out and remove all doubt. -Abraham Lincoln",
    "Two things are infinite: the universe and human stupidity. And I'm not sure about the universe. -Albert Einstein",
    "Before you marry a person, you should first make them use a computer with slow Internet service to see who they really are. -Will Ferrell",
    "How many times do I have to teach you: just because something works doesn’t mean it can’t be improved. -Black Panther"
    
]

function getQuote() {
    let randomNumber = Math.floor (Math.random() * quotes.length)
    document.getElementById('quote-box').innerHTML = quotes[randomNumber];
}