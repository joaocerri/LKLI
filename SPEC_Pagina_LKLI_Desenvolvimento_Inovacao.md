# SPEC - Pagina LKLI Desenvolvimento e Inovacao

## 1. Objetivo

Desenvolver uma pagina institucional moderna, responsiva e interativa para o time **LKLI - Desenvolvimento e Inovacao**, apresentando a identidade da area, seus servicos, equipe, historia, links de solicitacao e duvidas frequentes.

A pagina deve funcionar como ponto central de comunicacao da area para colaboradores internos, facilitando o entendimento sobre o time, o processo de inovacao e os canais corretos para abertura de demandas.

## 2. Publico-alvo

- Colaboradores da operacao LPC.
- Liderancas que acompanham ou priorizam iniciativas.
- Usuarios que precisam abrir solicitacoes de desenvolvimento, automacao, BI, capacitacao ou suporte.
- Pessoas interessadas em conhecer a area, sua historia e seus pilares.

## 3. Identidade visual

Utilizar obrigatoriamente a paleta abaixo como base do projeto:

```css
:root {
  --color-bg-dark: #070D2E;
  --color-header: #11185C;
  --color-primary: #1D2589;
  --color-accent: #4338DB;
  --color-secondary: #625BD0;
  --color-hover: #6965ED;
  --color-white: #FFFFFF;
  --color-gray-light: #C9C9C9;
}
```

Direcao visual:

- Estilo corporativo premium, moderno, limpo e tecnologico.
- Fundo escuro com contraste alto para textos.
- Uso moderado de gradientes dentro da paleta.
- Cards com bordas suaves, brilho discreto e boa hierarquia visual.
- Animacoes sutis, especialmente em hover, scroll e abertura de modal.
- Evitar poluicao visual, excesso de texto e elementos decorativos sem funcao.

## 4. Conteudo base da area

### Nome da area

**LKLI - Desenvolvimento e Inovacao**

### Frase institucional

Usar como base a ideia:

> Transformando oportunidades em valor por meio da inovacao.

### Proposito, missao e visao

Conteudos extraidos da apresentacao da area:

- **Proposito:** Transformando oportunidades em valor por meio da inovacao.
- **Visao:** Ser referencia global em inovacao e parceiro de solucoes.
- **Missao:** Projetar e desenvolver sistemas, fluxos e processos para transformar oportunidades em solucoes por meio de pensamento inovador, mentalidade agil e bom uso de dados, ajudando a LPC a se tornar mais centrada no cliente, enxuta, sustentavel e orientada por dados.
- **Valor:** Agile.

## 5. Estrutura da pagina

### 5.1 Hero / Inicio

Primeira dobra da pagina.

Requisitos:

- Titulo principal: **LKLI - Desenvolvimento e Inovacao**.
- Subtitulo/frase: **Transformando oportunidades em valor por meio da inovacao.**
- Video de fundo em loop, sem audio, com overlay escuro para legibilidade.
- Botoes de acao:
  - **Abrir solicitacao**
  - **Conhecer o time**
  - **Ver processo**
- O video deve ter fallback visual caso nao carregue.
- O conteudo principal precisa ficar legivel em desktop e mobile.

Sugestao de video:

- Video corporativo abstrato com tecnologia, colaboracao, dados, automacao ou inovacao.
- Caso nao exista video real, usar placeholder configuravel.

### 5.2 Sobre a area

Secao curta explicando o papel da area.

Texto base:

> O time de Desenvolvimento e Inovacao atua na criacao de solucoes digitais, automacoes, dashboards, melhorias de processos, iniciativas de capacitacao e apoio a novas ideias. Nosso objetivo e transformar oportunidades em solucoes praticas que gerem valor para a operacao e para o negocio.

Incluir cards para:

- Proposito
- Visao
- Missao
- Valor

### 5.3 Pilares de atuacao

Basear nos pilares e frentes da apresentacao.

Pilares principais:

- **Cultura, Capacitacao e Educacao:** disseminar cultura de inovacao e apoiar capacitacao em novas ferramentas e metodologias.
- **Pesquisa e Desenvolvimento:** explorar ferramentas, tecnologias, novos skills e provas de conceito.
- **Desenvolvimentos:** desenvolver e implementar solucoes de digitalizacao e automacao de processos.
- **Interacao com o Ecossistema:** conectar com mercado, universidades, startups, parcerias e benchmarking.
- **Data Management:** gerenciar, organizar e disponibilizar dados para apoiar decisoes.

Tambem considerar temas de apoio:

- BI Governance
- BI Development
- Digitalization / Automation
- Prototyping
- Agile frameworks
- Data security
- IT coordination
- Sustainability
- AI e Machine Learning

### 5.4 Time e organograma

Criar uma area visual para apresentar os colaboradores.

Requisitos:

- Exibir os colaboradores em cards.
- Cada card deve conter:
  - Foto
  - Nome
  - Posicao/funcao
  - Area ou frente de atuacao
