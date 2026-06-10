// Arquivo para código javascript

const url = "https://6a29e13cf59cb8f65f1db11a.mockapi.io/material"

const botaoCadastrar = document.getElementById("btn-cadastrar");

botaoCadastrar.addEventListener("click", () => {
    const nome = document.getElementById('input-nome').value;
    const quantidade = document.getElementById('input-cadastrar').value;

    if (!nome === '' || !quantidade === '') {
        alert("Favor, preencher os campos")
    } else {
        const material = {
            nome,
            quantidade
        }
        cadastrar(material);
        document.getElementById('input-nome').value = '';
        document.getElementById('input-cadastrar').value = '';
    }
})