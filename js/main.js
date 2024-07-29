/* Pargraph show or hide */

const help = document.getElementById('help'),
	  message = document.getElementById('message')

if(help){
	help.addEventListener('click', () =>{
		message.classList.add('show-message')
	})
}
if(message){
	message.addEventListener('click', () =>{
		message.classList.remove('show-message')
	})
}

const profile  = document.querySelector('.profile'),
	  poppup  = document.querySelector('.poppup'),
	  writte  = document.querySelector('#writte'),
	  closeBtn = document.querySelectorAll('#close'),
	  textArea = document.querySelector('textarea');

writte.addEventListener('click', ()=>{
	poppup.classList.add('show');
	profile.classList.add('hide');
});

closeBtn.forEach(cBtn =>{
	cBtn.addEventListener('click', () =>{
		poppup.classList.remove('show');
		profile.classList.remove('hide');
		textArea.value = "";
	});
});