- Ao passar o mouse, o card deve virar ou revelar o verso.
- O verso deve mostrar um pequeno texto do colaborador.
- O card deve ser clicavel.
- Ao clicar, abrir modal ampliado com mais informacoes:
  - Foto maior
  - Nome
  - Cargo/posicao
  - Area de atuacao
  - Mini bio
  - Principais responsabilidades
  - Tecnologias/ferramentas
  - Contato interno, se aplicavel
- Em mobile, substituir hover por toque/click.
- O layout deve funcionar bem com muitos colaboradores.

Colaboradores iniciais identificados na apresentacao:

| Nome | Posicao / Frente inicial |
| --- | --- |
| Gabriela Tartare | Group Manager + Project Manager SAP |
| Davi Gazola | IT Support & Innovation |
| Joao Cerri | LPC Lab Intern |
| Marcos Passos | LPC Lab Intern |
| Elizandro Cruz | Stefanini - IT Field |
| Kevim Ribeiro | Stefanini - IT Field |
| Luiz Parizze | Stefanini - IT Field |
| Camila Morais | CCT SAP + LPC Project Office |
| Renato Dantas | Customer Support SAP + Innovation |
| Anastassia Oberlander | Master Data SAP + Data Management |
| Paulo Leite | Transport SAP + Distribution Structure |
| Rodrigo Oliveira | PO SAP + IT Coordination |
| Arthur Chetenki | Sales & Invoice SAP |
| Leandro Tomazini | Warehouse Out. SAP |
| Livia Bevilacqua | Warehouse Inb. SAP |
| Vitor Padilha | Planning & Procurement SAP |

Observacao:

- Fotos e bios podem ser placeholders inicialmente.
- Estruturar os dados da equipe em array/JSON para facilitar manutencao.

### 5.5 Links rapidos

Secao com cards de acesso rapido.

Links iniciais:

| Titulo | Descricao | URL |
| --- | --- | --- |
| Solicitacao Capacitacao e Cultura de Inovacao | Solicite treinamentos, mentorias, pilulas de conhecimento ou iniciativas para disseminar cultura de inovacao. | TODO |
| Solicitacao de Desenvolvimento e Abertura de Chamados | Solicite desenvolvimento de solucao digital, automacao, dashboard, melhoria de processo ou abertura de chamado relacionado. | TODO |

Requisitos:

- Cards com icones.
- Botao claro de acesso.
- Pode ter destaque para o link principal de abertura de solicitacao.
- As URLs devem ficar centralizadas em configuracao/dados, nao espalhadas pelo HTML.

### 5.6 Historia do time

Criar uma secao em formato de timeline.

Conteudo base extraido da apresentacao:

| Ano | Marco |
| --- | --- |
| 2020 | Criacao da area. Suporte passa a atender todo o LPC, nao apenas WH. |
| 2021 | Reativacao do LPC LAB. Inicio do DMA. |
| 2022 | Mudanca de foco: envolvimento da equipe LPC por meio da inovacao e digitalizacao. Medicao pela quantidade de iniciativas. |
| 2023 | Novos pilares: preparacao de usuarios-chave em cada area LPC, liberacao de capacidade da equipe LKLI para novas tecnologias e solucoes mais complexas, sustentabilidade como driver e foco em dados, IA e ML. |
| 2024 | Foco em inovacao colaborativa e valor agregado. Medicao pela economia de horas. |
| 2025+ | Area passa de Desenvolvimento para Desenvolvimento e Inovacao, alinhada a estrategia 2025. |

Requisitos:

- Timeline vertical em mobile e horizontal/alternada em desktop.
- Usar animacao suave ao entrar na tela.
- Permitir expansao futura dos marcos.

### 5.7 Processo de inovacao

Criar uma secao explicando o fluxo de entrada e atendimento de demandas.

Fluxo:

1. Usuario preenche formulario de solicitacao.
2. Time realiza entrevista para entender contexto, objetivo e necessidade.
3. Demanda passa por classificacao.
4. Se for **High Effort**, segue para priorizacao em reuniao de lideranca.
5. Demandas **Medium Effort** e **Low Effort** podem ser puxadas conforme disponibilidade.
6. Quando iniciada, passa por preparacao, desenvolvimento, documentacao e implementacao.

Sugestao visual:

- Stepper horizontal em desktop.
- Stepper vertical em mobile.
- Badges para High Effort, Medium Effort e Low Effort.

### 5.8 FAQ - Duvidas frequentes

Criar uma secao de FAQ em accordion.

Perguntas iniciais:

#### 1. Como abro uma solicitacao?

Voce pode abrir uma solicitacao pelo formulario anexado no topo da pagina, informando o contexto da necessidade, o objetivo da demanda, a area envolvida e o resultado esperado. Com essas informacoes, o time consegue avaliar a solicitacao com mais agilidade e direcionar os proximos passos.

Adicionar botoes nesta resposta:

- **Ir para links rapidos**
- **Abrir formulario**

#### 2. Quais servicos o time de Inovacao oferece?

