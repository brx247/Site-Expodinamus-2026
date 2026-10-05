const campaigns = {
  wwi: {
    name: 'A Grande Guerra', period: '1914—1918', side: 'Entente',
    years: [1914, 1915, 1916, 1917, 1918],
    starting: { industry: 62, supply: 58, cohesion: 55, diplomacy: 48, score: 0 },
    initialAllies: ['reino-unido', 'franca', 'uniao-sovietica', 'belgica', 'servia'],
    initialOpponents: ['alemanha', 'austria', 'turquia'],
    events: [
      { year: 1914, title: 'A crise de julho', brief: 'O assassinato do arquiduque Francisco Ferdinando desencadeou uma crise diplomática. Alianças e mobilizações ampliaram o conflito.' },
      { year: 1915, title: 'A guerra se expande', brief: 'Novas frentes surgiram e a guerra de trincheiras se consolidou no oeste. O bloqueio naval afetou o abastecimento civil.' },
      { year: 1916, title: 'Verdun e Somme', brief: 'Batalhas prolongadas mostraram o custo humano e material da guerra industrial. A sociedade civil também sofreu escassez e deslocamento.' },
      { year: 1917, title: 'Revolução e entrada dos EUA', brief: 'A Rússia viveu revoluções e caminhou para sair da guerra. Os Estados Unidos entraram no conflito ao lado da Entente.' },
      { year: 1918, title: 'Armistício', brief: 'O armistício de 11 de novembro encerrou os combates. O Tratado de Versalhes, em 1919, redesenhou fronteiras e deixou tensões.' }
    ],
    decisions: [
      { type: 'DIPLOMACIA', prompt: 'A crise de julho exige uma resposta. Como preservar apoio sem ampliar a escalada?', options: [
        { title: 'Reforçar consultas entre aliados', detail: 'Favorece coordenação e reduz o risco de isolamento.', effects: { diplomacy: 9, cohesion: 4, industry: -3 }, feedback: 'Consultas fortalecem a coordenação. Ainda assim, compromissos rígidos e mobilizações rápidas deixam pouco espaço para recuo.' },
        { title: 'Priorizar a mobilização imediata', detail: 'Aumenta a prontidão, mas pressiona a diplomacia.', effects: { industry: 8, supply: -6, diplomacy: -7, score: 3 }, feedback: 'A prontidão cresce, mas a mobilização acelerada torna a crise mais difícil de conter.' }
      ]},
      { type: 'RECURSOS', prompt: 'A guerra se prolonga e o abastecimento civil fica sob pressão. Onde concentrar a capacidade produtiva?', options: [
        { title: 'Proteger alimentos e transporte', detail: 'Ajuda a população e sustenta a coesão social.', effects: { supply: 10, cohesion: 6, industry: -5 }, feedback: 'A proteção das rotas e do abastecimento reduz a pressão sobre civis, embora limite a produção imediata de material.' },
        { title: 'Ampliar a produção industrial', detail: 'Fortalece a capacidade logística, com custo social.', effects: { industry: 10, supply: -5, cohesion: -3, score: 2 }, feedback: 'A produção aumenta, mas priorizar a indústria sobre o consumo civil agrava a escassez.' }
      ]},
      { type: 'DEFESA', prompt: 'Verdun e Somme revelam o custo de ofensivas prolongadas. Qual deve ser a prioridade?', options: [
        { title: 'Fortificar e reduzir perdas', detail: 'Uma defesa organizada preserva recursos e vidas.', effects: { cohesion: 8, supply: 4, industry: -4, score: 4 }, feedback: 'Uma postura defensiva pode reduzir baixas e desgaste, mas prolonga a disputa por posições.' },
        { title: 'Concentrar recursos numa ofensiva', detail: 'Pode alterar a frente, mas exige enorme custo.', effects: { industry: -8, supply: -8, cohesion: -7, score: -2 }, feedback: 'A ofensiva consome recursos em ritmo elevado; ganhos territoriais não garantem uma paz duradoura.' }
      ]},
      { type: 'DIPLOMACIA', prompt: 'As revoluções abalam a Rússia e os Estados Unidos entram na guerra. Como responder às mudanças na coalizão?', options: [
        { title: 'Construir uma agenda comum com novos aliados', detail: 'A coordenação amplia legitimidade e cooperação.', effects: { diplomacy: 10, cohesion: 7, supply: 2, score: 4 }, allies: ['estados-unidos'], feedback: 'Uma agenda comum fortalece a coalizão. A entrada dos EUA foi um fato histórico; a simulação destaca o papel da coordenação.' },
        { title: 'Concentrar decisões no comando central', detail: 'Agiliza respostas, mas reduz a confiança mútua.', effects: { industry: 5, cohesion: -7, diplomacy: -6 }, feedback: 'A centralização agiliza algumas decisões, porém pode reduzir a autonomia e a confiança entre aliados.' }
      ]},
      { type: 'RECONSTRUÇÃO', prompt: 'O armistício encerra os combates, mas a Europa enfrenta perdas, deslocamentos e instabilidade. O que priorizar?', options: [
        { title: 'Apoiar reconstrução e negociação', detail: 'Investe numa paz mais estável e na recuperação civil.', effects: { supply: 8, diplomacy: 9, cohesion: 7, industry: -6, score: 7 }, feedback: 'A reconstrução e a negociação reconhecem que a paz depende de mais do que o fim dos combates. As condições de Versalhes, porém, continuaram controversas.' },
        { title: 'Exigir reparações e garantias rígidas', detail: 'Busca segurança imediata, com risco de ressentimento.', effects: { industry: 7, diplomacy: -9, cohesion: -3, score: 1 }, feedback: 'Garantias rígidas podem atender a demandas imediatas, mas medidas punitivas alimentaram ressentimentos e instabilidade no pós-guerra.' }
      ]}
    ]
  },
  wwii: {
    name: 'A Segunda Guerra Mundial', period: '1939—1945', side: 'Aliados',
    years: [1939, 1940, 1941, 1942, 1944, 1945],
    starting: { industry: 58, supply: 55, cohesion: 52, diplomacy: 46, score: 0 },
    initialAllies: ['reino-unido', 'franca', 'polonia'],
    initialOpponents: ['alemanha'],
    events: [
      { year: 1939, title: 'Invasão da Polônia', brief: 'A invasão alemã da Polônia em setembro levou Reino Unido e França a declarar guerra. O pacto germano-soviético incluía protocolos secretos.' },
      { year: 1940, title: 'Queda da França', brief: 'A ocupação alemã da França e a Batalha da Grã-Bretanha alteraram o equilíbrio europeu. A resistência e o exílio tornaram-se centrais.' },
      { year: 1941, title: 'A guerra se globaliza', brief: 'A Alemanha invadiu a União Soviética em junho; após o ataque a Pearl Harbor em dezembro, os EUA entraram na guerra.' },
      { year: 1942, title: 'Viradas em várias frentes', brief: 'Midway e El Alamein marcaram mudanças no Pacífico e no Norte da África; Stalingrado tornou-se uma batalha decisiva no leste.' },
      { year: 1944, title: 'Desembarque na Normandia', brief: 'O Dia D abriu uma frente aliada no oeste europeu. A libertação avançou em meio à ocupação, à resistência e a grandes deslocamentos.' },
      { year: 1945, title: 'Fim da guerra na Europa', brief: 'A Alemanha se rendeu em maio. A guerra terminou em setembro após os bombardeios atômicos de Hiroshima e Nagasaki e a rendição japonesa.' }
    ],
    decisions: [
      { type: 'DIPLOMACIA', prompt: 'A invasão da Polônia transforma a crise europeia em guerra. Como articular uma resposta aliada?', options: [
        { title: 'Coordenar garantias e apoio diplomático', detail: 'Constrói confiança e torna compromissos mais claros.', effects: { diplomacy: 9, cohesion: 5, industry: -3, score: 3 }, feedback: 'A coordenação pode sustentar compromissos entre aliados. A resposta real foi limitada pela distância e pelas condições militares de 1939.' },
        { title: 'Reforçar a produção nacional primeiro', detail: 'Prepara recursos, mas atrasa a cooperação imediata.', effects: { industry: 9, supply: -4, diplomacy: -4 }, feedback: 'A indústria ganha fôlego, mas uma resposta isolada tem limites diante de uma crise que ultrapassa fronteiras.' }
      ]},
      { type: 'DEFESA', prompt: 'A queda da França e a Batalha da Grã-Bretanha ameaçam o equilíbrio no oeste. O que priorizar?', options: [
        { title: 'Organizar defesa civil e continuidade institucional', detail: 'Protege a população e mantém serviços essenciais.', effects: { cohesion: 8, supply: 5, industry: -4, score: 4 }, feedback: 'A defesa civil e a continuidade institucional ajudam a sociedade a resistir; a Batalha da Grã-Bretanha foi um marco histórico.' },
        { title: 'Concentrar recursos na capacidade industrial', detail: 'Aumenta a produção, mas pressiona o abastecimento.', effects: { industry: 11, supply: -8, cohesion: -3 }, feedback: 'A capacidade industrial cresce, mas a escassez atinge a vida civil e torna o esforço de guerra mais difícil de sustentar.' }
      ]},
      { type: 'DIPLOMACIA', prompt: 'A invasão da URSS e a entrada dos EUA criam uma coalizão ampla, mas diversa. Como aproximar aliados?', options: [
        { title: 'Firmar coordenação entre frentes', detail: 'Promove partilha de informação e objetivos comuns.', effects: { diplomacy: 9, cohesion: 7, supply: 2, score: 5 }, allies: ['estados-unidos', 'uniao-sovietica'], feedback: 'A coordenação entre aliados foi central. As prioridades divergentes entre as potências, contudo, moldaram o pós-guerra.' },
        { title: 'Deixar cada frente agir com autonomia', detail: 'Dá flexibilidade local, com menor unidade estratégica.', effects: { industry: 4, cohesion: -4, diplomacy: -5 }, feedback: 'A autonomia pode acelerar respostas locais, mas dificulta a distribuição de recursos e a coordenação política.' }
      ]},
      { type: 'RECURSOS', prompt: 'Em 1942, várias frentes exigem capacidade logística. Como equilibrar a urgência e o bem-estar civil?', options: [
        { title: 'Priorizar rotas e abastecimento civil', detail: 'Sustenta a população e a resiliência de longo prazo.', effects: { supply: 10, cohesion: 7, industry: -5, score: 5 }, feedback: 'Proteger rotas e civis fortalece a resiliência social. O contexto histórico inclui racionamento e deslocamentos em grande escala.' },
        { title: 'Concentrar a logística em pontos estratégicos', detail: 'Acelera operações, mas deixa regiões vulneráveis.', effects: { industry: 4, supply: -7, cohesion: -5, score: 1 }, feedback: 'A concentração logística pode gerar rapidez em certos setores, mas deixa menos margem para necessidades civis.' }
      ]},
      { type: 'MOVIMENTAÇÃO', prompt: 'O desembarque na Normandia abre uma nova frente. Como conduzir o avanço sem perder de vista os civis?', options: [
        { title: 'Avançar com coordenação e corredores humanitários', detail: 'Combina pressão estratégica com proteção civil.', effects: { diplomacy: 5, cohesion: 7, supply: -4, score: 7 }, territory: 'franca', feedback: 'Coordenação e corredores de ajuda valorizam a proteção civil. A libertação da França foi um processo complexo, com riscos e deslocamentos.' },
        { title: 'Concentrar o avanço numa ruptura rápida', detail: 'Busca velocidade, com alto custo logístico.', effects: { industry: -7, supply: -8, cohesion: -4, score: 2 }, territory: 'franca', feedback: 'Um avanço concentrado pode pressionar as linhas adversárias, mas aumenta o custo logístico e os riscos para áreas habitadas.' }
      ]},
      { type: 'RECONSTRUÇÃO', prompt: 'A guerra na Europa termina. Como lidar com reconstrução, deslocados e uma nova ordem internacional?', options: [
        { title: 'Investir em reconstrução e cooperação', detail: 'Prioriza recuperação civil e instituições multilaterais.', effects: { supply: 9, diplomacy: 9, cohesion: 8, industry: -5, score: 9 }, feedback: 'A reconstrução e a cooperação internacional foram prioridades do pós-guerra. A ONU foi fundada em 1945, num mundo profundamente transformado.' },
        { title: 'Priorizar segurança nacional imediata', detail: 'Fortalece a posição própria, com menor cooperação.', effects: { industry: 7, diplomacy: -7, cohesion: -2, score: 2 }, feedback: 'A segurança imediata importa, mas rivalidades entre aliados contribuíram para uma nova ordem de tensões no pós-guerra.' }
      ]}
    ]
  }
};

