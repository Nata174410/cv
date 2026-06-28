// Contenido del CV centralizado.
// NOTA: se omiten datos sensibles (teléfono, dirección, documento).
// Solo se exponen canales de comunicación públicos básicos.

export const profile = {
  brand: 'FISCAL PRECISION',
  name: 'Natalia Daza Gómez',
  role: 'Contadora Pública & Analista Contable',
  tagline:
    'Transformando datos en decisiones financieras estratégicas con integridad y precisión.',
  summary:
    'Contadora Pública graduada de la Fundación Universitaria Los Libertadores, con formación tecnológica en el SENA y certificaciones especializadas en Análisis de Datos (Power BI) y Gestión de Cartera. Experiencia robusta liderando el ciclo contable de extremo a extremo, incluyendo facturación electrónica, nómina y cumplimiento tributario. Perfil orientado a la transformación digital de procesos financieros, con alta capacidad para la toma de decisiones basada en datos y el aseguramiento normativo (NIIF).',
};

export const seo = {
  title: 'Natalia Daza Gómez | Contadora Pública & Analista Contable',
  description:
    'Contadora Pública y Analista Contable en Bogotá. Especialista en NIIF, análisis de datos (Power BI), facturación electrónica, nómina y cumplimiento tributario. Transformando datos en decisiones financieras estratégicas.',
  keywords: [
    'Contadora Pública',
    'Analista Contable',
    'NIIF',
    'IFRS',
    'Power BI',
    'Análisis de Datos',
    'Facturación Electrónica',
    'Nómina',
    'Tributario',
    'DIAN',
    'Bogotá',
    'Colombia',
    'Natalia Daza Gómez',
  ],
  locale: 'es_CO',
  ogImage: 'og-image.jpg',
  themeColor: '#002d62',
};

export const navLinks = [
  { href: '#home', label: 'Inicio' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#education', label: 'Educación' },
  { href: '#skills', label: 'Competencias' },
  { href: '#contact', label: 'Contacto' },
];

export const experience = [
  {
    period: 'Ene 2026 - Presente',
    company: 'Reciclajes Bogotá NS SAS',
    location: 'Bogotá, Colombia',
    title: 'Analista Contable Integral',
    bullets: [
      'Ejecución autónoma del ciclo contable completo (End-to-End), garantizando la integridad de la información financiera de la compañía.',
      'Responsable directa de los procesos de Facturación Electrónica y Nómina integral, cumpliendo con los estándares de la DIAN y UGPP.',
      'Implementación de modelos de gestión de cartera y control de recaudos, optimizando el flujo de caja operativo.',
    ],
  },
  {
    period: 'Ago 2022 - Dic 2025',
    company: 'Grupo Spira SAS',
    location: 'Bogotá, Colombia',
    title: 'Auxiliar Contable',
    bullets: [
      'Gestión de conciliaciones bancarias masivas y administración de cuentas por cobrar/pagar.',
      'Apoyo en la preparación de información exógena y reporte de estados financieros bajo estándares locales e internacionales.',
    ],
  },
];

export const skills = [
  {
    icon: 'monitoring',
    title: 'Análisis',
    description: 'Power BI, Dashboards Financieros, Excel Avanzado.',
    level: 90,
  },
  {
    icon: 'account_balance',
    title: 'Contabilidad',
    description: 'NIIF (IFRS), Ciclo Contable Completo, Auditoría.',
    level: 95,
  },
  {
    icon: 'receipt_long',
    title: 'Tributario',
    description: 'Información Exógena, Retención en la Fuente, IVA, Facturación Electrónica.',
    level: 85,
  },
  {
    icon: 'groups',
    title: 'Laboral',
    description: 'Liquidación de Nómina, Prestaciones Sociales, Seguridad Social.',
    level: 88,
  },
];

export const projects = [
  {
    icon: 'fact_check',
    title: 'Implementación de Nómina Electrónica',
    description:
      'Despliegue exitoso del sistema de nómina electrónica cumpliendo con los requisitos de la DIAN, reduciendo errores manuales en un 40%.',
  },
  {
    icon: 'trending_up',
    title: 'Optimización de Flujo de Caja',
    description:
      'Diseño e implementación de un modelo de gestión de cartera que mejoró la recuperación de activos en un 25% trimestral.',
  },
  {
    icon: 'account_balance_wallet',
    title: 'Auditoría NIIF para PYMES',
    description:
      'Liderazgo en la transición y auditoría de estados financieros bajo estándares NIIF para pequeñas y medianas empresas.',
  },
];

export const education = [
  {
    icon: 'school',
    title: 'Contaduría Pública (Graduada)',
    institution: 'Fundación Universitaria Los Libertadores',
    period: 'Ene 2021 - Dic 2025',
  },
  {
    icon: 'history_edu',
    title: 'Gestión Contable y Financiera (Tecnólogo)',
    institution: 'SENA',
    period: 'Ene 2020 - Nov 2022',
  },
  {
    icon: 'public',
    title: 'Diplomado en Tributario Internacional',
    institution: 'Instituto Nacional de Contadores Públicos',
    period: 'Ago 2024 - Nov 2024',
  },
];

export const certifications = [
  {
    icon: 'workspace_premium',
    title: 'Análisis de Datos - Power BI',
    institution: 'Fundación Universitaria Los Libertadores',
    period: 'Jun 2025',
  },
  {
    icon: 'workspace_premium',
    title: 'Facturación Electrónica y Gestión de Cartera',
    institution: 'Colsubsidio',
    period: 'Dic 2024',
  },
];

// Solo comunicación básica/pública. El teléfono se omite por privacidad.
export const contact = {
  intro:
    'Estoy disponible para oportunidades que requieran precisión analítica y rigor contable. Contácteme para discutir cómo puedo aportar valor a su organización.',
  channels: [
    {
      icon: 'mail',
      label: 'ynataliad@gmail.com',
      href: 'mailto:ynataliad@gmail.com',
    },
    {
      icon: 'link',
      label: 'Perfil en LinkedIn',
      href: 'https://www.linkedin.com/',
    },
  ],
};
