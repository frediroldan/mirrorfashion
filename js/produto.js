$(".cores a").click(function(event) {
$(".foto").attr("src", this.href);
event.preventDefault();
$(".cores a").removeClass("selecionado");
$(this).addClass("selecionado");
});

$(".detalhes").tabs();


