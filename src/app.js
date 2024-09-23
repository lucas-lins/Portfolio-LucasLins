const section = document.getElementById('resultados-pesquisa');

function buscaProjetos(limpar=true){
    if(limpar==true) section.innerHTML = '';
    for(let dado of projects){
        section.innerHTML += `
        <div class="item-resultado">
            <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-projeto">
            <div class="info-projeto">
                <h2>
                    <a href=${dado.github} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
            <div class="icon-group">
                <div class="icon-container">
                    <a href=${dado.github} target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <div class="icon-container">
                    <a href=${dado.deploy} target="_blank">
                        <i class="fa-solid fa-link"></i>
                    </a>
                </div>
            </div>
        </div>`;
    }
}

function buscaPesquisas(limpar=true){
    if(limpar==true) section.innerHTML = '';
    for(let dado of researches){
        section.innerHTML += `
        <div class="item-resultado">
            <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-projeto">
            <div class="info-projeto">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
            <div class="icon-group">
                <div class="icon-container">
                    <a href=${dado.link} target="_blank">
                        <i class="fa-regular fa-file"></i>
                    </a>
                </div>
                <div class="icon-container">
                    <a href=${dado.lattes} target="_blank">
                        <i class="fas fa-graduation-cap"></i>
                    </a>
                </div>
            </div>
        </div>`;
    }
}

function buscaTudo(){
    section.innerHTML = '';
    buscaProjetos(false);
    buscaPesquisas(false);
}