const countryFacts = {
  noruega: ['Noruega', 'Neutro em 1939; ocupada em 1940', 'A Noruega declarou neutralidade em 1939, mas foi invadida e ocupada pela Alemanha em abril de 1940. A posição estratégica no Atlântico Norte e seus recursos tiveram importância para ambos os lados.', 'A ocupação provocou resistência e um governo norueguês no exílio.'],
  suecia: ['Suécia', 'Neutra durante as duas guerras', 'A Suécia manteve neutralidade formal, embora suas escolhas comerciais, humanitárias e de trânsito tenham mudado conforme a conjuntura. Neutralidade não significou ausência de dilemas.', 'O país recebeu refugiados e negociou com diferentes potências.'],
  finlandia: ['Finlândia', 'Guerra de Inverno e Guerra de Continuação', 'A Finlândia combateu a União Soviética na Guerra de Inverno (1939–1940) e, depois, participou da Guerra de Continuação (1941–1944), em aliança de fato com a Alemanha contra a URSS.', 'A experiência finlandesa não se encaixa de forma simples nos blocos da guerra.'],
  'reino-unido': ['Reino Unido', 'Aliado', 'O Reino Unido declarou guerra à Alemanha após a invasão da Polônia. Em 1940, tornou-se o principal centro aliado na Europa ocidental após a queda da França.', 'A Batalha da Grã-Bretanha e a vida sob bombardeios marcaram a população civil.'],
  irlanda: ['Irlanda', 'Neutra na Segunda Guerra', 'O Estado irlandês manteve neutralidade oficial durante a Segunda Guerra Mundial, embora cidadãos tenham servido nas forças britânicas e houvesse cooperação discreta em algumas áreas.', 'A neutralidade foi uma escolha política num contexto de independência recente.'],
  portugal: ['Portugal', 'Neutralidade e diplomacia', 'Portugal manteve neutralidade na Segunda Guerra, preservando relações com os dois lados. Em 1943, permitiu o uso aliado de bases nos Açores, conforme um acordo com o Reino Unido.', 'A neutralidade foi negociada e mudou diante do contexto estratégico.'],
  espanha: ['Espanha', 'Neutralidade / não beligerância', 'Após a Guerra Civil Espanhola, Franco declarou neutralidade e depois não beligerância. A Espanha não entrou oficialmente na guerra, embora tenha havido apoio ao Eixo e voluntários na Divisão Azul.', 'A guerra civil de 1936–1939 antecedeu e se conectou às tensões europeias.'],
  franca: ['França', 'Aliada; ocupada em 1940', 'A França foi uma das principais potências aliadas na Primeira Guerra. Na Segunda, foi derrotada em 1940 e dividida entre ocupação alemã e o regime de Vichy; a França Livre e a Resistência continuaram a luta.', 'Experiências de ocupação, colaboração e resistência coexistiram.'],
  belgica: ['Bélgica', 'Neutralidade violada; ocupação', 'A Bélgica tentou manter neutralidade, mas foi invadida pela Alemanha nas duas guerras. Sua posição entre França e Alemanha a tornou um corredor estratégico.', 'A ocupação afetou profundamente a vida civil e a economia.'],
  'paises-baixos': ['Países Baixos', 'Neutros em 1939; ocupados em 1940', 'Os Países Baixos declararam neutralidade, mas foram invadidos pela Alemanha em maio de 1940 e permaneceram ocupados até 1945.', 'A ocupação incluiu perseguição, deportações e resistência.'],
  alemanha: ['Alemanha', 'Potência central / Eixo', 'O Império Alemão foi uma potência central em 1914. Sob o regime nazista, a Alemanha iniciou a Segunda Guerra ao invadir a Polônia em 1939 e conduziu perseguição sistemática, guerra de agressão e o Holocausto.', 'O Holocausto foi o genocídio de seis milhões de judeus europeus, além da perseguição e morte de milhões de outras vítimas pelo regime nazista.'],
  dinamarca: ['Dinamarca', 'Ocupada em 1940', 'A Dinamarca foi invadida pela Alemanha em abril de 1940. A ocupação durou até 1945; houve colaboração, resistência e esforços de resgate de judeus dinamarqueses em 1943.', 'O resgate de milhares de judeus para a Suécia é um episódio importante de ação civil.'],
  polonia: ['Polônia', 'Invadida em 1939', 'A invasão alemã de 1º de setembro de 1939 iniciou a guerra na Europa. A União Soviética invadiu pelo leste em 17 de setembro, conforme protocolos secretos do pacto germano-soviético.', 'A Polônia sofreu ocupação brutal e o Holocausto; milhões de civis foram mortos.'],
  suica: ['Suíça', 'Neutralidade armada', 'A Suíça manteve neutralidade armada durante a Segunda Guerra e foi cercada por territórios do Eixo. Sua política de neutralidade e acolhimento de refugiados segue sendo tema de debate histórico.', 'A neutralidade foi uma condição política e estratégica, não isolamento total.'],
  italia: ['Itália', 'Aliada em 1915; Eixo até 1943', 'A Itália entrou na Primeira Guerra ao lado da Entente em 1915. Na Segunda, aliou-se à Alemanha nazista; após a queda de Mussolini em 1943, o país se dividiu entre ocupação alemã, Resistência e forças aliadas.', 'A guerra civil italiana de 1943–1945 dividiu o país e a sociedade.'],
  austria: ['Áustria-Hungria / Áustria', 'Potência central em 1914', 'A Áustria-Hungria foi uma das potências centrais na Primeira Guerra e se dissolveu em 1918. A Áustria foi anexada pela Alemanha nazista em 1938 e permaneceu incorporada até 1945.', 'O fim do império redesenhou a Europa central.'],
  romenia: ['Romênia', 'Mudança de aliança em 1944', 'A Romênia lutou com as Potências Centrais a partir de 1916. Na Segunda Guerra, aliou-se ao Eixo e participou da invasão da URSS; em agosto de 1944, mudou de lado.', 'Petróleo e posição geográfica tornaram o país estratégico.'],
  balkans: ['Bálcãs', 'Região de ocupação e resistência', 'A região dos Bálcãs foi palco de ocupações, governos colaboracionistas, guerras civis e movimentos de resistência, com forte impacto sobre a população.', 'As fronteiras e os nomes dos países mudaram entre os períodos.'],
  grecia: ['Grécia', 'Invadida em 1940; ocupada em 1941', 'A Grécia resistiu à invasão italiana em 1940, mas foi invadida pela Alemanha em 1941. A ocupação trouxe fome, repressão e uma resistência ativa.', 'A fome de 1941–1942 causou enorme mortalidade civil.'],
  turquia: ['Império Otomano / Turquia', 'Potência central; depois neutralidade', 'O Império Otomano entrou na Primeira Guerra ao lado das Potências Centrais. A República da Turquia permaneceu neutra na maior parte da Segunda Guerra e declarou guerra ao Eixo em fevereiro de 1945.', 'A queda do império alterou profundamente o mapa do Oriente Médio.'],
  'uniao-sovietica': ['Rússia / União Soviética', 'Aliada a partir de 1917 / 1941', 'A Rússia saiu da Primeira Guerra após a Revolução de 1917. Na Segunda, a União Soviética assinou um pacto de não agressão com a Alemanha em 1939, foi invadida em 1941 e tornou-se uma das principais potências aliadas.', 'A Frente Oriental foi marcada por destruição e perdas humanas em escala imensa.'],
  'estados-unidos': ['Estados Unidos', 'Entrada em 1917 e 1941', 'Os EUA entraram na Primeira Guerra em 1917. Na Segunda, entraram após o ataque japonês a Pearl Harbor, em dezembro de 1941, e contribuíram para o esforço aliado em várias frentes.', 'A mobilização industrial mudou a economia e a sociedade norte-americanas.']
};

