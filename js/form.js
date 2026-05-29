/*
========================================
CLASSE CONTATO
Representa os dados enviados pelo formulário
========================================
*/
class Contato {
    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}


/*
========================================
CONTROLE DO BOTÃO (LGPD)
Executa assim que a página é carregada
========================================
*/
document.addEventListener("DOMContentLoaded", function () {
    // Capturar os elementos do HTML pelos IDs
    const checkboxTermos = document.getElementById("termos");
    const btnEnviar = document.getElementById("btnEnviar");

    if (checkboxTermos && btnEnviar) {
        // Garante que o botão comece desabilitado ao iniciar
        btnEnviar.disabled = true;

        // Evento para habilitar/desabilitar botão em tempo real
        checkboxTermos.addEventListener("change", function () {
            // Se estiver marcado, desabilita = false (habilita). Se não, desabilita = true.
            btnEnviar.disabled = !checkboxTermos.checked;
        });
    }
});

/*
========================================
FUNÇÃO POST
Captura os dados do formulário
e cria um objeto Contato
========================================
*/
function Post(form) {
    // Captura o valor de mensagem se o campo existir, caso contrário envia vazio
    const campoMensagem = form.elements["mensagem"] ? form.elements["mensagem"].value : "";

    // cria objeto com os dados informados
    const dadosContato = new Contato(
        form.elements["nome"].value,
        form.elements["email"].value,
        form.elements["telefone"].value,
        form.elements["contato"].value,
        campoMensagem
    );

    // envia os dados para validação
    Enviar(dadosContato);

    // exibe os dados no console
    console.log("Dados enviados:", dadosContato);

    return false;
}

/*
========================================
FUNÇÃO ENVIAR
Valida os campos e exibe mensagem
========================================
*/
function Enviar(dados) {
    // verifica se algum campo está vazio (ignora a mensagem caso ela não exista no HTML)
    if (
        dados.nome.trim() === "" ||
        dados.email.trim() === "" ||
        dados.telefone.trim() === "" ||
        dados.tipoContato.trim() === ""
    ) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    // mensagem de sucesso
    alert(`Obrigado ${dados.nome}! Sua mensagem foi enviada com sucesso.`);
    return true;
}