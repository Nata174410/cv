// Contenido del CV centralizado.
// NOTA: se omiten datos sensibles (teléfono, dirección, documento).
// Solo se exponen canales de comunicación públicos básicos.

export const profile = {
  brand: 'Natalia Daza',
  brandTagline: 'Fiscal Precision',
  name: 'Natalia Daza Gómez',
  role: 'Contadora Pública & Analista Contable',
  tagline:
    'Transformando datos en decisiones financieras estratégicas con integridad y precisión.',
  summary:
    'Natalia Daza Gómez es Contadora Pública graduada de la Fundación Universitaria Los Libertadores, con formación tecnológica en el SENA y certificaciones especializadas en Análisis de Datos (Power BI) y Gestión de Cartera. Experiencia en análisis contable y tributario, recolección de datos fiscales, preparación de declaraciones tributarias (renta de personas naturales, IVA y retención en la fuente) e informes gubernamentales, seguimiento de cambios normativos y apoyo a auditorías. Perfil analítico, con alto nivel de atención al detalle, orientado al cumplimiento normativo (NIIF y legislación fiscal colombiana) y a la toma de decisiones basada en datos.',
};

export const seo = {
  title: 'Natalia Daza Gómez | Contadora Pública & Analista Contable',
  description:
    'Contadora Pública y Analista Contable en Bogotá. Especialista en NIIF, legislación fiscal colombiana, declaraciones de renta y tributarias, informes gubernamentales, análisis de datos (Power BI) y cumplimiento tributario. Transformando datos en decisiones financieras estratégicas.',
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
    'Declaración de Renta',
    'Conciliaciones Bancarias',
    'DIAN',
    'Bogotá',
    'Colombia',
    'Natalia Daza Gómez',
  ],
  locale: 'es_CO',
  ogImage: 'og-image.jpg',
  themeColor: '#002d62',
  alternateName: 'Natalia Daza',
  sameAs: ['https://www.linkedin.com/in/nata-daza/'],
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
  { href: '#education', label: 'Educación' },
  { href: '#contact', label: 'Contacto' },
];

export const experience = [
  {
    period: 'Ago 2026 - Presente',
    company: 'Industrial Taylor Colombia',
    location: 'Bogotá, Colombia',
    title: 'Analista Contable',
    bullets: [
      'Recolección y análisis de datos fiscales, preparación de declaraciones fiscales y asistencia en la elaboración de informes gubernamentales.',
      'Seguimiento de cambios en la legislación fiscal y tributaria, y diseño e implementación de estrategias de optimización fiscal conforme a la normativa vigente.',
      'Organización, mantenimiento y resguardo de documentación y archivos fiscales, incluyendo la información requerida para auditorías.',
      'Capacitación y soporte interno en materia fiscal, evaluación y gestión de riesgos fiscales, y ejecución de tareas administrativas relacionadas con el cargo.',
    ],
  },
  {
    period: 'Actualidad',
    company: 'Práctica independiente (complementaria)',
    location: 'Bogotá, Colombia',
    title: 'Contadora Pública Independiente',
    bullets: [
      'Declaraciones de renta de personas naturales ante la DIAN.',
      'Declaraciones de IVA y de retención en la fuente.',
      'Información exógena, ICA, RUT y demás trámites ante la DIAN.',
    ],
  },
  {
    period: 'Ene 2026 - Jul 2026',
    company: 'Reciclajes Bogotá NS SAS',
    location: 'Bogotá, Colombia',
    title: 'Auxiliar Contable',
    bullets: [
      'Frente tributario: elaboración de borradores de impuestos, solicitud y control de certificados de retención como soporte fiscal y revisión del informe DIAN de facturas de compra, asegurando el cumplimiento de la legislación fiscal colombiana.',
      'Causación integral del ciclo contable: compras, ventas, caja menor (con conciliación en el sistema), recibos de caja, comprobantes de egreso y registro de notas débito y crédito, incluidos los créditos bancarios.',
      'Conciliación bancaria mensual y conciliación de anticipos.',
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
    icon: 'receipt_long',
    title: 'Tributario',
    description: 'Declaración de Renta, IVA, Retención en la Fuente, ICA, Información Exógena, Borradores de Impuestos, Reportes DIAN.',
    level: 90,
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
    title: 'Seminario en Tributario Internacional',
    institution: 'Fundación Universitaria Los Libertadores',
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
      href: 'https://www.linkedin.com/in/nata-daza/',
    },
  ],
};
