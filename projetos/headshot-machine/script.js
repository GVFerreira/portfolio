var altura, largura;
var vidas = 1;
var tempo = 0;

function tamanhoTela(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if (nivel === "normal") {
	criaBotTempo = 2000;
} else if (nivel === "dificil") {
	criaBotTempo = 1000;
} else if (nivel === "coldzera") {
	criaBotTempo = 750;
}

tamanhoTela();

var cronometro = setInterval(function() {
	tempo++;
	document.getElementById('cronometro').innerHTML = tempo + ' segundos';
}, 1000);

function posicaoTela() {

    if(document.getElementById('bot')) {
		document.getElementById('bot').remove()

		if (vidas > 3) {
			window.location.href = "gameover.html";
		} else {
			document.getElementById('vida' + vidas).src = "img/helmet_lose.png";
			vidas++
		}
	}

    var posicaoX = Math.floor(Math.random() * largura) - 90;
	var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

    var bot = document.createElement('img');
    bot.src = avatarAleatorio();
    bot.className = tamanhoAleatorio() + ' ' + avatarAleatorio();
	bot.style.left = posicaoX + 'px';
	bot.style.top = posicaoY + 'px';
	bot.style.position = 'absolute';
	bot.id = 'bot';

	bot.onclick = function () {
		this.remove();
	}

	document.body.appendChild(bot);
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 2);
	
	switch(classe) {
		case 0:
			return 'tamanho1';
		
		case 1:
			return 'tamanho2';
	}
}

function avatarAleatorio() {
	var avatar = Math.floor(Math.random() * 2);
	
	switch(avatar) {
		case 0:
			return 'img/ct.png';
		
		case 1:
			return 'img/tr.png';
	}
}

function mudarFundo() {
	var fundo = Math.floor(Math.random() * 3);
	
	switch(fundo) {
		case 0:
			return 'mirage';
		
		case 1:
			return 'cache';

		case 2:
			return 'inferno';
	}
}

var background = document.getElementById('corpo');
background.className = mudarFundo();




