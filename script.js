document.addEventListener('DOMContentLoaded', () => {
    const inputTarefa = document.getElementById('tarefa');
    const inputData = document.getElementById('data');
    const buttonAdicionar = document.getElementById('adicionar');
    const listaTarefas = document.getElementById('tarefascriadas');

    buttonAdicionar.addEventListener('click', () => {
        const tarefa = inputTarefa.value.trim();
        const dataInput = inputData.value;

        if (tarefa === '' || dataInput === '') {
            alert('Por favor, preencha tanto a tarefa quanto a data.');
            return;
        }

        function formatarData(data) {
            const [ano, mes, dia] = data.split('-');
            return `${dia}/${mes}/${ano}`;
        }

        const dataFormatada = formatarData(dataInput);

        // Cria um novo item de lista
        const li = document.createElement('li');
        li.innerHTML = `
            ${tarefa} - ${dataFormatada}
            <button class="concluir">✔</button>
            <button class="remover">❌</button>
        `;

        // Adiciona o item à lista
        listaTarefas.appendChild(li);

        // Limpa os campos de entrada
        inputTarefa.value = '';
        inputData.value = '';
    });

    listaTarefas.addEventListener('click', (event) => {
        if (event.target.classList.contains('concluir')) {
            const li = event.target.parentElement;
            li.classList.toggle('completed');
        }

        if (event.target.classList.contains('remover')) {
            const li = event.target.parentElement;
            listaTarefas.removeChild(li);
        }
    });
});
