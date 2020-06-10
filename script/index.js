let mensage = document.getElementById("mensage")
let button = document.querySelector(".content2 button")

const bra = "https://image.flaticon.com/icons/svg/206/206597.svg"
const usa = "https://image.flaticon.com/icons/svg/206/206626.svg"
const fra = "https://image.flaticon.com/icons/svg/206/206657.svg"
const arg = "https://image.flaticon.com/icons/svg/206/206654.svg"
const ger = "https://image.flaticon.com/icons/svg/206/206690.svg"
const jpn = "https://image.flaticon.com/icons/svg/206/206789.svg"

// criando elemento "img" e "p"
const img = document.createElement("img")
const p = document.createElement("p")

// mensagens
mensage.appendChild(img).setAttribute("src",bra)
mensage.appendChild(p).innerHTML = "Hello"











button.addEventListener("click", function () {

	mensage.style.display = "inline"
	mensage.style.marginTop = "50px"

	setTimeout(function(){
		mensage.style.marginTop = "-50px"
	},2000)

})



