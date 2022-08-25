let quotes = [
    "hdbjihdvuidvuidsv",
    "vjkidnfvhgdujinbvuidfbvidfbvu9snvstgd",
    "dhgiudehuoiadef9uehfuesdjfoisdjhfwehsj0fj0ij0pwskjdf0ipewjkd",
]

function getQuote() {
    let randomNumber = Math.floor (Math.random() * quotes.length)
    document.getElementById('load-quote').innerHTML = quotes[randomNumber];
}