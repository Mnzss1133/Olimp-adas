function buscar (){
    
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    if (campoPesquisa==""){
        section.innerHTML = "<p> Nada foi encontrad. Você precisa digitar algo. </p>"
            return
       }
    campoPesquisa = campoPesquisa.toLocaleLowerCase()
    let resultados   = "";
    let titulo = "";
    let Descrição = "";
    let tags = "";
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase();
        Descrição = dado.Descrição.toLocaleLowerCase();
        tags = dado.tags.toLowerCase();
        if(titulo.includes(campoPesquisa)|| Descrição.includes(campoPesquisa)|| tags.includes(campoPesquisa)){
            //cria um novo elemento
            resultados += `

            <div class="item-resultado">        
                <h2>
                <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.Descrição}</p>
            </div>
            `

        }
        
        
    }
    if(!resultados){
        resultados= " <p>Nada foi encontrado!</p>"
    }
    section.innerHTML = resultados
}

