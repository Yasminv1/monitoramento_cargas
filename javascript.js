const tabelaCorpo = document.getElementById('tabelaCorpo');
const adicionarEntradaBtn = document.getElementById('adicionarEntrada');

adicionarEntradaBtn.addEventListener('click', () => {
    const data = prompt('Digite a data (DD/MM/AAAA):');
    const hora = prompt('Digite a hora (HH:MM):');
    const entrada = prompt('Digite a entrada da carga:');
    const saida = prompt('Digite a saida da carga:');
    const cargaCaminhao = prompt('Digite a carga total do caminhão:');

    // Criar uma nova linha na tabela
    const newRow = document.createElement('tr');
    
    // Adicionar células à nova linha
    newRow.innerHTML = `
        <td>${data}</td>
        <td>${hora}</td>
        <td>${entrada}</td>
        <td>${saida}</td>
        <td>${cargaCaminhao}</td>
    `;
    
    // Adicionar a nova linha ao corpo da tabela
    tabelaCorpo.appendChild(newRow);
});

let sorteios = 0; // Variável para rastrear a quantidade de sorteios
let blocos = []; // Array para rastrear os blocos com pesos individuais

// Função para sortear um número de carga entre 0 e 100
function sortearCarga() {
    const carga = Math.floor(Math.random() * 50);
    sorteios++; // Incrementa a quantidade de sorteios
    return carga;
}

// Função para atualizar a carga visualmente com blocos e mostrar o peso
function atualizarCarga() {
    const quadradinhosElement = document.getElementById('quadradinhos');
    const quantidadeSorteiosElement = document.getElementById('quantidadeSorteios');
    const pesoCargaElement = document.getElementById('pesoCarga');
    const novaCarga = sortearCarga();

    // Limpar blocos anteriores
    quadradinhosElement.innerHTML = '';
    blocos = [];

    // Calcular o peso individual de cada bloco
    for (let i = 0; i < novaCarga; i++) {
        const pesoBloco = Math.floor(Math.random() * 11); // Peso entre 0 e 10 kg
        blocos.push(pesoBloco);

        // Criar uma nova linha a cada 6 blocos
        if (i % 10 === 0) {
            const linha = document.createElement('div');
            linha.classList.add('linha');
            quadradinhosElement.appendChild(linha);
        }

        // Exibir o bloco com seu peso individual
        const bloco = document.createElement('div');
        bloco.classList.add('quadradinho');
        bloco.textContent = `${pesoBloco} kg`;
        quadradinhosElement.lastChild.appendChild(bloco);
    }

    // Calcular o peso total da carga
    const pesoTotal = blocos.reduce((acc, pesoBloco) => acc + pesoBloco, 0);

    quantidadeSorteiosElement.textContent = `Número de Sorteios: ${sorteios}`;
    pesoCargaElement.textContent = `Peso da Carga: ${pesoTotal} kg`;
}

// Event listener para o botão de sorteio
const sortearBtn = document.getElementById('sortearBtn');
sortearBtn.addEventListener('click', atualizarCarga);

// Atualize a carga inicial
atualizarCarga();