const timeline = [
  [1914, 'A guerra começa', 'Crise de julho e invasão da Bélgica'], [1915, 'Novas frentes', 'Itália entra na guerra ao lado da Entente'], [1916, 'Guerra de desgaste', 'Verdun e Somme'], [1917, 'Ano de rupturas', 'Revoluções russas; EUA entram na guerra'], [1918, 'Armistício', 'Fim dos combates em 11 de novembro'], [1919, 'Versalhes', 'Tratado redefine fronteiras e reparações'], [1933, 'Nazismo no poder', 'Hitler torna-se chanceler da Alemanha'], [1939, 'Guerra na Europa', 'Invasão da Polônia'], [1940, 'Ocupação', 'Queda da França; Batalha da Grã-Bretanha'], [1941, 'Guerra global', 'Invasão da URSS; Pearl Harbor'], [1942, 'Viradas', 'Midway, El Alamein e Stalingrado'], [1944, 'Libertação', 'Desembarque aliado na Normandia'], [1945, 'Fim da guerra', 'Rendição alemã; ONU fundada']
];

const state = { campaign: null, turn: 0, resources: null, selectedCountry: null, chosenOption: null, decisionRecorded: false, log: [], allies: [], opponents: [], controlled: [], territoryCount: 0, score: 0 };
const byId = (id) => document.getElementById(id);
const startScreen = byId('start-screen');
const campaignScreen = byId('campaign-screen');
const endingScreen = byId('ending-screen');