O time de Inovacao atua no desenvolvimento de solucoes digitais, automacoes, dashboards (BI's), melhorias de processos, aplicacao de mentorias, pilulas de conhecimento e treinamentos, solucao de desvios/chamados e apoio a implementacao de novas ideias. O objetivo e transformar oportunidades em solucoes praticas que gerem valor para a operacao e para o negocio.

#### 3. Como funciona nosso processo?

O processo de inovacao funciona da seguinte forma: os usuarios abrem as solicitacoes de desenvolvimento por meio do preenchimento de um formulario. Apos o envio, nosso time realiza uma entrevista para entender melhor a necessidade, o contexto e os objetivos da solicitacao.

Em seguida, a demanda passa pela etapa de classificacao. Caso seja classificada como High Effort, ela segue para a etapa de priorizacao. Quando a iniciativa e iniciada, sao realizadas as etapas de preparacao, desenvolvimento, documentacao e implementacao.

#### 4. Como as demandas sao priorizadas?

As demandas sao avaliadas durante a reuniao de lideranca, na qual ocorre o processo de priorizacao das iniciativas. Cada area tem direito a priorizar uma iniciativa. E importante destacar que a priorizacao se aplica apenas as iniciativas classificadas como High Effort. Iniciativas classificadas como Medium Effort ou Low Effort podem ser puxadas assim que houver disponibilidade, sem necessidade de priorizacao formal.

#### 5. Como acompanho o andamento da minha solicitacao?

Apos o envio, o acompanhamento acontece pelos canais de comunicacao internos, como Teams ou Outlook. O solicitante e informado sobre o status da solicitacao, as etapas previstas e os responsaveis envolvidos no processo.

#### 6. Em quais tecnologias temos atuacao?

Power Apps, Power Automate, Power BI, Python, Machine Learning, IA, Excel, entre outras.

## 6. Requisitos funcionais

- Navegacao por menu fixo ou sticky.
- Scroll suave entre secoes.
- Hero com video de fundo e fallback.
- Cards de equipe com efeito de frente/verso.
- Modal de colaborador ao clicar no card.
- Secao de links rapidos com URLs configuraveis.
- Timeline da historia da area.
- FAQ em accordion.
- Botoes do FAQ direcionando para links rapidos ou formulario.
- Layout responsivo para desktop, tablet e mobile.
- Dados da equipe, links e timeline devem ser faceis de editar.

## 7. Requisitos nao funcionais

- Codigo limpo e bem organizado.
- Componentizacao quando aplicavel.
- Acessibilidade minima:
  - Contraste adequado.
  - Navegacao por teclado.
  - Modais com fechamento por ESC.
  - Textos alternativos em imagens.
  - Estados de foco visiveis.
- Boa performance:
  - Video otimizado.
  - Imagens comprimidas.
  - Lazy loading em imagens da equipe.
- Compatibilidade com navegadores modernos.

## 8. Arquitetura sugerida

Se o projeto for uma pagina simples:

- HTML
- CSS
- JavaScript
- Dados em arquivo JS/JSON

Se for uma aplicacao mais estruturada:

- React ou Next.js
- Componentes por secao
- Dados em arquivos separados
- CSS Modules, Tailwind ou estilo ja existente do projeto

Decisao recomendada:

- Se for para SharePoint, usar implementacao simples com HTML/CSS/JS adaptavel.
- Se for para site/app proprio, usar React/Next.js com componentes reutilizaveis.

## 9. Estrutura de dados recomendada

```js
const teamMembers = [
  {
    name: "Joao Cerri",
    role: "LPC Lab Intern",
    area: "Development & Innovation",
    photo: "/assets/team/joao-cerri.jpg",
    shortBio: "Texto curto exibido no verso do card.",
    fullBio: "Texto completo exibido no modal.",
    responsibilities: ["Automacoes", "Power Apps", "Power BI"],
    tools: ["Power Apps", "Power Automate", "Power BI", "Python"],
    contact: ""
  }
];

const quickLinks = [
  {
    title: "Solicitacao Capacitacao e Cultura de Inovacao",
    description: "Solicite treinamentos, mentorias e iniciativas de cultura.",
    url: "TODO"
  },
  {
    title: "Solicitacao de Desenvolvimento e Abertura de Chamados",
    description: "Solicite solucoes digitais, automacoes, BI e chamados.",
    url: "TODO"
  }
];
```

## 10. Criterios de aceite

- A pagina abre sem erros.
- O hero exibe titulo, frase e video/fallback.
- O menu navega corretamente para as secoes.
- Os cards da equipe exibem frente, verso e modal.
- A secao de links rapidos possui dois cards e botoes funcionais.
- A historia aparece em timeline clara.
- O FAQ funciona em accordion.
- A pergunta "Como abro uma solicitacao?" possui botoes para links rapidos e formulario.
- A pagina se adapta bem em desktop e mobile.
- As cores seguem a paleta definida.
- Os dados principais ficam centralizados em estrutura facil de editar.

