let menu = document.getElementById("menu")
let iconeBarras = document.querySelector(".icone-barras")
let iconeX = document.querySelector(".icone-x")
let drop = document.querySelector(".drop")

var valor = true

function abrirFecharMenu() {
    if(valor === true){
        iconeBarras.classList = "icone-barras desativado"
        iconeX.classList = "icone-x ativado"
        drop.classList = "drop ativadoflex"
        valor = false
    }else{
        iconeBarras.classList = "icone-barras ativado"
        iconeX.classList = "icone-x desativado"
        drop.classList = "drop desativado"
        valor = true
    }
    console.log(valor)
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

const solicitarOrcamento = () => {
    // Obter o valor dos inputs
    let valorNome = document.getElementById("campo-nome").value;
    let valorEmail = document.getElementById("campo-email").value;
    let valorDescricao = document.getElementById('campo-descricao').value;

    console.log(valorNome);
    console.log(valorEmail);
    console.log(valorDescricao);

    // Organizar os dados desse input em um objeto
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    };

    // Enviar requisição para a API usando o método fetch
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
        .then(resposta => {
            console.log(resposta)
            document.querySelector("#contato form").reset()
            alert("Solicitação cadastrada")
        })
        .catch(erro => {
            // CASO ERRO - alert com msg erro
            console.error(erro)
            alert("Erro na requisição")
        })
    
        event.preventDefault()
};

// // Adicionar evento de envio ao formulário
// document.querySelector(".contato").addEventListener("submit", function (event) {
//     event.preventDefault(); // Evita o envio padrão do formulário
//     solicitarOrcamento(); // Chama a função que você definiu
// });