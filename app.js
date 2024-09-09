console.log(portfolio);

let section = document.getElementById("resultados-pesquisa");
console.log(section);

for(let dado of portfolio){
    section.innerHTML += `
    <div class="item-resultado">
        <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-projeto">
        <div class="info-projeto">
            <h2>
                <a href=${dado.link } target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
        </div>
    </div>
`;
}