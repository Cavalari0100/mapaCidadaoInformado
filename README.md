# 🗺️ Mapa Cidadão Informado

> Facilitando o acesso do cidadão a informações e portais públicos brasileiros.

O **Mapa Cidadão Informado** é um projeto **open source, comunitário e independente**, criado para facilitar a localização e o acesso a informações públicas brasileiras.

A proposta é organizar, em um único ponto de acesso, caminhos para **fontes oficiais de informação**, como portais de transparência, dados abertos, prefeituras, câmaras municipais, diários oficiais, licitações, contratos, ouvidorias e sistemas de acesso à informação.

O projeto **não substitui os portais oficiais**. Seu objetivo é organizar e facilitar o caminho do cidadão até a fonte responsável pela informação.

---

## 🎯 Objetivo

O projeto busca tornar mais simples a localização de informações públicas, permitindo que o cidadão encontre, por exemplo:

- 🏛️ Prefeituras
- 💰 Portais da Transparência
- 📊 Dados públicos e dados abertos
- 📑 Licitações e contratos
- 👥 Informações sobre servidores públicos
- 🏗️ Obras públicas
- 📜 Diários Oficiais
- 📨 e-SIC / pedidos de acesso à informação
- 📢 Ouvidorias
- 🏛️ Câmaras Municipais
- ⚖️ Tribunais de Contas
- 📈 Indicadores públicos
- 📚 Guias educativos sobre acesso e interpretação de informações públicas

---

# 🧭 Conceito

Encontrar uma informação pública nem sempre é simples.

Cada município, estado ou órgão pode utilizar diferentes sistemas, portais e plataformas para disponibilizar suas informações.

O cidadão pode saber exatamente **o que deseja encontrar**, mas não necessariamente sabe:

> "Onde encontro essa informação?"

O Mapa Cidadão Informado procura reduzir essa distância.

A plataforma funciona como uma **camada de organização e descoberta**, direcionando o usuário para a fonte oficial responsável pela informação.

### Exemplo

```text
Paraguaçu Paulista - SP

├── 🏛️ Prefeitura
├── 💰 Portal da Transparência
├── 🏛️ Câmara Municipal
├── 📜 Diário Oficial
├── 📨 e-SIC
├── 📢 Ouvidoria
└── 📊 Dados e indicadores
```

Os dados apresentados pelo projeto devem priorizar fontes **oficiais e verificáveis**.

---

# 🏗️ Arquitetura atual

A primeira versão do projeto foi desenvolvida propositalmente de forma simples, utilizando tecnologias web nativas.

```text
HTML5
   │
   ├── Estrutura da interface
   │
CSS3
   │
   ├── Layout
   ├── Responsividade
   └── Identidade visual
   │
JavaScript
   │
   ├── Interatividade
   ├── Busca
   └── Renderização dos dados
   │
JSON
   │
   └── Catálogo de fontes públicas
```

### Tecnologias

| Tecnologia | Finalidade |
|---|---|
| HTML5 | Estrutura da aplicação |
| CSS3 | Estilização e responsividade |
| JavaScript | Interatividade e manipulação dos dados |
| JSON | Armazenamento inicial do catálogo |
| Git | Controle de versão |
| GitHub | Colaboração e distribuição do código |
| GitHub Pages | Hospedagem da aplicação |

A versão inicial **não utiliza backend ou banco de dados**.

Essa decisão permite manter o projeto simples, transparente e fácil de contribuir.

---

# 📁 Estrutura do projeto

A estrutura atual segue a seguinte organização:

```text
mapaCidadaoInformado/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── data/
│   └── portais.json
│
├── README.md
│
└── LICENSE
```

Cada diretório possui uma responsabilidade específica.

---

# 🧩 Guia para contribuidores

Antes de modificar o projeto, identifique **qual tipo de contribuição você deseja realizar**.

Isso ajuda a manter o projeto organizado e evita alterações desnecessárias em arquivos que não estão relacionados à sua contribuição.

---

## 🌐 `index.html`

### Responsabilidade

Arquivo responsável pela **estrutura HTML da página**.

Alterações relacionadas a:

