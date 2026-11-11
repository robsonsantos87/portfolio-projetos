'use strict';

const studies = {
  portal: {
    title: 'Portal de Educação',
    stage: 'VERSÃO PILOTO · ESTUDO INSTITUCIONAL ANONIMIZADO',
    summary: 'Estruturação de um módulo web para apoiar a gestão de instrutores e o acesso organizado às informações.',
    challenge: 'Organizar dados de instrutores, definir responsabilidades de acesso e aproveitar informações já existentes sem perder clareza operacional.',
    solution: 'Levantamento de fluxos, definição de perfis de administração e consulta, organização de registros por área de atuação, importação de base anterior e validação das operações.',
    role: 'Compreensão das demandas, requisitos funcionais, desenho de fluxos e permissões, acompanhamento da implementação, testes e refinamento com apoio de ferramentas de desenvolvimento e IA.',
    limits: 'Módulo documentado em piloto; não é apresentada implantação integral nem resultado quantitativo. O projeto institucional está anonimizado e não expõe telas, pessoas ou bases internas.',
    source: 'portal-educacao.md'
  },
  ayla: {
    title: 'Ayla · Agente comercial com IA',
    stage: 'MVP EM EVOLUÇÃO',
    summary: 'Fluxo de atendimento para compreender demandas, registrar briefing e apoiar a continuidade comercial.',
    challenge: 'Evitar que contatos iniciais cheguem sem informações suficientes para identificar a necessidade e organizar o próximo passo.',
    solution: 'Estruturação de perguntas de qualificação, registro de leads, integração de interface web e arquitetura com API de IA e persistência de dados.',
    role: 'Definição dos fluxos, requisitos, estruturação da solução, implementação assistida, testes e evolução de comportamento e atendimento.',
    limits: 'MVP em evolução: integrações e fluxos descritos na documentação não devem ser interpretados como integralmente homologados em produção.',
    source: 'ayla.md'
  },
  financeiro: {
    title: 'Nosso Financeiro',
    stage: 'DESENVOLVIMENTO E HOMOLOGAÇÃO',
    summary: 'Qualidade de dados, revisão de faturas e prevenção de inconsistências em um fluxo de importação financeira.',
    challenge: 'Reduzir retrabalho e possíveis erros durante a transcrição e conferência de transações oriundas de faturas.',
    solution: 'Desenho e testes de etapas para leitura, revisão, conciliação, detecção de duplicidades, conferência de totais e exportação para Excel.',
    role: 'Especificação das necessidades e regras de negócio, testes com faturas e validação de resultados com apoio de ferramentas de desenvolvimento e IA.',
    limits: 'Em homologação. O estudo não afirma fechamento financeiro em produção nem divulga documentos, transações ou dados pessoais.',
    source: 'nosso-financeiro.md'
  },
  studio: {
    title: 'Studio IA Social',
    stage: 'FUNDAÇÃO DO MVP',
    summary: 'Base de aplicação multiempresa com atenção a autenticação e segregação lógica de informações.',
    challenge: 'Permitir que empresas e perfis distintos utilizem uma mesma aplicação sem misturar registros e permissões.',
    solution: 'Estrutura inicial de autenticação, sessões, funções de acesso, company_id, modelagem MySQL e painel responsivo.',
    role: 'Definição de escopo e regras de acesso, estruturação do MVP e acompanhamento da implementação e de testes.',
    limits: 'Os recursos completos de geração de conteúdo com IA ainda são planejados, não apresentados como concluídos.',
    source: 'studio-ia-social.md'
  },
  web: {
    title: 'Presença digital e captação de projetos',
    stage: 'EVOLUÇÃO CONTÍNUA',
    summary: 'Criação de uma experiência web para apresentar serviços, orientar solicitações e qualificar demandas.',
    challenge: 'Converter pedidos genéricos em informações organizadas, adaptadas ao tipo de serviço solicitado.',
    solution: 'Site WordPress com páginas responsivas, formulários condicionais, validações, notificações e fluxo de agendamento.',
    role: 'Levantamento de necessidades, estruturação da solução, implementação assistida com ferramentas digitais e IA, testes e ajustes.',
    limits: 'Projeto próprio em evolução; sem métricas de conversão ou resultados quantitativos não verificados.',
    source: 'potencia.md'
  }
};

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navigation');
if (toggle && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  };
  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}

const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
const projectCards = Array.from(document.querySelectorAll('.project-card'));
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projectCards.forEach(card => {
      const categories = (card.dataset.category || '').split(' ');
      card.hidden = filter !== 'todos' && !categories.includes(filter);
    });
  });
});

const dialog = document.getElementById('case-dialog');
const closeButton = dialog?.querySelector('.dialog-close');
const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const study = studies[button.dataset.project];
    if (!study || !dialog) return;
    setText('case-title', study.title);
    setText('case-stage', study.stage);
    setText('case-summary', study.summary);
    setText('case-challenge', study.challenge);
    setText('case-solution', study.solution);
    setText('case-role', study.role);
    setText('case-limits', study.limits);
    const source = document.getElementById('case-source');
    if (source) source.href = 'https://github.com/robsonsantos87/portfolio-projetos/blob/main/' + study.source;
    if (typeof dialog.showModal === 'function') dialog.showModal();
  });
});
closeButton?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
