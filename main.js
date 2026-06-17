// Arquivo para código javascript

const url = "https://6a29e13cf59cb8f65f1db11a.mockapi.io/material"

const botaoCadastrar = document.getElementById("btn-cadastrar");
const botaoDarBaixa = document.getElementById("btn-baixar");

botaoCadastrar.addEventListener("click", () => {
    const nome = document.getElementById('input-nome').value;
    const quantidade = document.getElementById('input-quantidade').value;

    if (!nome || !quantidade) {
        alert("Favor, preencher os campos")
        return;
    } else {
        const material = {
            nome,
            quantidade
        }
        cadastrar(material);
        document.getElementById('input-nome').value = '';
        document.getElementById('input-quantidade').value = '';
    }
})

async function cadastrar(material) {

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(material)
    });

    listar();
}


async function listar() {
    const res = await fetch(url);
    const dados = await res.json();

    fazerTabela(dados);
}

function fazerTabela(dados) {

    const tabela = document.getElementById("lista-materiais");

    tabela.innerHTML = `
        <thead>
            <tr>
                <th>Produto</th>
                <th>Unidades</th>
                <th>Ações</th>
            </tr>
        </thead>
    `;

    dados.forEach(material => {

        tabela.innerHTML += `
            <tr>
                <td>${material.nome}</td>
                <td>${material.quantidade}</td>
                <td>
                    <button class"btn-baixar" onclick="darBaixa('${material}')>baixar</button>
                </td>
                <td>
                    <button class"btn-excluir">deletar</button>
                </td>
            </tr>
        `;

    });
}

async function deletar(material) {
    const quantidadeRetirada = document.getElementById('input-retirada').value;

    if (!validarRetirada(material.quantidade, quantidadeRetirada)) {
        alert("quantidade incorreta")
    }
}


function validarRetirada(estoqueAtual, quantidadeRetirada) {

}

listar();