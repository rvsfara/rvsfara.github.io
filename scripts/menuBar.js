//Obtem a referencia ao objeto da div 
dvImgPerfil  = document.getElementById("dvImgPerfil");
dvInformacaoPessoal = document.getElementById("dvInformacaoPessoal");
dvFormacao = document.getElementById("dvFormacao");
dvExperiencia = document.getElementById("dvExperiencia");
dvCursos  = document.getElementById("dvCursos");
dvLinha  = document.getElementById("dvLinha");
//esconde todas as informações para que o usuário possa selecionar o que exibir
//exibir a página de cursos
funcaoLinhaTempo();
//função para ocultar a visualização facilitando a visualização
function escondeTudo(){
	dvInformacaoPessoal.style.display = "none";
	dvFormacao.style.display = "none";
	dvExperiencia.style.display = "none";
	dvCursos.style.display = "none";
	dvLinha.style.display = "none";
	dvImgPerfil.style.display = "none";
	
}
function funcaoDadosPessoais(){
	escondeTudo();
	dvImgPerfil.style.display = "block";
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
function funcaoLinhaTempo(){
	escondeTudo();
	dvLinha.style.display = "block";
}
