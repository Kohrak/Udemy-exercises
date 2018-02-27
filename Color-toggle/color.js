

document.getElementsByTagName('button')[0].addEventListener('click', colorToggle);

function colorToggle(){
  document.getElementsByTagName("body")[0].classList.toggle('blackb');
}