function startCampaign(key) {
  const campaign = campaigns[key];
  state.campaign = campaign;
  state.turn = 0;
  state.resources = { ...campaign.starting };
  state.score = 0;
  state.log = [];
  state.allies = [...campaign.initialAllies];
  state.opponents = [...campaign.initialOpponents];
  state.controlled = key === 'wwi' ? ['franca', 'reino-unido'] : ['reino-unido'];
  state.territoryCount = state.controlled.length;
  startScreen.hidden = true;
  endingScreen.hidden = true;
  campaignScreen.hidden = false;
  byId('campaign-title').textContent = campaign.name;
  byId('campaign-kicker').textContent = `CAMPANHA · ${campaign.side.toUpperCase()} · FRENTE EUROPEIA`;
  renderTimeline();
  renderTurn();
  renderMap();
  updateResources();
  setCountry(null);
}

function currentEvent() {
  return state.campaign.events[state.turn];
}

function renderTurn() {
  const campaign = state.campaign;
  const year = campaign.years[state.turn];
  if (campaign === campaigns.wwi) {
    if (year >= 1915 && !state.allies.includes('italia')) state.allies.push('italia');
    if (year >= 1917) {
      if (!state.allies.includes('estados-unidos')) state.allies.push('estados-unidos');
      state.allies = state.allies.filter((country) => country !== 'uniao-sovietica');
    }
  } else if (year >= 1940) {
    ['noruega', 'belgica', 'paises-baixos', 'grecia'].forEach((country) => {
      if (!state.allies.includes(country)) state.allies.push(country);
    });
    if (!state.opponents.includes('italia')) state.opponents.push('italia');
  }
  renderMap();
  if (state.selectedCountry) setCountry(state.selectedCountry);
  const event = currentEvent();
  const decision = campaign.decisions[state.turn];
  byId('current-year').textContent = year;
  byId('turn-count').textContent = `TURNO ${state.turn + 1} / ${campaign.years.length}`;
  byId('map-date').textContent = `${event.title.toUpperCase()} · ${year}`;
  byId('event-explanation').textContent = event.brief;
  byId('decision-type').textContent = decision.type;
  byId('decision-prompt').textContent = decision.prompt;
  byId('decision-feedback').hidden = true;
  byId('next-turn').disabled = true;
  byId('next-turn').innerHTML = 'Registrar decisão <span aria-hidden="true">→</span>';
  state.decisionRecorded = false;
  state.chosenOption = null;
  const optionsRoot = byId('decision-options');
  optionsRoot.replaceChildren();
  decision.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'decision-option';
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-copy"><span class="option-title"></span><span class="option-detail"></span></span>`;
    button.querySelector('.option-title').textContent = option.title;
    button.querySelector('.option-detail').textContent = option.detail;
    button.addEventListener('click', () => chooseOption(index));
    optionsRoot.append(button);
  });
  renderTimeline();
}

