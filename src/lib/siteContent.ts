export type Locale = 'en' | 'pt' | 'es';

export const localeOptions: Record<Locale, { label: string; path: string }> = {
  en: { label: 'English', path: '/' },
  pt: { label: 'Português (Brasil)', path: '/pt' },
  es: { label: 'Español', path: '/es' },
};

export const siteContent = {
  en: {
    meta: {
      title: 'Bryan Dietrich Bernhardt — Full Stack Developer',
      description:
        'Full Stack developer with 4+ years of experience building scalable web and mobile solutions, REST/GraphQL APIs, and modern frontend architectures for business products.',
    },
    status: 'Full Stack Developer • 4+ years of experience',
    cta: {
      contact: 'Let’s talk',
      projects: 'View work',
    },
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    about: {
      title: 'About',
      subtitle: 'Engineering mindset, product delivery, and modern web architecture.',
      description:
        'Full Stack developer with 4+ years of experience building scalable web and mobile applications, system integrations, enterprise APIs, and modern interfaces across the full software lifecycle.',
      technologiesTitle: 'Technical skills',
    },
    projects: {
      title: 'Selected work',
      subtitle: 'Product engineering, API integration, modern frontend delivery, and scalable platform work.',
      more: 'Show more',
      less: 'Show less',
      details: 'View details',
      yearLabel: 'Year',
      role: 'Full Stack engineer',
      items: [
        {
          title: 'OK Automotive distribution ecosystem',
          description:
            'Delivered end-to-end platform work spanning data modeling, backend logic, frontend implementation, and operational support. Built and integrated machine learning models through APIs, resolved defects, and participated in Scrum ceremonies, planning, and roadmap decisions.',
          techs: ['.NET', 'Angular', 'TypeScript', 'ML.NET', 'Node.js', 'SQL', 'Git', 'C#', 'REST'],
        },
        {
          title: 'Minha Visita',
          description:
            'Developed and maintained scalable multi-platform applications across web and mobile, focused on availability, performance, and offline-first experiences. I built integrations with REST and GraphQL APIs, implemented i18n across Portuguese, English, and Spanish, and configured build and deployment flows for Docker-based delivery. On the backend, I implemented modules, business rules, and automated tests while improving dependency security in the Node.js ecosystem. I also designed offline-first architecture with automatic data synchronization, allowing the application to remain functional without internet access.',
          techs: ['Vue', 'TypeScript', 'Node.js', 'SQL', 'Docker', 'Git', 'GraphQL'],
        },
      ],
    },
    contact: {
      title: 'Let’s talk?',
      description:
        'Open to engineering roles, technical consulting, and product partnerships where software quality, architecture, and delivery matter.',
      email: 'Send message',
      linkedin: 'LinkedIn',
    },
    footer: {
      socialLinks: 'Social links',
      github: 'GitHub',
      githubAria: 'GitHub profile of Bryan Dietrich Bernhardt (opens in a new tab)',
      linkedinAria: 'LinkedIn profile of Bryan Dietrich Bernhardt (opens in a new tab)',
      copyright: '© {year} Bryan Dietrich Bernhardt. All rights reserved.',
    },
    header: {
      brand: 'Bryan Dietrich Bernhardt home page',
      language: 'Select language',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
    },
    notFound: {
      title: 'Page not found',
      message: 'The page you are looking for may have been moved, deleted, or never existed.',
      backHome: 'Back to home',
    },
    stackHighlights: ['.NET', 'Angular', 'Vue', 'TypeScript', 'Node.js', 'SQL', 'Docker', 'Git', 'C#', 'GraphQL'],
  },
  pt: {
    meta: {
      title: 'Bryan Dietrich Bernhardt — Desenvolvedor Full Stack',
      description:
        'Desenvolvedor Full Stack com mais de 4 anos de experiência em aplicações web e mobile escaláveis, APIs REST/GraphQL e arquitetura moderna de frontend.',
    },
    status: 'Desenvolvedor Full Stack • 4+ anos de experiência',
    cta: {
      contact: 'Vamos conversar',
      projects: 'Ver trabalhos',
    },
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    about: {
      title: 'Sobre',
      subtitle: 'Mentalidade de engenharia, entrega de produto e arquitetura web moderna.',
      description:
        'Desenvolvedor Full Stack com mais de 4 anos de experiência em aplicações web e mobile escaláveis, integrações de sistemas, APIs empresariais e interfaces modernas em todo o ciclo de vida do software.',
      technologiesTitle: 'Habilidades técnicas',
    },
    projects: {
      title: 'Trabalhos selecionados',
      subtitle: 'Engenharia de produto, integração de APIs, entrega de frontend moderno e plataformas escaláveis.',
      more: 'Mostrar mais',
      less: 'Mostrar menos',
      details: 'Ver detalhes',
      yearLabel: 'Ano',
      role: 'Engenheiro Full Stack',
      items: [
        {
          title: 'Ecossistema de distribuição OK Automotive',
          description:
            'Atuei no desenvolvimento de módulos da plataforma, cobrindo modelagem de dados, lógica de backend, implementação de frontend e integrações de múltiplas APIs. Construi e integrei modelos de machine learning, corrigi bugs e participei de reuniões de Scrum, planejamento e decisões de roadmap.',
          techs: ['.NET', 'Angular', 'TypeScript', 'ML.NET', 'Node.js', 'SQL', 'Git', 'C#', 'REST'],
        },
        {
          title: 'Minha Visita',
          description:
            'Desenvolvi e mantive aplicações multiplataforma web e mobile com foco em disponibilidade, performance e experiências offline-first. Implementei integrações com APIs REST e GraphQL, apliquei i18n em português, inglês e espanhol e configurei fluxos de build e deploy para entregas com Docker. No backend, desenvolvi módulos, regras de negócio e testes automatizados, além de melhorar a segurança de dependências no ecossistema Node.js. Também projetei uma arquitetura offline-first com sincronização automática de dados, permitindo que a aplicação funcionasse plenamente sem conexão com a internet.',
          techs: ['Vue', 'TypeScript', 'Node.js', 'SQL', 'Docker', 'Git', 'GraphQL'],
        },
      ],
    },
    contact: {
      title: 'Vamos conversar?',
      description:
        'Aberto a oportunidades em engenharia, consultoria técnica e parcerias de produto em que qualidade de software, arquitetura e entrega fazem diferença.',
      email: 'Enviar mensagem',
      linkedin: 'LinkedIn',
    },
    footer: {
      socialLinks: 'Links sociais',
      github: 'GitHub',
      githubAria: 'Perfil do GitHub de Bryan Dietrich Bernhardt (abre em nova aba)',
      linkedinAria: 'Perfil do LinkedIn de Bryan Dietrich Bernhardt (abre em nova aba)',
      copyright: '© {year} Bryan Dietrich Bernhardt. Todos os direitos reservados.',
    },
    header: {
      brand: 'Página inicial de Bryan Dietrich Bernhardt',
      language: 'Selecionar idioma',
      menuOpen: 'Abrir menu de navegação',
      menuClose: 'Fechar menu de navegação',
    },
    notFound: {
      title: 'Página não encontrada',
      message: 'A página que você procura pode ter sido movida, removida ou nunca ter existido.',
      backHome: 'Voltar ao início',
    },
    stackHighlights: ['.NET', 'Angular', 'Vue', 'TypeScript', 'Node.js', 'SQL', 'Docker', 'Git', 'C#', 'GraphQL'],
  },
  es: {
    meta: {
      title: 'Bryan Dietrich Bernhardt — Desarrollador Full Stack',
      description:
        'Desarrollador Full Stack con más de 4 años de experiencia en aplicaciones web y móviles escalables, APIs REST/GraphQL y arquitecturas modernas de frontend.',
    },
    status: 'Desarrollador Full Stack • 4+ años de experiencia',
    cta: {
      contact: 'Hablemos',
      projects: 'Ver trabajos',
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    about: {
      title: 'Sobre',
      subtitle: 'Mentalidad de ingeniería, entrega de producto y arquitectura web moderna.',
      description:
        'Desarrollador Full Stack con más de 4 años de experiencia en aplicaciones web y móviles escalables, integraciones de sistemas, APIs empresariales e interfaces modernas a lo largo de todo el ciclo de vida del software.',
      technologiesTitle: 'Habilidades técnicas',
    },
    projects: {
      title: 'Trabajos seleccionados',
      subtitle: 'Ingeniería de producto, integración de APIs, entrega de frontend moderno y plataformas escalables.',
      more: 'Mostrar más',
      less: 'Mostrar menos',
      details: 'Ver detalles',
      yearLabel: 'Año',
      role: 'Ingeniero Full Stack',
      items: [
        {
          title: 'Ecosistema de distribución OK Automotive',
          description:
            'Participé en el desarrollo integral de la plataforma, cubriendo modelado de datos, lógica de backend, implementación del frontend y soporte operativo. Construí e integré modelos de machine learning a través de APIs, corrigi errores y participé en ceremonias de Scrum, planificación y decisiones de roadmap.',
          techs: ['.NET', 'Angular', 'TypeScript', 'ML.NET', 'Node.js', 'SQL', 'Git', 'C#', 'REST'],
        },
        {
          title: 'Minha Visita',
          description:
            'Desarrollé y mantuve aplicaciones multiplataforma web y móviles con enfoque en disponibilidad, rendimiento y experiencias offline-first. Implementé integraciones con APIs REST y GraphQL, apliqué i18n en portugués, inglés y español y configuré flujos de build y despliegue para entregas con Docker. En el backend, desarrollé módulos, reglas de negocio y pruebas automatizadas, además de mejorar la seguridad de dependencias en el ecosistema Node.js. También diseñé una arquitectura offline-first con sincronización automática de datos, permitiendo que la aplicación funcionara plenamente sin conexión a internet.',
          techs: ['Vue', 'TypeScript', 'Node.js', 'SQL', 'Docker', 'Git', 'GraphQL'],
        },
      ],
    },
    contact: {
      title: '¿Hablamos?',
      description:
        'Abierto a oportunidades en ingeniería, consultoría técnica y asociaciones de producto donde la calidad del software, la arquitectura y la entrega importen.',
      email: 'Enviar mensaje',
      linkedin: 'LinkedIn',
    },
    footer: {
      socialLinks: 'Enlaces sociales',
      github: 'GitHub',
      githubAria: 'Perfil de GitHub de Bryan Dietrich Bernhardt (se abre en una nueva pestaña)',
      linkedinAria: 'Perfil de LinkedIn de Bryan Dietrich Bernhardt (se abre en una nueva pestaña)',
      copyright: '© {year} Bryan Dietrich Bernhardt. Todos los derechos reservados.',
    },
    header: {
      brand: 'Página de inicio de Bryan Dietrich Bernhardt',
      language: 'Seleccionar idioma',
      menuOpen: 'Abrir menú de navegación',
      menuClose: 'Cerrar menú de navegación',
    },
    notFound: {
      title: 'Página no encontrada',
      message: 'La página que buscas puede haber sido movida, eliminada o nunca haber existido.',
      backHome: 'Volver al inicio',
    },
    stackHighlights: ['.NET', 'Angular', 'Vue', 'TypeScript', 'Node.js', 'SQL', 'Docker', 'Git', 'C#', 'GraphQL'],
  },
} as const;

export const getLocaleByPath = (path: string): Locale => {
  if (path.startsWith('/pt')) return 'pt';
  if (path.startsWith('/es')) return 'es';
  return 'en';
};