- Estrutura das páginas;
- Seções;
- Cabeçalho;
- Rodapé;
- Navegação;
- Formulários;
- Elementos da interface;
- Textos institucionais;
- Estrutura semântica;
- Acessibilidade estrutural.

### Exemplos

Se você quiser:

> Adicionar uma nova seção "Sobre o projeto"

→ Alterar `index.html`.

Se quiser:

> Criar um novo campo de filtro

→ A estrutura inicial do campo deve ser criada no `index.html`.

### Evite

Não coloque regras de aparência diretamente no HTML utilizando grandes blocos de CSS inline.

Sempre que possível, utilize `css/style.css`.

---

# 🎨 `css/style.css`

### Responsabilidade

Arquivo responsável pela **apresentação visual da aplicação**.

Alterações relacionadas a:

- Cores;
- Tipografia;
- Espaçamentos;
- Botões;
- Cards;
- Layout;
- Grid;
- Responsividade;
- Animações;
- Estados de hover/focus;
- Adaptação para dispositivos móveis.

### Exemplos

Se você quiser:

> Alterar a cor dos botões.

→ `css/style.css`

Se quiser:

> Melhorar o layout dos cards no celular.

→ `css/style.css`

Se quiser:

> Criar uma nova identidade visual.

→ `css/style.css`

### Evite

Não utilize JavaScript para controlar elementos que podem ser resolvidos apenas com CSS.

---

# ⚙️ `js/app.js`

### Responsabilidade

Arquivo responsável pela **lógica e comportamento da aplicação**.

Atualmente, o JavaScript é utilizado para:

- Carregar o catálogo JSON;
- Pesquisar portais;
- Filtrar resultados;
- Renderizar cards;
- Manipular eventos;
- Exibir mensagens;
- Interagir com elementos da interface.

### Exemplos

Se você quiser:

> Alterar o funcionamento da busca.

→ `js/app.js`

Se quiser:

> Criar filtros dinâmicos.

→ `js/app.js`

Se quiser:

> Adicionar ordenação dos resultados.

→ `js/app.js`

Se quiser:

> Criar validações no formulário.

→ `js/app.js`

### Importante

Evite colocar dados dos portais diretamente dentro do JavaScript.

Os dados devem permanecer no catálogo JSON sempre que possível.

---

# 🗃️ `data/portais.json`

### Responsabilidade

Arquivo responsável pelo **armazenamento dos dados do catálogo de fontes públicas**.

É o principal arquivo para quem deseja **adicionar novos portais ou corrigir informações existentes**.

Um registro possui atualmente a seguinte estrutura:

```json
{
    "nome": "Nome do portal",
    "url": "https://exemplo.gov.br/",
    "categoria": "Transparência",
    "descricao": "Descrição da finalidade do portal.",
    "abrangencia": "Municipal",
    "orgao": "Órgão responsável"
}
```

### Para adicionar um novo portal

Normalmente, você **não precisa alterar `index.html`, `style.css` ou `app.js`**.

Basta adicionar um novo objeto ao:

```text
data/portais.json
```

### Exemplo

```json
{
    "nome": "Portal da Transparência de Exemplo",
    "url": "https://transparencia.exemplo.gov.br/",
    "categoria": "Transparência",
    "descricao": "Portal destinado à consulta de informações públicas.",
    "abrangencia": "Municipal",
    "orgao": "Prefeitura Municipal de Exemplo"
}
```

### Regras para inclusão de fontes

Antes de adicionar uma fonte:

- Verifique se o endereço está funcionando.
- Priorize domínios oficiais.
- Confirme qual órgão é responsável pela informação.
- Evite links de terceiros quando existir uma fonte oficial.
- Não adicione informações sem possibilidade de verificação.
- Não utilize links encurtados.
- Não altere informações apenas com base em suposições.

Quando possível, o link deve apontar **diretamente para a fonte da informação**.

---

# 🔎 Critérios para fontes oficiais

O projeto prioriza fontes como:

```text
.gov.br
.sp.gov.br
órgãos públicos
prefeituras
câmaras municipais
tribunais de contas
autarquias
instituições públicas
```

Entretanto, o domínio sozinho não deve ser considerado suficiente.

A fonte deve ser analisada considerando:

1. Quem mantém o sistema?
2. Qual órgão é responsável pela informação?
3. O conteúdo possui relação direta com o órgão?
4. O endereço está funcionando?
5. A informação é pública e verificável?

---

# 🐛 Correção de bugs

Se você encontrou um problema no funcionamento da aplicação:

1. Identifique o comportamento esperado.
2. Identifique o comportamento atual.
3. Verifique o Console do navegador.
4. Identifique qual arquivo provavelmente está relacionado.
5. Corrija o problema.
6. Teste a aplicação novamente.

### Exemplos

| Problema | Arquivo provável |
|---|---|
| Página não possui determinada seção | `index.html` |
| Layout quebrado | `css/style.css` |
| Busca não funciona | `js/app.js` |
| Portal não aparece | `data/portais.json` |
| JSON inválido | `data/portais.json` |
| Dados não carregam | `js/app.js` / caminho do JSON |
| Problema em celular | `css/style.css` |

---

# 🔀 Fluxo recomendado para contribuições

Para contribuir com código:

### 1. Faça um Fork

Crie uma cópia do projeto na sua conta do GitHub.

### 2. Crie uma Branch

Evite trabalhar diretamente na branch principal.

Exemplos:

```bash
git checkout -b feature/filtro-municipio
```

ou:

```bash
git checkout -b fix/correcao-busca
```

Para alterações de dados:

```bash
git checkout -b data/adicionar-paraguacu-paulista
```

### 3. Faça a alteração

Modifique apenas os arquivos necessários para sua contribuição.

### 4. Teste

Antes de enviar a contribuição:

- Teste a página;
- Teste a busca;
- Verifique o Console;
- Teste links adicionados;
- Verifique o comportamento em diferentes tamanhos de tela;
- Confirme que o JSON continua válido.

### 5. Commit

Utilize mensagens objetivas.

Exemplos:

```text
feat: adiciona filtro por município
```

```text
fix: corrige carregamento do catálogo
```

```text
data: adiciona portais de Paraguaçu Paulista
```

```text
style: melhora responsividade dos cards
```

```text
docs: atualiza instruções de contribuição
```

### 6. Pull Request

Envie um Pull Request descrevendo:

- O que foi alterado;
- Por que a alteração foi realizada;
- Quais arquivos foram modificados;
- Como a alteração foi testada.

---

# 📋 Exemplos de contribuições

## Quero adicionar um novo portal

Alterar:

```text
data/portais.json
```

Não é necessário modificar o JavaScript se o novo registro seguir o formato existente.

---

## Quero corrigir um link quebrado

Alterar:

```text
data/portais.json
```

Descrever no Pull Request qual era o endereço anterior e qual é o novo endereço.

---

## Quero alterar o visual

Alterar:

```text
css/style.css
```

Evite modificar o JavaScript para mudanças puramente visuais.

---

## Quero alterar o funcionamento da busca

Alterar:

```text
js/app.js
```

Caso seja necessário criar novos elementos de interface, também poderá ser necessário alterar:

```text
index.html
```

---

## Quero criar um filtro por município

Provavelmente será necessário trabalhar em:

```text
index.html
js/app.js
data/portais.json
css/style.css
```

Nesse caso, explique no Pull Request como a nova estrutura de dados foi pensada.

---

## Quero apenas sugerir um portal

Não é necessário alterar o código.

Abra uma **Issue** informando:

```text
Nome do órgão:
Município:
Estado:
Categoria:
URL:
Descrição:
Fonte oficial:
Observações:
```

---

# 🤝 Contribuições sem programação

Você também pode contribuir sem escrever código.

### 🔎 Encontrar fontes

Ajude a identificar:

- Portais municipais;
- Portais estaduais;
- Portais de transparência;
- Diários oficiais;
- e-SIC;
- Ouvidorias;
- Câmaras Municipais;
- Tribunais de Contas;
- Dados abertos.

### 🐛 Informar problemas

Você pode informar:

- Links quebrados;
- Informações desatualizadas;
- Portais incorretamente classificados;
- Problemas de navegação;
- Problemas de acessibilidade.

### 💡 Sugerir funcionalidades

Novas ideias podem ser discutidas por meio de Issues.

