const faqItems = [
    {
      question: 'O que é a Arnia?',
      answer: 'A Arnia é uma empresa que faz parte do Grupo Linkcom, herdando mais de 25 anos de experiência no mercado de tecnologia, como também a bagagem de já ter treinado centenas de profissionais da área de tecnologia através da sua jornada. Profissionais que hoje trabalham tanto em startups em ascensão no mercado, com ótimas remunerações e condições de trabalho, como também empresas de grande renome e reconhecimento, como a Amazon.',
    },
    {
      question: 'Qual é a metodologia da Arnia?',
      answer: 'A nossa metodologia consiste nos conceitos da educação de impacto, cujo conceito prevê intensidade, objetividade e imersão. Essa metodologia é construída através de um modelo conhecido como modelo de projetos incrementais: onde o aluno entrega projetos no final de cada período, conhecendo os seus limites e as suas capacidades. É uma metodologia que demanda grande esforço, energia e motivação dos alunos, mas que em contrapartida, apresenta resultados muito rápidos, os colocando o mais cedo possível no mercado de trabalho.',
    },
    {
      question: 'Quais linguagens de programação serão ensinadas?',
      answer: 'Além de ensinar os conceitos básicos de lógica de programação, A Arnia te ensinará a linguagem de programação Typescript, superconjunto da linguagem Javascript , uma das linguagens mais versáteis da atualidade. Além disso, o aluno também aprenderá outras tecnologias muito solicitadas pelo mercado de trabalho, como HTML, CSS, Typescript, React, node.js, express, nest e TypeORM.',
    },
    {
      question: 'A formação é presencial ou online?',
      answer: 'A formação é totalmente online, contudo sede da empresa está de portas abertas para aqueles que estiverem em Belo Horizonte e quiserem um local para assistir aula, seja por questões logísticas, mesmo para conhecer melhor a empresa e ver profissionais em atuação ou, principalmente, para assistir aula em grupo.',
    },
    {
      question: 'Quais são os pré-requisitos para estudar na Arnia?',
      answer: 'Ter disponibilidade para estudar conosco à distância nas nossas aulas e outras atividades online e ao vivo. Será preciso uma dedicação mínima de 4h30 todas as noites de segunda à sexta e muito estudo em parte dos finais de semana e feriados. É necessário também possuir um computador, preferencialmente notebook, com conexão de Internet. Por fim, é necessário a aprovação no nosso processo seletivo. Porém, não é necessário possuir conhecimento prévio de programação!',
    },
    {
      question: 'Preciso de algum conhecimento de programação para estudar na Arnia?',
      answer: 'Não. A proposta da Arnia é de transformar alunos sem nenhum conhecimento prévio de programação em desenvolvedores plenos. Logo, você poderá estudar e acompanhar o curso se esse for o seu primeiro contato com tecnologia, como também se você já estudou programação anteriormente.',
    },
    {
      question: 'Quais são as datas das próximas turmas da Arnia?',
      answer: 'Você encontra as datas e demais informações sobre nossas próximas turmas assim que efetuar sua inscrição em nosso site.',
    },
    {
      question: 'Como funciona o processo seletivo?',
      answer: 'Nosso processo seletivo é composto de 3 entrevistas. A primeira delas é uma triagem para saber se o candidato entendeu mesmo nossa forma de trabalho e explicar quem somos nós. A segunda entrevista é uma entrevista técnica que visa saber o relacionamento que o candidato tem com a tecnologia. Também é objetivo dessa entrevista apresentar a metodologia de ensino para que o candidato avalie se está realmente disposto a embarcar nesta imersão. A terceira entrevista é uma avaliação de perfil, feita com a equipe de RH que acompanhará o aluno em toda sua jornada, da seleção ao emprego.',
    },
    {
      question: 'Se por algum motivo eu não quiser continuar estudando na Arnia, tenho que pagar algo?',
      answer: 'Caso você mude de ideia e desista do curso em até 15 dias após o início das aulas, você não paga absolutamente nada, sem qualquer tipo de ônus ou dívida. Após os 15 primeiros dias de formação, caso você desista, deverá pagar um valor calculado proporcionalmente com base nos blocos cursados até o momento do desligamento, conforme detalhado nos documentos contratuais que serão apresentados.',
    },
  ];

  const faq = document.getElementById('faq-list');

  faqItems.forEach((item) => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');

    const question = document.createElement('div');
    question.classList.add('faq-question');
    question.textContent = item.question;

    const expandButton = document.createElement('button');
    expandButton.classList.add('button')
    expandButton.textContent = 'Expandir';

    const answer = document.createElement('div');
    answer.classList.add('faq-answer');
    answer.textContent = item.answer;

    faqItem.appendChild(question);
    question.appendChild(expandButton);
    faqItem.appendChild(answer);

    faq.appendChild(faqItem);

    expandButton.addEventListener('click', () => {
        answer.classList.toggle('active');
        expandButton.textContent = answer.classList.contains('active') ? 'Ocultar' : 'Expandir';
      });
  });