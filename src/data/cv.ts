// Contenido del CV centralizado.
// NOTA: se omiten datos sensibles (teléfono, dirección, documento).
// Solo se exponen canales de comunicación públicos básicos.

export const profile = {
  brand: 'Natalia Daza',
  brandTagline: 'Fiscal Precision',
  name: 'Natalia Daza Gómez',
  role: 'Contadora Pública & Auxiliar Contable y Tributaria',
  tagline:
    'Transformando datos en decisiones financieras estratégicas con integridad y precisión.',
  summary:
    'Natalia Daza Gómez es Contadora Pública graduada de la Fundación Universitaria Los Libertadores, con formación tecnológica en el SENA y certificaciones especializadas en Análisis de Datos (Power BI) y Gestión de Cartera. Experiencia gestionando el ciclo contable de extremo a extremo — causación, conciliaciones bancarias multibanco, provisiones, depreciaciones y diferidos — y el frente tributario: elaboración de borradores de impuestos, gestión de certificados y soportes fiscales y revisión de reportes DIAN. Perfil analítico, con alto nivel de atención al detalle, orientado al cumplimiento normativo (NIIF y legislación fiscal colombiana) y a la toma de decisiones basada en datos.',
};

export const seo = {
  title: 'Natalia Daza Gómez | Contadora Pública & Auxiliar Contable y Tributaria',
  description:
    'Contadora Pública y Auxiliar Contable y Tributaria en Bogotá. Especialista en NIIF, legislación fiscal colombiana, borradores de impuestos, conciliaciones bancarias, análisis de datos (Power BI) y cumplimiento tributario. Transformando datos en decisiones financieras estratégicas.',
  keywords: [
    'Contadora Pública',
    'Auxiliar Contable',
    'NIIF',
    'IFRS',
    'Power BI',
    'Análisis de Datos',
    'Facturación Electrónica',
    'Nómina',
    'Tributario',
    'Impuestos',
    'Declaraciones Tributarias',
    'Conciliaciones Bancarias',
    'DIAN',
    'Bogotá',
    'Colombia',
    'Natalia Daza Gómez',
  ],
  locale: 'es_CO',
  ogImage: 'og-image.jpg',
  themeColor: '#002d62',
  // Nombre por el que también se la busca (refuerza el ranking por nombre)
  alternateName: 'Natalia Daza',
  // Perfiles externos de la MISMA persona → ayuda a Google a consolidar su identidad.
  // ⚠️ Reemplaza con las URLs reales de Natalia para máximo efecto.
  sameAs: ['https://www.linkedin.com/in/natalia-daza'],
};

// Hojas de vida descargables (generadas con RenderCV). Los archivos viven en /public.
export const cvDownloads = [
  { lang: 'ES', label: 'Español', file: 'Natalia_Daza_CV_ES.pdf' },
  { lang: 'EN', label: 'English', file: 'Natalia_Daza_CV_EN.pdf' },
];

// El orden sigue el flujo real de la página (para que el scroll-spy avance de izq. a der.)
export const navLinks = [
  { href: '#home', label: 'Inicio' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#skills', label: 'Competencias' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#education', label: 'Educación' },
  { href: '#contact', label: 'Contacto' },
];

export const experience = [
  {
    period: 'Ene 2026 - Presente',
    company: 'Reciclajes Bogotá NS SAS',
    location: 'Bogotá, Colombia',
    title: 'Auxiliar Contable',
    bullets: [
      'Frente tributario: elaboración de borradores de impuestos, solicitud y control de certificados de retención como soporte fiscal (cuenta 1355) y revisión del informe DIAN de facturas de compra, asegurando el cumplimiento de la legislación fiscal colombiana.',
      'Causación integral del ciclo contable: compras, ventas, caja menor (con conciliación en el sistema), recibos de caja, comprobantes de egreso y registro de notas débito y crédito, incluidos los créditos bancarios.',
      'Conciliación bancaria mensual y conciliación de anticipos, con emisión del informe de la cuenta 1330.',
      'Cálculo y registro de depreciaciones y diferidos en Excel y en el sistema contable, y constitución de provisiones de cartera y de transportadores con revisión periódica de saldos.',
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
    description: 'Borradores de Impuestos, Retención en la Fuente, IVA, Información Exógena, Reportes DIAN.',
    level: 90,
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
