// Definindo as dimensões da imagem pixelada
const numRows = 5; // Número de linhas
const numCols = 5; // Número de colunas
const pixelSize = 20; // Tamanho de cada pixel em pixels

// Criando um canvas HTML para desenhar a imagem
const canvas = document.createElement('canvas');
canvas.width = numCols * pixelSize;
canvas.height = numRows * pixelSize;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Array para armazenar as coordenadas
const coordinates = [];

// Desenhando a imagem pixelada e adicionando coordenadas
for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        // Calculando coordenadas
        const x = col * pixelSize;
        const y = row * pixelSize;

        // Desenhando um quadrado representando um pixel
        ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        ctx.fillRect(x, y, pixelSize, pixelSize);

        // Adicionando coordenadas ao array
        coordinates.push({ x: x, y: y });
    }
}

// Embaralhando as coordenadas
shuffleArray(coordinates);

// Adicionando coordenadas ao canvas
ctx.font = '10px Arial';
ctx.fillStyle = 'black';
coordinates.forEach((coord, index) => {
    const label = String.fromCharCode(65 + Math.floor(index / numCols)) + (index % numCols + 1);
    ctx.fillText(label, coord.x + 2, coord.y + 10);
});

// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
