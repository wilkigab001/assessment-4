const fortunes = ['A beautiful, smart, and loving person will be coming into your life.', 'A person of words and not deeds is like a garden full of weeds.', 'An acquaintance of the past will affect you in the near future.', 'Education is the ability to meet lifes situations.', 'Please visit us at wontonfood.com']

const colorsArray = ['red', 'green', 'blue']

module.exports = {
    
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune)
    },

    getColors: (req, res) => {
        res.status(200).send(colorsArray)
        for(i = 0; i < colorsArray.length; i++){
            let data = colorsArray[i]
            let style = document.createElement('li')
            style.innerHTML = data
            colors.appendChild(style)
        }
    },

    addColor: (req,res) => {
        let {color} = req.body
        colorsArray.push(color)
        res.status(200).send(colorsArray)
    },

    deleteColors: (req,res) => {
        let index = colorsArray.findIndex(elem => elem.id === req.params.id)
        colorsArray.splice(index, 1)

        res.status(200).send(colorsArray)
    }
    

}