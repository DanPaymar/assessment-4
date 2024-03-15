//
// create a base url
const baseURL = "http://localhost:4000/api"

// create variables to store buttons in
const complimentBtn = document.getElementById("complimentButton")
const fotuneBtn = document.getElementById("#fortuneBtn")

const inputElement = document.querySelector("#inputEle")
const inputBtn = document.querySelector("#inputBtn")

const capItem = document.querySelector(".cap")


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

function submitFunc() {
    const id = inputElement.value

    axios.get(`${baseURL}/coffee/${id}`)
        .then((res) => {
            console.log(res.data)

            if (inputElement.value < 5) {
                alert(`You need to drink more coffee!`)
            }
            if (inputElement.value > 5 && inputElement.value < 10) {
                alert(`You're in the sweet spot. Keep it up.`)
            }
            if (inputElement.value > 10) {
                alert(`You might want to ease off there buddy.`)
            } else {
                alert('Try entering a number')
            }
        })
}

function dropDown() {
    axios.get(`${baseURL}/selection`)
        .then((res) => {
            console.log(res.data)

            if (capItem.value === capItem.cap) {
                alert('Good choice. If you drink 3 of these you will be motivated.')
            }
            if (capItem.value === capItem.latte) {
                alert(`I hope you're thirsty. You're going to need to drink 5 lattes to boost your morale.`)
            }
            if (capItem.value === capItem.esp) {
                alert(`YES! YES! YES! 10 shots of these and you'll be achieving all your goals, or bouncing off the walls.`)
            }
        })
}
// event listeners

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', fortuneFunc)
inputBtn.addEventListener('click', submitFunc)
capItem.addEventListener('click', dropDown)