import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Psicóloga clínica', // e.g: 'Name | Developer'
  lang: 'pt-br', // e.g: en, es, fr, jp
  description: 'Psicologia', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  headline: '"Ao tocar uma alma humana, seja apenas outra alma humana"',
  source: '— Carl Gustav Jung',
  subtitle:
    'Conheça os benefícios da terapia humanista existencial fenomenológica? Marque uma sessão com a psicóloga Érida Bastos Castilho (CRP 05/51653) ou clique em saiba mais.',
  cta: 'marcar sessão',
  cta2: 'saiba mais',
};

// CLIENT DATA
export const clientData = [
  {
    title: 'Adolescentes',
    text:
      'Momento de escolha do caminho profissional, muita insegurança, pressões, não é mais criança mas não é adulto, busca de identidade e afirmação, transformações corporais.fase de conflito. nececssidade de falar.',
  },
  {
    title: 'Adultos',
    text: 'Something',
  },
  {
    title: 'Terceira idade',
    text:
      'A psicoterapia é um recurso que pode facilitar o processo de envelhecimento. É importante o acolhimento na sua dor, para que haja compreensão, aceitação das mudanças, encontro de alternativas aos seus anseios e à uma nova maneira de se ver e se posicionar no mundo.',
  },
];

// ABORDAGEM DATA
export const abordagemData = {
  title: 'A abordagem',
  text: 'O que ela pensa, o que ela traz, valoriza o humano',
};

// PROJECTS DATA
export const benefitsData = [
  {
    id: nanoid(),
    img: 'benefit01.png',
    title: 'Harmonize seus sentimentos',
    info: '',
    side: 'right',
  },
  {
    id: nanoid(),
    img: 'benefit02.png',
    title: 'Não saia de casa',
    info: '',
    side: 'left',
  },
];

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Psicóloga clínica humanista-existencial fenomenológica',
  paragraphTwo: 'Oi',
  paragraphThree: 'Oi',
};

// CLIENT DATA
export const lifeData = [
  {
    title: 'Relações extraordinárias',
    text:
      'Relações interpessoais ao estabelececr limites claros entre o que é seu e é do outro, posicionando-se com asssertividade. alem de ver o outro pela visão dele, não pela sua própria.',
  },
  {
    title: 'Clareza mental',
    text:
      'Amplia a consciência,  percepção melhor da vida fora e dentro dela mesma. tendo como consequencia decisões, não se perder nos papeis.',
  },
  {
    title: 'Conquistas',
    text:
      'Ap obter clareza mental, uma consequência do foco é maior capacidade de conquistas se aproprie do que é dela, tirando os atravessamentos, influências. Apropria de si mesma, seus sentimentos e escolhas. ',
  },
];

// FAQ DATA
export const faqData = [
  {
    id: nanoid(),
    q: 'Quanto tempo leva a psicoterapia?',
    a:
      'Muitos querem saber, logo ao marcarem a primeira sessão, quanto tempo irá durar o tratamento. A duração de um tratamento psicoterapêutico varia consideravelmente dependendo da pessoa e da natureza das questões a serem trabalhadas. É impossível determinar com precisão o tempo necessário para o aparecimento de resultados. Vários fatores podem influenciar nessa linha do tempo como: a natureza do problema em si,  por quanto tempo o problema tem sido um problema (pode ser recente, pode ser de longa duração), do apoio recebido da família e amigos, da dedicação, compromisso e entrega no processo. Na minha prática clínica, a maioria dos pacientes/clientes levaram anos para procurar o tratamento, seja por receio de falarem sobre seu problema e serem julgados, por sentirem vergonha, resistência ao enfrentamento e por falta de recursos financeiros.',
  },
  {
    id: nanoid(),
    q: 'É preciso ter coragem para fazer psicoterapia?',
    a:
      'Sim, é preciso ter coragem para enfrentar um processo de psicoterapia, porque  não é nada confortável falar dos traumas, das fraquezas,  das dores, das perdas. No entanto, a pessoa já está em sofrimento e terá um retorno que será bom, proveitoso e produtivo, refazendo sua realidade interna e externa. Contardo Calligaris pontua que: "Uma psicoterapia é uma experiência que transforma, pode-se sair dela sem o sofrimento do qual a gente se queixava inicialmente, mas ao custo de uma mudança. Na saída, não somos os mesmos sem dor, somos outros, diferentes."',
  },
  {
    id: nanoid(),
    q: 'Quais são as vantagens do atendimento online em relação ao atendimento presencial?',
    a:
      'Facilita escolher o profissional com a abordagem de trabalho que você mais se indentifica,  independente da distância; Comodidade, já que você só vai precisar de um celular e uma boa conexão de internet; Redução de gasto de tempo com o deslocamento e de custos indiretos, como: úber, gasolina, estacionamento. Essa modalidade de atendimento já foi  regulamentada pelo Conselho Federal de Psicologia na resolução CFP 011/2018. Vale ressaltar, que o acolhimento e o entrosamento entre psicólogo e paciente, necessários para o vínculo terapêutico, ocorrem nessa modalidade e a psicoterapia transcorre normalmente.',
  },
  {
    id: nanoid(),
    q: 'O que pode atrapalhar o atendimento online?',
    a:
      'Como o atendimento é feito por chamada de vídeo, o que pode atrapalhar é uma internet ruim ou pouca bateria. Outro problema é o paciente não ter um espaço para fazer a chamada com a segurança de poder falar a vontade.',
  },
  {
    id: nanoid(),
    q: 'Como é feito o pagamento do atendimento online?',
    a: 'Pagamento psicoterapia online é feita por meio de transferência bancária ou PIX.',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Vamos conversar?',
  btn: 'Ligar agora',
  email: 'eridabastoscastilho@gmail.com',
  phone: 'tel:5522999746820',
  whatsapp: 'https://api.whatsapp.com/send?phone=5522999746820&text=Ola',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://instagram.com/eridabastospsi',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
