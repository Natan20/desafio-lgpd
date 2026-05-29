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
FUNÇÃO POST
Captura os dados do formulário
e cria um objeto Contato
========================================
*/
function Post(form) {

    // cria objeto com os dados informados
    const dadosContato = new Contato(
        form.elements["nome"].value,
        form.elements["email"].value,
        form.elements["telefone"].value,
        form.elements["contato"].value,
        form.elements["mensagem"].value
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

    // verifica se algum campo está vazio
    if (
        dados.nome.trim() === "" ||
        dados.email.trim() === "" ||
        dados.telefone.trim() === "" ||
        dados.tipoContato.trim() === "" ||
        dados.mensagem.trim() === ""
    ) {

        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    // mensagem de sucesso
    alert(
        `Obrigado ${dados.nome}! Sua mensagem foi enviada com sucesso.`
    );

    return true;
}