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
    }

}