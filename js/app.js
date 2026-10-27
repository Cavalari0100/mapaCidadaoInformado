
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const portalResults = document.querySelector("#portalResults");
const searchStatus = document.querySelector("#searchStatus");

let portals = [];


async function loadPortals() {
    try {
        console.log("Iniciando carregamento do catálogo...");

        const response = await fetch("./data/portais.json");

        if (!response.ok) {
            throw new Error(
                `Erro HTTP ${response.status}: ${response.statusText}`
            );
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error("O JSON precisa conter uma lista de portais.");
        }

        portals = data;

        console.log("Portais carregados:", portals);

        renderPortals(portals);

        searchStatus.textContent =
            `${portals.length} portais disponíveis no catálogo.`;

    } catch (error) {
        console.error("Erro ao carregar os portais:", error);

        searchStatus.textContent =
            `Erro ao carregar os portais: ${error.message}`;
    }
}


function renderPortals(portalList) {
    portalResults.replaceChildren();

    if (portalList.length === 0) {
        searchStatus.textContent =
            "Nenhum portal encontrado. Tente outros termos de pesquisa.";
        return;
    }

    portalList.forEach((portal) => {
        const card = document.createElement("article");
        card.className = "info-card";

        const category = document.createElement("span");
        category.className = "eyebrow";
        category.textContent = portal.categoria;

        const title = document.createElement("h3");
        title.textContent = portal.nome;

        const description = document.createElement("p");
        description.textContent = portal.descricao;

        const details = document.createElement("p");
        details.className = "portal-details";
        details.textContent =
            `${portal.abrangencia} · ${portal.orgao}`;

        const link = document.createElement("a");
        link.className = "text-link";
        link.href = portal.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Acessar portal ↗";

        card.append(category, title, description, details, link);
        portalResults.appendChild(card);
    });

    searchStatus.textContent =
        `${portalList.length} portal(is) encontrado(s).`;
}

function normalizeText(value) {
    return String(value ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function searchPortals(term) {
    const query = normalizeText(term);

    if (!query) {
        renderPortals(portals);
        return;
    }

    const filteredPortals = portals.filter((portal) => {
        const searchableText = normalizeText([
            portal.nome,
            portal.categoria,
            portal.descricao,
            portal.abrangencia,
            portal.orgao
        ].join(" "));

        return searchableText.includes(query);
    });

    renderPortals(filteredPortals);
}

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    searchPortals(searchInput.value);
});

searchInput.addEventListener("input", () => {
    searchPortals(searchInput.value);
});

loadPortals();
