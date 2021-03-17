var nav = document.createElement("div")
nav.classList.add("m-3")

var h1 = document.createElement('h1');

var ul = document.createElement("ul")
ul.classList.add("navbar-nav")
nav.classList.add("d-flex")
ul.classList.add("d-flex")
ul.classList.add("flex-row")
nav.classList.add("justify-content-between")
nav.classList.add("align-self-center")


var li1 = document.createElement("li")
li1.appendChild(document.createTextNode("Menu"));
li1.classList.add(...(["mx-5", "mt-3"]))





var li2 = document.createElement("li")
li2.appendChild(document.createTextNode("Contact"));
li2.classList.add("mt-3")


ul.appendChild(li1)
ul.appendChild(li2)


var content = document.getElementById("content")

content.appendChild(nav)
h1.appendChild(document.createTextNode("The best food in the world"));
h1.onclick = function() {
	window.location.reload(true)
}


nav.appendChild(h1)
nav.appendChild(ul)

var div = document.createElement("div");
div.id = "img_div"
div.classList.add('test');
div.style.backgroundImage = "url('https://images.anovaculinary.com/sous-vide-salmon-2/directions/sous-vide-salmon-2-directions-image-1.jpg')";
div.style.backgroundRepeat = "no-repeat";
div.style.height = "100vh";
div.style.width = "100%";
div.style.backgroundSize = "100%";
div.style.color = "white";
content.appendChild(div);

var textDiv = document.createElement("p")
textDiv.id = "text_div"
textDiv.appendChild(document.createTextNode("The best food in the world"));
textDiv.style.fontSize = "80px";
textDiv.style.textAlign = "center";
textDiv.style.position = "absolute";
textDiv.style.top = "50%";
textDiv.style.left = "50%";
textDiv.style.transform = "translate(-50%, -50%)";
div.appendChild(textDiv)

li1.onclick = function(){
	document.getElementById("text_div").outerHTML = "";
	var menu = document.createElement("div")
	img_div = document.getElementById("img_div")
	img_div.appendChild(menu)
	var card1 = document.createElement("img")
	card1.src = 'https://www.chimuadventures.com/blog/wp-content/uploads/2016/06/Ceviche_Peru_shutterstock1.jpg';
	card1.style.height = "100px"
	card1.style.width = "100px"
	card1.style.objectFit = "cover";
	menu.appendChild(card1)
	var card2 = document.createElement("img")
	card2.src = 'https://www.chimuadventures.com/blog/wp-content/uploads/2016/06/Ceviche_Peru_shutterstock1.jpg';
	card2.style.height = "100px"
	card2.style.width = "100px"
	card2.style.objectFit = "cover";
	menu.appendChild(card2)
	var card3 = document.createElement("div")
	var card4 = document.createElement("div")
	var card5 = document.createElement("div")
	var card6 = document.createElement("div")

};
