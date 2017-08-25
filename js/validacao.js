
function validaCampo() {
	var valor=document.getElementById("busca").value;
	if (valor == "") {
		alert("Preencha o campo busca")
			return false;
	}
}
document.getElementById("formx").onsubmit=validaCampo;
