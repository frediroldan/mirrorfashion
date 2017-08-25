function validaBusca() {
	if (document.getElementById("q").value == '') {
		document.getElementById('formx').style.background = 'red';
		return false;
	}
}

//fazendo a associação da função com o evento
document.getElementById('formx').onsubmit = validaBusca;

function mostaMaisNovidades() {
	//document.querySelector('.novidades .mostra-mais').style.display = 'none';
	document.querySelector('.novidades .mais-produtos').style.display = 'block';
		return false;
}

//fazendo a associação da função com o evento
document.querySelector(".mostra-mais").onclick = mostaMaisNovidades;

var banners = ["img/destaque-home.jpg", "img/destaque-home-2.jpg"];
var bannerAtual = 0;

function trocaBanner() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('.destaque img').src = banners[bannerAtual];
}

var time = setInterval(trocaBanner, 4000);
var botao = document.querySelector(".pause");

	function pausaBanner() {
		if (botao.className == "pause") {
			clearInterval(time);
			botao.className= "play";
		} else {
			time = setInterval(trocaBanner, 4000);
			botao.className= "pause"; 
	}
	return false;
};
botao.onclick = pausaBanner;	

