
// ARRAY GLOBAL (guarda os carros selecionados)
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;


    }
} 

// FUNÇÃO: procura posição do carro no array
// retorna índice ou -1 se não encontrar
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}


// ===============================
// FUNÇÃO: adiciona ou remove carro da comparação
// chamada pelo checkbox
function SetCarToCompare(el, carClass) {

    //verificando se o que foi passado para a função é um objeto da classe Car
    if(carClass instanceof Car){

        // ===========================
        // CASO CHECKBOX MARCADO
        if(el.checked){

            // limita a 2 carros
            if(carArr.length >= 2){
                alert("Você só pode selecionar 2 carros para comparação");

                // desfaz marcação
                el.checked = false;
                return;
            }

            // adiciona carro ao array
            carArr.push(carClass);
        }

        // ===========================
        // CASO CHECKBOX DESMARCADO
        else {

            // procura posição do carro
            let index = GetCarArrPosition(carArr, carClass);

            // remove do array se existir
            if(index !== -1){
                carArr.splice(index, 1);
            }
        }

    } else {
        throw "You need set a Car Class";
    }
}

// FUNÇÃO: mostra comparação
// exige 2 carros selecionados
function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    // atualiza tabela antes de mostrar
    UpdateCompareTable();

    // exibe popup
    document.getElementById("compare").style.display = "block";
}

// FUNÇÃO: esconde comparação
function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

// FUNÇÃO: atualiza tabela HTML
// injeta dados dos 2 carros selecionados
function UpdateCompareTable() {

    let car1 = carArr[0];
    let car2 = carArr[1];

    // IMAGEM
    // ===========================

    document.getElementById("compare_image_0").innerHTML = `<img src="${car1.image}" width="120">`;
    
    document.getElementById("compare_image_1").innerHTML = `<img src="${car2.image}" width="120">`;

    // MODELO
    // ===========================
    document.getElementById("compare_modelo_0").innerText = car1.nome;
    document.getElementById("compare_modelo_1").innerText = car2.nome;

    // ALTURA CAÇAMBA
    // ===========================
    document.getElementById("compare_alturacacamba_0").innerText = car1.alturaCacamba;
    document.getElementById("compare_alturacacamba_1").innerText = car2.alturaCacamba;

    // ALTURA VEÍCULO
    // ===========================
    document.getElementById("compare_alturaveiculo_0").innerText = car1.alturaVeiculo;
    document.getElementById("compare_alturaveiculo_1").innerText = car2.alturaVeiculo;

    // ALTURA SOLO
    // ===========================
    document.getElementById("compare_alturasolo_0").innerText = car1.alturaSolo;
    document.getElementById("compare_alturasolo_1").innerText = car2.alturaSolo;

    // CAPACIDADE DE CARGA
    // ===========================
    document.getElementById("compare_capacidadecarga_0").innerText = car1.capacidadeCarga;
    document.getElementById("compare_capacidadecarga_1").innerText = car2.capacidadeCarga;

    // MOTOR
    // ===========================
    document.getElementById("compare_motor_0").innerText = car1.motor;
    document.getElementById("compare_motor_1").innerText = car2.motor;

     // POTÊNCIA
    // ===========================
    document.getElementById("compare_potencia_0").innerText = car1.potencia;
    document.getElementById("compare_potencia_1").innerText = car2.potencia;

    // VOLUME CAÇAMBA
    // ===========================
    document.getElementById("compare_volumecacamba_0").innerText = car1.volumeCacamba;
    document.getElementById("compare_volumecacamba_1").innerText = car2.volumeCacamba;

    // RODA
    // ===========================
    document.getElementById("compare_roda_0").innerText = car1.roda;
    document.getElementById("compare_roda_1").innerText = car2.roda;

    // PREÇO
    // ===========================
    document.getElementById("compare_preco_0").innerText = car1.preco;
    document.getElementById("compare_preco_1").innerText = car2.preco;


}