---

# 🛡️ Qualidade e confiabilidade dos dados

O Mapa Cidadão Informado funciona como um **índice de acesso às informações públicas**, e não como autoridade sobre os dados apresentados.

A responsabilidade pelo conteúdo original permanece com o órgão ou instituição que disponibiliza a informação.

O projeto deve:

- Priorizar fontes oficiais;
- Evitar alterações que distorçam informações;
- Identificar corretamente a origem dos dados;
- Manter links atualizados;
- Corrigir fontes desatualizadas quando identificadas;
- Evitar apresentar opiniões como fatos;
- Manter caráter informativo e independente.

---

# 🗺️ Roadmap

## 🟢 Fase 1 — Fundação

- [x] Criar estrutura inicial do projeto
- [x] Criar página inicial
- [x] Criar identidade visual inicial
- [x] Criar catálogo em JSON
- [x] Implementar carregamento dos dados
- [x] Implementar busca inicial
- [ ] Criar documentação completa
- [ ] Publicar versão estável no GitHub Pages

## 🔵 Fase 2 — Organização dos dados

- [ ] Estruturar municípios
- [ ] Adicionar estados
- [ ] Adicionar portais municipais
- [ ] Criar filtros por estado
- [ ] Criar filtros por município
- [ ] Criar filtros por categoria
- [ ] Padronizar categorias
- [ ] Criar processo de validação dos links

## 🟣 Fase 3 — Comunidade

- [ ] Documentar processo de contribuição
- [ ] Criar modelo de Issue
- [ ] Criar processo de inclusão de municípios
- [ ] Criar sistema de revisão de fontes
- [ ] Expandir a base de dados
- [ ] Melhorar documentação técnica

## 🟠 Fase 4 — Evolução

Possíveis funcionalidades futuras:

- API;
- banco de dados;
- integração com dados abertos;
- atualização automática de links;
- dashboards;
- ferramentas avançadas de pesquisa;
- cruzamento de informações;
- indicadores municipais;
- mecanismos automatizados de validação.

> Essas funcionalidades fazem parte da visão de longo prazo e não representam necessariamente recursos disponíveis na versão atual.

---

# ⚖️ Independência

O **Mapa Cidadão Informado** é um projeto independente.

Não representa:

- Governo Federal;
- governos estaduais;
- prefeituras;
- partidos políticos;
- candidatos;
- órgãos públicos específicos.

O projeto procura apresentar informações de maneira **neutra, organizada e verificável**, priorizando fontes oficiais.

Seu objetivo é facilitar o acesso à informação, e não determinar interpretações políticas ou opiniões sobre os dados encontrados.

---

# 🔐 Segurança

Contribuidores devem evitar:

- Inserção de código malicioso;
- Links suspeitos;
- Scripts externos desnecessários;
- Coleta indevida de dados pessoais;
- Chaves de API expostas;
- Credenciais;
- Tokens;
- Informações privadas.

Nunca envie senhas, tokens ou credenciais para o repositório.

Caso seja identificada uma vulnerabilidade de segurança, evite expô-la publicamente antes de discutir uma correção apropriada.

---

# 📄 Licença

Este projeto é disponibilizado sob uma licença open source.

Consulte o arquivo [`LICENSE`](LICENSE) para conhecer os termos de utilização, modificação e distribuição.

---

# 🌎 Contribua

O Mapa Cidadão Informado cresce por meio da colaboração.

Você pode contribuir:

- Encontrando novos portais;
- Corrigindo links;
- Adicionando municípios;
- Melhorando a interface;
- Corrigindo bugs;
- Melhorando acessibilidade;
- Criando funcionalidades;
- Melhorando a documentação;
- Sugerindo novas ideias.

Se você encontrou algo que pode melhorar o projeto, abra uma **Issue** ou envie um **Pull Request**.

---

## 💬 Princípio

> **Informação pública existe. Nosso objetivo é facilitar o caminho até ela.**

---

## 🔗 Repositório

**GitHub:**  
https://github.com/Cavalari0100/mapaCidadaoInformado

---

**Mapa Cidadão Informado**  
Projeto open source e comunitário para facilitar o acesso às informações públicas brasileiras.
