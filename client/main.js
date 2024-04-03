//

const { default: axios } = require("axios")

// create a base url
const baseURL = "http://localhost:4000/api"

// create variables to store buttons in
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("#fortuneBtn")
const quoteBtn = document.getElementById("#quoteBtn")

const inputElement = document.querySelector("#inputEle")
const inputBtn = document.querySelector("#inputBtn")

const inputName = document.querySelector("#inputName")
const btnName = document.querySelector("inputBtnName")

const dropDownItem = document.querySelector("#dropBtn")
const dropOption = document.querySelector(".dropdown-menu")
const value = dropOption.value


// functions for button actions
const getCompliment = () => {
    axios.get(`${baseURL}/compliment`)
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const fortuneFunc = () => {
    axios.get(`${baseURL}/fortune`)
        .then(res => {
            const data = res.data;
            alert(data)
        })
}

const getQuote = () => {
    axios.get(`${baseURL}/quote`)
    .then(res => {
        const data = res.data;
        alert(data)
    })
}

function submitFunc() {
    const id = inputElement.value

    axios.get(`${baseURL}/coffee/${id}`)
        .then((res) => {
            console.log(res.data)

            if (inputElement.value <= 5) {
                return alert(`You need to drink more coffee!`)
            }
            if (inputElement.value > 5 && inputElement.value <= 10) {
                return alert(`You're in the sweet spot. Keep it up.`)
            }
            if (inputElement.value > 10) {
                return alert(`You might want to ease off there buddy.`)
            } else {
                return alert('Try entering a number')
            }
        })
}

function dropDown() {
    let cap = this.value
    let latte = this.value
    let esp = this.value

    axios.get(`${baseURL}/selection`)
        .then((res) => {
            console.log(res.data)

            if (cap) {
                console.log('tapped cap')
                alert('Good choice. If you drink 3 of these you will be motivated.')
            }
            if (latte) {
                console.log('tapped latte')
                alert(`I hope you're thirsty. You're going to need to drink 5 lattes to boost your morale.`)
            }
            if (esp) {
                console.log('tapped esp')
                alert(`YES! 10 shots of these and you'll be achieving all your goals, or bouncing off the walls.`)
            }
        })
}

function enterName() {
    axios.post(`${base/URL}/name`)
    .then(res => {
        const data = res.data;
        alert(data)
    })
}
console.log(enterName)
// event listeners
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', fortuneFunc)
inputBtn.addEventListener('click', submitFunc)
dropDownItem.addEventListener('click', dropDown)
quoteBtn.addEventListener('click', getQuote)
btnName.addEventListener('click', enterName)