function chooseOption(index) {
  state.chosenOption = index;
  [...byId('decision-options').children].forEach((button, buttonIndex) => button.classList.toggle('selected', buttonIndex === index));
  byId('next-turn').disabled = false;
  byId('decision-feedback').hidden = true;
}

function applyDecision() {
  if (state.chosenOption === null || state.decisionRecorded) return;
  const decision = state.campaign.decisions[state.turn];
  const option = decision.options[state.chosenOption];
  Object.entries(option.effects).forEach(([key, amount]) => {
    if (key === 'score') state.score += amount;
    else state.resources[key] = clamp(state.resources[key] + amount);
  });
  (option.allies || (option.ally ? [option.ally] : [])).forEach((country) => {
    if (!state.allies.includes(country)) state.allies.push(country);
  });
  if (option.territory && !state.controlled.includes(option.territory)) {
    state.controlled.push(option.territory);
    state.territoryCount += 1;
  }
  state.score += Math.max(0, Math.round((state.resources.cohesion + state.resources.diplomacy + state.resources.supply) / 45));
  state.decisionRecorded = true;
  state.log.unshift({ year: state.campaign.years[state.turn], title: option.title, text: option.feedback });
  byId('decision-feedback').textContent = option.feedback;
  byId('decision-feedback').hidden = false;
  updateResources();
  renderMap();
  renderLog();
  byId('next-turn').textContent = state.turn === state.campaign.years.length - 1 ? 'Ver relatório final' : 'Avançar para o próximo turno';
  byId('next-turn').innerHTML = `${state.turn === state.campaign.years.length - 1 ? 'Ver relatório final' : 'Avançar para o próximo turno'} <span aria-hidden="true">→</span>`;
}

