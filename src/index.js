import myMenu from './assets/menu';
import myContact from './assets/contact';

const content = document.getElementById('content');

const nav = document.createElement('div');
nav.classList.add('m-3');

const h1 = document.createElement('h1');

const ul = document.createElement('ul');
ul.classList.add('navbar-nav');
nav.classList.add('d-flex');
ul.classList.add('d-flex');
ul.classList.add('flex-row');
nav.classList.add('justify-content-between');
nav.classList.add('align-self-center');


const li1 = document.createElement('li');
li1.appendChild(document.createTextNode('Menu'));
li1.classList.add(...(['mx-5', 'mt-3']));


const li2 = document.createElement('li');
li2.appendChild(document.createTextNode('Contact'));
li2.classList.add('mt-3');


ul.appendChild(li1);
ul.appendChild(li2);

content.appendChild(nav);
h1.appendChild(document.createTextNode('The Restaurant'));
h1.onclick = () => {
  window.location.reload(true);
};


nav.appendChild(h1);
nav.appendChild(ul);

const div = document.createElement('div');
div.id = 'img_div';
div.classList.add('test');
div.style.backgroundImage = "url('https://images.anovaculinary.com/sous-vide-salmon-2/directions/sous-vide-salmon-2-directions-image-1.jpg')";
div.style.height = '130vh';
div.style.width = '100%';
div.style.backgroundSize = '100%';
div.style.color = 'white';
content.appendChild(div);

const textDiv = document.createElement('p');
textDiv.id = 'text_div';
textDiv.appendChild(document.createTextNode('an experience that you will never forget'));
textDiv.style.fontSize = '80px';
textDiv.style.textAlign = 'center';
textDiv.style.position = 'absolute';
textDiv.style.top = '50%';
textDiv.style.left = '50%';
textDiv.style.transform = 'translate(-50%, -50%)';
div.appendChild(textDiv);


div.innerHTML += '<div id="modal01" class="modal" onclick="this.style.display=\'none\'"> <img id="img01" class="mx-auto d-block w-50"> <p id="caption" class="text-center text-dark font-weight-bold bg-light"></p> </div>';

li1.onclick = () => {
  myContact();
};

li2.onclick = () => {
  myMenu();
};
