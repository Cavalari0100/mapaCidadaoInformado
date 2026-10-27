/**
 * MAPA CIDADÃO INFORMADO — Painel de Dados Abertos
 * Arquivo: js/dados-abertos.js
 */

document.addEventListener("DOMContentLoaded", () => {
    const btnCarregar = document.getElementById("btnCarregarDados");
    const selectExercicio = document.getElementById("selectExercicio");

    if (btnCarregar) {
        btnCarregar.addEventListener("click", () => {
            const ano = selectExercicio ? selectExercicio.value : "2024";
            carregarDadosDespesas(ano);
        });

        carregarDadosDespesas(selectExercicio ? selectExercicio.value : "2024");
    }
});

/**
 * Função auxiliar para converter valores monetários da API ("4618409,15") em Números JS (4618409.15)
 */
function converterValorParaNumero(valor) {
    if (!valor) return 0;
    if (typeof valor === "number") return valor;

    // Remove espaços, troca vírgula por ponto e converte para número
    const valorFormatado = valor.toString().trim().replace(",", ".");
    return parseFloat(valorFormatado) || 0;
}

/**
 * Busca os dados salvos localmente em data/
 */
async function carregarDadosDespesas(anoExercicio) {
    atualizarStatus(`Carregando dados de ${anoExercicio}...`, "info");

    // Caminho do arquivo JSON salvo localmente
    const apiUrl = `data/despesas-paraguacu-${anoExercicio}.json`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Arquivo ${apiUrl} não encontrado.`);
        }

        const dados = await response.json();

        if (Array.isArray(dados) && dados.length > 0) {
            atualizarStatus(`Dados do exercício ${anoExercicio} carregados com sucesso!`, "info");
            processarERenderizarDados(dados);
        } else {
            throw new Error("O JSON está vazio ou em formato inválido.");
        }

    } catch (error) {
        console.warn("Erro ao ler JSON local:", error);
        atualizarStatus(`Não foi possível carregar o arquivo data/despesas-paraguacu-${anoExercicio}.json.`, "warning");
    }
}

function atualizarStatus(mensagem, tipo) {
    const statusEl = document.getElementById("painelStatus");
    if (statusEl) {
        statusEl.textContent = mensagem;
        statusEl.className = `status-msg ${tipo}`;
    }
}

/**
 * Processa a lista com os campos em maiúsculo da API real
 */
function processarERenderizarDados(listaDespesas) {
    if (!Array.isArray(listaDespesas) || listaDespesas.length === 0) {
        atualizarStatus("Nenhum registro encontrado.", "warning");
        return;
    }

    let totalEmpenhado = 0;
    let totalLiquidado = 0;

    const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // Mapeia os campos da API real: EMPENHADO e LIQUIDADO
    listaDespesas.forEach(item => {
        const valorEmp = converterValorParaNumero(item.EMPENHADO);
        const valorLiq = converterValorParaNumero(item.LIQUIDADO);

        totalEmpenhado += valorEmp;
        totalLiquidado += valorLiq;
    });

    // Atualiza os cartões de KPI
    document.getElementById("kpiTotalEmpenhado").textContent = formatadorMoeda.format(totalEmpenhado);
    document.getElementById("kpiTotalLiquidado").textContent = formatadorMoeda.format(totalLiquidado);
    document.getElementById("kpiTotalOrgaos").textContent = listaDespesas.length;

    // Renderiza o gráfico de barras
    renderizarBarrasOrgao(listaDespesas, totalEmpenhado, formatadorMoeda);
}

/**
 * Renderiza o gráfico de barras mapeando a chave DESCRICAO
 */
function renderizarBarrasOrgao(listaDespesas, totalEmpenhado, formatadorMoeda) {
    const container = document.getElementById("listaDespesasOrgao");
    if (!container) return;

    container.innerHTML = "";

    // Ordena do maior valor empenhado para o menor
    const despesasOrdenadas = [...listaDespesas].sort((a, b) => {
        const valA = converterValorParaNumero(a.EMPENHADO);
        const valB = converterValorParaNumero(b.EMPENHADO);
        return valB - valA;
    });

    despesasOrdenadas.forEach(item => {
        const nomeOrgao = item.DESCRICAO || "Órgão Não Identificado";
        const valor = converterValorParaNumero(item.EMPENHADO);
        const porcentagem = totalEmpenhado > 0 ? ((valor / totalEmpenhado) * 100).toFixed(1) : 0;

        const barItem = document.createElement("div");
        barItem.className = "bar-item";

        barItem.innerHTML = `
      <div class="bar-header">
        <span class="bar-title">${nomeOrgao}</span>
        <span class="bar-value">${formatadorMoeda.format(valor)} (${porcentagem}%)</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${porcentagem}%;"></div>
      </div>
    `;

        container.appendChild(barItem);
    });
}