function advanceTurn() {
  if (!state.decisionRecorded) return;
  if (state.turn >= state.campaign.years.length - 1) {
    showEnding();
    return;
  }
  state.turn += 1;
  renderTurn();
}

function clamp(value) { return Math.max(0, Math.min(100, value)); }

function updateResources() {
  byId('industry-value').textContent = state.resources.industry;
  byId('supply-value').textContent = state.resources.supply;
  byId('cohesion-value').textContent = state.resources.cohesion;
  byId('diplomacy-value').textContent = state.resources.diplomacy;
  byId('score-value').textContent = String(Math.max(0, state.score)).padStart(3, '0');
}

function renderMap() {
  document.querySelectorAll('.map-country').forEach((country) => {
    const key = country.dataset.country;
    country.classList.toggle('is-ally', state.allies.includes(key));
    country.classList.toggle('is-opposing', state.opponents.includes(key));
    country.classList.toggle('is-neutral', !state.allies.includes(key) && !state.opponents.includes(key));
    country.classList.toggle('is-selected', state.selectedCountry === key);
  });
}

function setCountry(key) {
  state.selectedCountry = key;
  renderMap();
  const fact = key ? countryFacts[key] : null;
  if (!fact) {
    byId('country-status').textContent = 'PANORAMA DO CONFLITO';
    byId('country-name').textContent = 'O continente em tensão';
    byId('country-description').textContent = 'Selecione um país no mapa para compreender sua posição, seus interesses e o impacto da guerra em sua população.';
    byId('country-note').textContent = 'A guerra envolveu sociedades inteiras. Este jogo trata de decisões políticas e logísticas, não de combate individual.';
    return;
  }
  byId('country-status').textContent = state.allies.includes(key) ? `COALIZÃO · ${state.campaign.side.toUpperCase()}` : state.opponents.includes(key) ? 'POTÊNCIA ADVERSÁRIA / OCUPANTE' : 'NEUTRALIDADE, OCUPAÇÃO OU CONTEXTO REGIONAL';
  byId('country-name').textContent = fact[0];
  byId('country-description').textContent = fact[2];
  byId('country-note').textContent = fact[3];
}

