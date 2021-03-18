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
  subtitle: 'Psicóloga clínica',
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
    img: 'project.jpg',
    title: 'Harmonize seus sentimentos',
    info: '',
    info2: '',
    url: '',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Não saia de casa',
    info: '',
    info2: '',
    url: '',
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
    q: 'something?',
    a: 'answer',
  },
  {
    id: nanoid(),
    q: 'something?',
    a: 'answer',
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
