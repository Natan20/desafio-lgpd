

//carousel

// Array responsável por armazenar os itens do carrossel
let carouselArr = [];


//class Carousel
class Carousel {

    //Construtor da Classe
    constructor(image, title, url){

            this.image = image;   // Armazena o caminho da imagem
            this.title = title;  // Armazena o texto/título do slide
            this.url = url;     // Armazena o link do slide

    }

    
     // Método responsável por iniciar o carrossel  
    static Start(arr){
        if(arr){

            if(arr.length > 0){    // Verifica se o array existe
                Carousel._sequence = 0; // Define o índice inicial
                Carousel._size = arr.length; // Guarda o tamanho total do array
                Carousel.Show(); // MOSTRA PRIMEIRO SLIDE   //Carousel.Next(); //start // Exibe o primeiro item imediatamente
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000); // Cria o loop automático do carrossel

                //Botão Próximo 
                document.getElementById("next-btn").addEventListener("click", function(){Carousel.Next();});

                //Botão Anterior
                document.getElementById("prev-btn").addEventListener("click", function(){Carousel.Prev();});

            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Show(){

         // Pega o item atual do array
        let item = carouselArr[Carousel._sequence];

         // Seleciona a DIV da imagem no HTML
        let carouselDiv = document.getElementById("carousel");

        // Seleciona a DIV do título no HTML
        let titleDiv = document.getElementById("carousel-title");

         // Define a imagem como fundo da DIV
        carouselDiv.style.backgroundImage = `url('img/${item.image}')`;

         // Faz a imagem cobrir toda a área
        carouselDiv.style.backgroundSize = "cover";

        // Centraliza a imagem
        carouselDiv.style.backgroundPosition = "center";

        // Garante transição suave (usa seu CSS)
        carouselDiv.style.transition = "all .5s ease-in-out";

        // Injeta o título com link dentro da DIV
        titleDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;


    }


    // Método responsável por trocar os slides
    static Next(){

        // Avança para o próximo slide
        Carousel._sequence++;

        if(Carousel._sequence >=  Carousel._size){
            Carousel._sequence = 0;
        }

       Carousel.Show();

    }

    //Slide anterior
    static Prev(){

        Carousel._sequence--;

        if(Carousel._sequence < 0){

            Carousel._sequence =
                Carousel._size - 1;
        }

        Carousel.Show();
    }

};
