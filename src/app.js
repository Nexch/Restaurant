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
h1.appendChild(document.createTextNode("The Restaurant"));
h1.onclick = function() {
	window.location.reload(true)
}


nav.appendChild(h1)
nav.appendChild(ul)

function createDiv() {
	var content = document.getElementById("content")
	var div = document.createElement("div");
	div.id = "img_div"
	div.classList.add('test');
	div.style.backgroundImage = "url('https://images.anovaculinary.com/sous-vide-salmon-2/directions/sous-vide-salmon-2-directions-image-1.jpg')";
	div.style.height = "130vh";
	div.style.width = "100%";
	div.style.backgroundSize = "100%";
	div.style.color = "white";
	content.appendChild(div);
	div.innerHTML += `<div id="modal01" class="modal" onclick="this.style.display='none'"> <img id="img01" class="mx-auto d-block w-50"> <p id="caption" class="text-center text-dark font-weight-bold bg-light"></p> </div>`;

}
var content = document.getElementById("content")
var div = document.createElement("div");
div.id = "img_div"
div.classList.add('test');
div.style.backgroundImage = "url('https://images.anovaculinary.com/sous-vide-salmon-2/directions/sous-vide-salmon-2-directions-image-1.jpg')";
div.style.height = "130vh";
div.style.width = "100%";
div.style.backgroundSize = "100%";
div.style.color = "white";
content.appendChild(div);

var textDiv = document.createElement("p")
textDiv.id = "text_div"
textDiv.appendChild(document.createTextNode("an experience that you will never forget"));
textDiv.style.fontSize = "80px";
textDiv.style.textAlign = "center";
textDiv.style.position = "absolute";
textDiv.style.top = "50%";
textDiv.style.left = "50%";
textDiv.style.transform = "translate(-50%, -50%)";
div.appendChild(textDiv)


div.innerHTML += `<div id="modal01" class="modal" onclick="this.style.display='none'"> <img id="img01" class="mx-auto d-block w-50"> <p id="caption" class="text-center text-dark font-weight-bold bg-light"></p> </div>`;

li1.onclick = function(){
	document.getElementById("img_div").outerHTML = "";
	createDiv()
	var menu = document.createElement("div")
	img_div = document.getElementById("img_div")
	menu.classList.add(...["d-flex", "flex-wrap", "justify-content-center", "w-50", "mx-auto", "pt-5"])
	img_div.appendChild(menu)
	var card1 = document.createElement("img")
	card1.id = card1
	card1.classList.add("m-5")
	card1.src = 'https://www.chimuadventures.com/blog/wp-content/uploads/2016/06/Ceviche_Peru_shutterstock1.jpg';
	card1.style.height = "300px"
	card1.style.width = "300px"
	card1.style.objectFit = "cover";
	card1.appendChild(document.createTextNode("The best food in the world"));
	menu.appendChild(card1)
	card1.onclick = function(){onClick(this)};
	var card2 = document.createElement("img")
	card2.classList.add("m-5")
	card2.src = 'https://www.chimuadventures.com/blog/wp-content/uploads/2016/06/Ceviche_Peru_shutterstock1.jpg';
	card2.style.height = "300px"
	card2.style.width = "300px"
	card2.style.objectFit = "cover";
	menu.appendChild(card2)
	card2.onclick = function(){onClick(this)};
	var card3 = document.createElement("img")
	card3.classList.add("m-5")
	card3.src = 'https://www.chimuadventures.com/blog/wp-content/uploads/2016/06/Ceviche_Peru_shutterstock1.jpg';
	card3.style.height = "300px"
	card3.style.width = "300px"
	card3.style.objectFit = "cover";
	menu.appendChild(card3)
	card3.onclick = function(){onClick(this)};
	var card4 = document.createElement("img")
	card4.classList.add("m-5")
	card4.src = 'https://www.chimuadventures.com/blog/wp-content/uploads/2016/06/Ceviche_Peru_shutterstock1.jpg';
	card4.style.height = "300px"
	card4.style.width = "300px"
	card4.style.objectFit = "cover";
	menu.appendChild(card4)
	card4.onclick = function(){onClick(this)};
	var card5 = document.createElement("img")
	card5.classList.add("m-5")
	card5.src = 'https://www.chimuadventures.com/blog/wp-content/uploads/2016/06/Ceviche_Peru_shutterstock1.jpg';
	card5.style.height = "300px"
	card5.style.width = "300px"
	card5.style.objectFit = "cover";
	menu.appendChild(card5)
	card5.onclick = function(){onClick(this)};
	var card6 = document.createElement("img")
	card6.classList.add("m-5")
	card6.src = 'https://www.chimuadventures.com/blog/wp-content/uploads/2016/06/Ceviche_Peru_shutterstock1.jpg';
	card6.style.height = "300px"
	card6.style.width = "300px"
	card6.style.objectFit = "cover";
	menu.appendChild(card6)
	card6.onclick = function(){onClick(this)};

};

li2.onclick = function() {
	document.getElementById("img_div").outerHTML = "";
	createDiv()
	var menu2 = document.createElement("div")
	img_div = document.getElementById("img_div")
	menu2.classList.add(...["d-flex", "flex-wrap", "justify-content-center", "w-50", "mx-auto", "flex-column", "p-5"])
	img_div.appendChild(menu2)
	img_div.appendChild(menu2)
	var h1 = document.createElement("H1")
	h1.classList.add(...["text-center", "text-secondary"])
	var h2 = document.createElement("H2")
	h2.classList.add(...["text-center", "text-secondary"])
	h1.appendChild(document.createTextNode("Contact Us For Better Information"))
	h2.appendChild(document.createTextNode("+569-12345678"));
	var card6 = document.createElement("img")
	card6.classList.add("m-5")
	card6.src = 'https://media.istockphoto.com/photos/happy-group-of-people-working-at-a-call-center-picture-id878674818?k=6&m=878674818&s=612x612&w=0&h=RBwiU_Lk7aArVuBPb0-NMrgxRv10jxTQOk_fF7o-3sQ=';
	card6.style.height = "500px"
	card6.style.width = "750px"
	card6.style.objectFit = "cover";
	menu2.appendChild(card6)

	menu2.appendChild(h1)
	menu2.appendChild(h2)




}

function showText(id) {
	document.getElementById(id).style.display = "block";
}

function onClick(element) {
	document.getElementById("img01").src = element.src;
	document.getElementById("modal01").style.display = "block"
	var captionText = document.getElementById("caption");
	captionText.innerHTML = "PRICE: $10";
}
