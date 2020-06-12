// Criando objeto Paises
const paises = [

	{
		nome: "Brasil",
		sigla: "bra",
		url_img: "https://image.flaticon.com/icons/svg/206/206597.svg",
		text: "Ola! Seja muito bem-vindo :)"
	},
	{
		nome: "Estados Unidos",
		sigla: "usa",
		url_img: "https://image.flaticon.com/icons/svg/206/206626.svg",
		text: ""
	},
	{
		nome: "França",
		sigla: "fra",
		url_img: "https://image.flaticon.com/icons/svg/206/206657.svg",
		text: ""
	},
	{
		nome: "Argentina",
		sigla: "arg",
		url_img: "https://image.flaticon.com/icons/svg/206/206654.svg",
		text: ""
	},
	{
		nome: "Alemanha",
		sigla: "ger",
		url_img: "https://image.flaticon.com/icons/svg/206/206690.svg",
		text: ""
	},
	{
		nome: "Japão",
		sigla: "jpn",
		url_img: "https://image.flaticon.com/icons/svg/206/206789.svg",
		text: ""
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

 let rdnindex =  Math.floor(Math.random() * (index.length)) + 0

// console.log("random CEIL: "+ Math.ceil(Math.random() * (index.length)-1))
// console.log("random FLOOR: " + rdnindex)



// Evento cLick
button.addEventListener("click", function () {

 // Pegando index radomico
 let rdnindex =  Math.floor(Math.random() * (index.length)) + 0
 // Atribuido index radomico para peger objeto img
 img.setAttribute("src", paises[rdnindex].url_img)
 // Adicionando texto de acordo com a imagem
 p.innerText = paises[rdnindex].text
 
// Alterando css
	mensage.style.display = "inline"
	mensage.style.marginTop = "0px"
	img.style.height = "150px"
	p.style.textAlign = "center"

	// Timer para voltar para posição inicial
	setTimeout(function () {
		mensage.style.marginTop = "-60px"
		img.style.height = "20px"
	}, 3000)

})



