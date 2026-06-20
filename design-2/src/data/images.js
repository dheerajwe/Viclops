const U = (id, w = 1600, q = 90) =>
  `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`

const BASE = 'https://www.viclops.com'

export const images = {
  logo: `${BASE}/assets/images/logos/My-logo-1.jpg`,
  logoAlt: `${BASE}/assets/images/logos/logo-2.png`,
  hero: U('photo-1451187580459-43490279c0fa'),
  about: U('photo-1522071820081-009f0129c71c', 1800, 92),
  aboutSecondary: U('photo-1519389950473-47ba0277781', 1800, 92),
  aboutFallback: U('photo-1498050108023-c5249f4df085', 1800, 92),
  workspace: U('photo-1504384308090-c894fdcc538d', 800),
  services: {
    cloud: U('photo-1544197150-b99a580bb7a8', 1200),
    web: U('photo-1460925895917-afdab827c52f', 1200),
    infrastructure: U('photo-1667372393119-3d4c48d07fc9', 1200),
    managed: U('photo-1551288049-bebda4e38f71', 1200),
    security: U('photo-1550751827-4bd374c3f58b', 1200),
    data: U('photo-1558494949-ef010cbdcc31', 1200),
  },
  highlights: [
    U('photo-1518770660439-4636190af475', 800),
    U('photo-1504384308090-c894fdcc538d', 800),
    U('photo-1498050108023-c5249f4df085', 800),
  ],
  showcase: U('photo-1563986768609-322da13575f3', 1200),
  expertise: U('photo-1639765488607-d89ffe7153d6', 1200),
  aboutMain: U('photo-1522071820081-009f0129c71c', 1800, 92),
}

export const whyPartner = [
  {
    title: 'Expert Team',
    desc: 'Leverage years of industry experience and deep technical expertise.',
    icon: 'team',
  },
  {
    title: 'Tailored Solutions',
    desc: 'Custom-built IT strategies designed to meet your specific business goals.',
    icon: 'puzzle',
  },
  {
    title: 'Security-First Approach',
    desc: 'Ensure your data and operations are protected with built-in compliance and security.',
    icon: 'shield',
  },
  {
    title: 'End-to-End Management',
    desc: 'Simplify complex technology challenges with our comprehensive managed services.',
    icon: 'layers',
  },
]
