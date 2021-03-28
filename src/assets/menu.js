function myMenu() {
  document.getElementById('img_div').outerHTML = '';
  const content = document.getElementById('content');
  const div = document.createElement('div');
  div.id = 'img_div';
  div.classList.add('test');
  div.style.backgroundImage = "url('https://images.anovaculinary.com/sous-vide-salmon-2/directions/sous-vide-salmon-2-directions-image-1.jpg')";
  div.style.height = '130vh';
  div.style.width = '100%';
  div.style.backgroundSize = '100%';
  div.style.color = 'white';
  content.appendChild(div);
  div.innerHTML += '<div id="modal01" class="modal" onclick="this.style.display=\'none\'"> <img id="img01" class="mx-auto d-block w-50"> <p id="caption" class="text-center text-dark font-weight-bold bg-light"></p> </div>';
  const menu2 = document.createElement('div');
  const imgDiv = document.getElementById('img_div');
  menu2.classList.add(...['d-flex', 'flex-wrap', 'justify-content-center', 'w-50', 'mx-auto', 'flex-column', 'p-5']);
  imgDiv.appendChild(menu2);
  imgDiv.appendChild(menu2);
  const h1 = document.createElement('H1');
  h1.classList.add(...['text-center', 'text-secondary']);
  const h2 = document.createElement('H2');
  h2.classList.add(...['text-center', 'text-secondary']);
  h1.appendChild(document.createTextNode('Contact Us For Better Information'));
  h2.appendChild(document.createTextNode('+569-12345678'));
  const card6 = document.createElement('img');
  card6.classList.add('m-5');
  card6.src = 'https://media.istockphoto.com/photos/happy-group-of-people-working-at-a-call-center-picture-id878674818?k=6&m=878674818&s=612x612&w=0&h=RBwiU_Lk7aArVuBPb0-NMrgxRv10jxTQOk_fF7o-3sQ=';
  card6.style.height = '500px';
  card6.style.width = '750px';
  card6.style.objectFit = 'cover';
  menu2.appendChild(card6);

  menu2.appendChild(h1);
  menu2.appendChild(h2);
}

export default myMenu;
