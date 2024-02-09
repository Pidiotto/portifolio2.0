// Função para carregar e manipular os dados do arquivo JSON
async function carregarCertificados() {
    try {
        // Faz uma requisição AJAX para obter os dados do arquivo JSON
        const resposta = await fetch('/json/certificados.json');
        const dados = await resposta.json();

        // Obtém o elemento onde os certificados serão exibidos
        const certificadosContainer = document.getElementById('certificados-container');

        // Itera sobre os dados dos certificados e cria elementos HTML correspondentes
        dados.forEach(certificado => {
            // Cria um elemento de certificado
            const certificadoElement = document.createElement('div');
            certificadoElement.classList.add('certificado');

            // Cria um elemento de imagem
            const imagemElement = document.createElement('img');
            imagemElement.src = certificado.imagem;
            // Defina outras propriedades da imagem, se necessário

            // Cria um elemento de título
            const tituloElement = document.createElement('h3');
            tituloElement.textContent = certificado.titulo;

            // Cria um elemento de descrição
            const descricaoElement = document.createElement('p');
            descricaoElement.textContent = certificado.descricao;

            // Adiciona os elementos ao certificado
            certificadoElement.appendChild(imagemElement);
            certificadoElement.appendChild(tituloElement);
            certificadoElement.appendChild(descricaoElement);

            // Adiciona o certificado ao contêiner de certificados
            certificadosContainer.appendChild(certificadoElement);

            // Adiciona um evento de clique ao certificado
            certificadoElement.addEventListener('click', () => {
                // Aqui você pode adicionar a lógica para o que acontece quando um certificado é clicado
                console.log('Certificado clicado:', certificado.titulo);
            });
        });
    } catch (erro) {
        console.error('Ocorreu um erro ao carregar os certificados:', erro);
    }
}

// Chama a função para carregar os certificados quando a página for carregada
document.addEventListener('DOMContentLoaded', carregarCertificados);
