dvInformacaoPessoal = document.getElementById("dvInformacaoPessoal");
dvFormacao = document.getElementById("dvFormacao");
dvExperiencia = document.getElementById("dvExperiencia");
dvCursos  = document.getElementById("dvCursos");

function escondeTudo(){
	dvInformacaoPessoal.style.display = "none";
	dvFormacao.style.display = "none";
	dvExperiencia.style.display = "none";
	dvCursos.style.display = "none";
	
}
function funcaoDadosPessoais(){
	escondeTudo();
	dvInformacaoPessoal.style.display = "block";
}
function funcaoFormacao(){
	escondeTudo();
	dvFormacao.style.display = "block";
}
function funcaoExperiencia(){
	escondeTudo();
	dvExperiencia.style.display = "block";
}
function funcaoCursos(){
	escondeTudo();
	dvCursos.style.display = "block";
}
function funcaoProjetos(){
	escondeTudo();
}
