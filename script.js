function pesquisar(){
    var input, filtro, jogos, jogosItens, jogoName;
    input = document.getElementById("pesquisa");
    filtro = input.value.toUpperCase();
    jogos = document.getElementById("jogos");
    jogosItens = jogos.getElementsByTagName("li");
    for(var i=0;i<jogosItens.length;i++){
        jogoName = jogosItens[i].getElementsByTagName("a")[0];
        if(jogoName.innerHTML.toUpperCase().indexOf(filtro)>-1){
            jogosItens[i].style.display="";
        } else{
            jogosItens[i].style.display="none";
        }
    }
}