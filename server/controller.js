module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ["A dubious friend may be an enemy in camouflage.","A golden egg of opportunity falls into your lap this month.","Bide your time, for success is near.","Dedicate yourself with a calm mind to the task at hand.","Distance yourself from the vain.","Do not make extra work for yourself.","Good news will come to you by mail.","New ideas could be profitable."]

        // randomize fortunes
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
    },
    getQuote: (req, res) => {
        const quote = ["Flustering opponents means acting in such a way as to prevent them from having a steady mind.", 
        "If your crushing is weak, it can backfire.",
         "The more original a discovery, the more obvious it seems afterwards",
          "Taking water as the basic point of reference, one makes the mind full.",
           "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
           "Be the change that you wish to see in the world.",
           "Logic will get you from A to Z; imagination will get you everywhere."
        ]

        let randomIndex = Math.floor(Math.random() * quote.length);
        let randomQuote = quote[randomIndex];

        res.status(200).send(randomQuote);
    }

}