function renderTimeline() {
  const activeYear = state.campaign.years[state.turn];
  const root = byId('timeline-track');
  root.replaceChildren();
  timeline.forEach(([year, title, summary]) => {
    const item = document.createElement('div');
    item.className = `timeline-item${year === activeYear ? ' active' : ''}`;
    item.setAttribute('aria-label', `${year}: ${title}. ${summary}`);
    item.innerHTML = `<span class="timeline-year">${year}</span><span class="timeline-event"></span><span class="timeline-summary"></span>`;
    item.querySelector('.timeline-event').textContent = title;
    item.querySelector('.timeline-summary').textContent = summary;
    root.append(item);
  });
}

function renderLog() {
  const root = byId('decision-log');
  root.replaceChildren();
  state.log.forEach((entry) => {
    const item = document.createElement('li');
    item.innerHTML = `<strong>${entry.year} · ${entry.title}.</strong> ${entry.text}`;
    root.append(item);
  });
}

function showEnding() {
  const { resources, campaign } = state;
  const resilience = Math.round((resources.cohesion + resources.supply) / 2);
  const score = Math.max(0, state.score);
  const verdict = resilience >= 68 ? 'Sua condução priorizou coesão e abastecimento. A simulação aponta melhores condições para proteger a população e sustentar a recuperação, embora nenhuma decisão elimine as perdas e rupturas da guerra.' : resilience >= 43 ? 'Sua campanha equilibrou capacidade produtiva, alianças e proteção civil. O cenário final revela ganhos e custos: decisões estratégicas também distribuem riscos entre governos e populações.' : 'A campanha termina com recursos sociais sob forte pressão. As escolhas de curto prazo tiveram custos duradouros para a população e para a cooperação entre aliados.';
  const reflection = campaign === campaigns.wwi
    ? 'O armistício de 1918 encerrou os combates, mas não resolveu as disputas sobre fronteiras, reparações e autodeterminação. O pós-guerra e o Tratado de Versalhes são essenciais para entender as tensões das décadas seguintes.'
    : 'A vitória aliada não apagou o custo humano, o genocídio, as cidades destruídas e os deslocamentos. A criação da ONU e a reconstrução conviveram com novas rivalidades que marcaram o pós-guerra.';
  byId('ending-period').textContent = campaign.period;
  byId('ending-lead').textContent = verdict;
  byId('ending-reflection-text').textContent = reflection;
  byId('ending-stats').innerHTML = [
    ['PONTUAÇÃO', String(score).padStart(3, '0'), 'índice de decisões'],
    ['COESÃO FINAL', `${resources.cohesion}%`, 'apoio social simulado'],
    ['DIPLOMACIA', `${resources.diplomacy}%`, 'cooperação entre aliados'],
    ['TERRITÓRIOS', String(state.territoryCount), 'sob controle simulado']
  ].map(([label, value, note]) => `<div class="ending-stat"><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`).join('');
  campaignScreen.hidden = true;
  endingScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.campaign-choice').forEach((button) => button.addEventListener('click', () => startCampaign(button.dataset.campaign)));
document.querySelectorAll('.map-country').forEach((country) => {
  country.addEventListener('click', () => setCountry(country.dataset.country));
  country.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setCountry(country.dataset.country); }
  });
});
byId('next-turn').addEventListener('click', () => {
  if (state.decisionRecorded) advanceTurn();
  else applyDecision();
});
byId('restart-button').addEventListener('click', () => startCampaign(state.campaign === campaigns.wwi ? 'wwi' : 'wwii'));
byId('back-to-menu').addEventListener('click', () => {
  endingScreen.hidden = true;
  startScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
