// Lista de palavras para escolher aleatoriamente
var palavras = [
    "Maçã", "Banana", "Abacaxi", "Uva", "Morango",
    "Laranja", "Pêra", "Cereja", "Pêssego", "Ameixa",
    "Kiwi", "Melão", "Melancia", "Limão", "Manga",
    "Goiaba", "Coco", "Maracujá", "Figo", "Caju",
    "Romã", "Pitanga", "Amora", "Framboesa", "Mirtilo",
    "Açaí", "Jabuticaba", "Graviola", "Pera-do-Pará", "Tangerina",
    "Abacate", "Damasco", "Nectarina", "Noz", "Avelã",
    "Castanha", "Caju", "Pistache", "Amêndoa", "Castanha-do-Pará",
    "Carambola", "Lichia", "Jaca", "Jambo", "Tamarindo",
    "Rambutã", "Pomelo", "Physalis", "Sapoti", "Sapucaia",
    "Tâmara", "Pera-asiática", "Nêspera", "Caqui", "Groselha",
    "Groselha-negra", "Cassis", "Mirabelle", "Pepino", "Tomate",
    "Abóbora", "Abobrinha", "Berinjela", "Pimentão", "Quiabo",
    "Rabanete", "Alface", "Espinafre", "Rúcula", "Agrião",
    "Salsinha", "Cebolinha", "Coentro", "Manjericão", "Hortelã",
    "Alecrim", "Tomilho", "Sálvia", "Erva-doce", "Gengibre",
    "Canela", "Anis", "Cardamomo", "Açafrão", "Baunilha",
    "Cacau", "Café", "Chá", "Mate", "Guaraná",
    "Açaí", "Cupuaçu", "Bacaba", "Burahem", "Muruci"
];


// Função para escolher aleatoriamente uma palavra da lista
function escolherPalavraAleatoria() {
    var indice = Math.floor(Math.random() * palavras.length);
    return palavras[indice];
}

// Função para verificar e atualizar a palavra
function verificarPalavra() {
    var palavraAtual = document.getElementById("palavra").innerText;
    var respostaDigitada = document.getElementById("resposta").value;
    var sinalizador = document.getElementById("sinalizador");

    // Verifica se a palavra digitada é igual à palavra atual
    if (respostaDigitada.toLowerCase() === palavraAtual.toLowerCase()) {
        // Muda a cor do sinalizador para verde por 1 segundo
        sinalizador.style.backgroundColor = "green";
        setTimeout(function() {
            sinalizador.style.backgroundColor = "red"; // Volta à cor original
        }, 500);

        // Escolhe uma nova palavra aleatoriamente
        var novaPalavra = escolherPalavraAleatoria();

        // Atualiza a palavra exibida
        document.getElementById("palavra").innerText = novaPalavra;

        // Limpa o campo de entrada
        document.getElementById("resposta").value = "";
    } else {
        // Muda a cor do sinalizador para vermelho
        sinalizador.style.backgroundColor = "red";
    }
}
