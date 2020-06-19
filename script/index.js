// Criando objeto Paises
const paises = [

	{
		nome: "Brasil",
		sigla: "bra",
		cod: "pt",
		url_img: "https://image.flaticon.com/icons/svg/206/206597.svg",
		text: "Olá! Seja bem-vindo :)"
	},
	{
		nome: "Estados Unidos",
		sigla: "usa",
		cod: "en",
		url_img: "https://image.flaticon.com/icons/svg/206/206626.svg",
		text: "Hello! Welcome :)"

	},
	{
		nome: "França",
		sigla: "fra",
		cod: "fr",
		url_img: "https://image.flaticon.com/icons/svg/206/206657.svg",
		text: "Bonjour et bienvenue :)"
	},
	{
		nome: "Argentina",
		sigla: "arg",
		cod: "es",
		url_img: "https://image.flaticon.com/icons/svg/206/206654.svg",
		text: "¡Hola! Bienvenido :)"
	},
	{
		nome: "Alemanha",
		sigla: "ger",
		cod: "de",
		url_img: "https://image.flaticon.com/icons/svg/206/206690.svg",
		text: "Hallo! Willkommen :)"
	},
	{
		nome: "Japão",
		sigla: "jpn",
		cod: "ja",
		url_img: "https://image.flaticon.com/icons/svg/206/206789.svg",
		text: "こんにちは！ようこそ :)"
	}
]

// Pegando elemento
let mensage = document.getElementById("mensage")
let button = document.querySelector("button")

// criando elemento "img" e "p"
const img = document.createElement("img")
const p = document.createElement("p")

// mensagens
mensage.appendChild(img)
mensage.appendChild(p)


// Pegando os index's do objeto
const index = Object.keys(paises)

let rdnindex = Math.floor(Math.random() * (index.length)) + 0

// console.log("random CEIL: "+ Math.ceil(Math.random() * (index.length)-1))
// console.log("random FLOOR: " + rdnindex)


// Evento cLick
button.addEventListener("click", function () {

	// Pegando index radomico
	let rdnindex = Math.floor(Math.random() * (index.length)) + 0

	// Atribuido index radomico no objeto img
	img.setAttribute("src", paises[rdnindex].url_img)

	// Adicionando texto de acordo com a imagem
	p.innerText = paises[rdnindex].text

	// Alterando css
	mensage.style.display = "inline"
	mensage.style.marginTop = "-5px"
	img.style.height = "180px"
	p.style.textAlign = "center"

	// Timer para voltar para posição inicial
	setTimeout(function () {
		mensage.style.marginTop = "-80px"
		img.style.height = "20px"
	}, 2500)

})



