const messages = [
    "oscar",
    "ana",
    "nicalai",
    "laura",
    "diego",
    "pablo",
    "daniel",
    "andres"
]

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };