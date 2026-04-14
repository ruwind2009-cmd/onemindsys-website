export type SitePhotoKey =
  | 'home'
  | 'enterprise'
  | 'projects'
  | 'delivery'
  | 'financing'
  | 'about'
  | 'support'
  | 'zh-home'
  | 'zh-solutions'
  | 'zh-cooperation'
  | 'zh-insights'
  | 'solution-compute-center'
  | 'solution-energy-upgrade'
  | 'solution-overseas'
  | 'project-power'
  | 'project-solar'
  | 'project-bess'
  | 'home-solution-compute'
  | 'home-solution-energy'
  | 'home-solution-deployment'
  | 'enterprise-offgrid'
  | 'enterprise-industrial'
  | 'enterprise-private'

type SitePhoto = {
  src: string
  alt: string
  position?: string
}

export const SITE_PHOTOS: Record<SitePhotoKey, SitePhoto> = {
  home: {
    src: '/images/site/real/home-thermal-night.jpeg',
    alt: 'Night view of a large thermal power plant with active construction, cranes, and illuminated industrial structures.',
    position: 'center center',
  },
  enterprise: {
    src: '/images/site/real/coal-power-plant-domes.jpeg',
    alt: 'Large utility-scale power plant with heavy industrial systems, storage domes, and transmission infrastructure.',
    position: 'center center',
  },
  projects: {
    src: '/images/site/real/power-plant-coastal-bangladesh.jpeg',
    alt: 'Large coastal power infrastructure complex with marine works, fuel handling, and utility-scale plant systems.',
    position: 'center 45%',
  },
  delivery: {
    src: '/images/site/real/home-thermal-night.jpeg',
    alt: 'Active power plant construction scene at night with cranes, high-voltage structures, and industrial lighting.',
    position: 'center center',
  },
  financing: {
    src: '/images/site/real/power-plant-coastal-bangladesh.jpeg',
    alt: 'Capital-intensive power plant complex showing the scale and physical density behind project financing requirements.',
    position: 'center 45%',
  },
  about: {
    src: '/images/site/real/power-plant-aerial-bangladesh.jpeg',
    alt: 'Operational power plant seen from above with dense industrial piping, stacks, and surrounding project context.',
    position: 'center center',
  },
  support: {
    src: '/images/site/real/gas-plant-substation-river.jpeg',
    alt: 'Industrial power site with substation equipment and utility connections suitable for a contact page background.',
    position: 'center 45%',
  },
  'zh-home': {
    src: '/images/site/real/home-thermal-night.jpeg',
    alt: 'Night power infrastructure scene for the Chinese landing page.',
    position: 'center center',
  },
  'zh-solutions': {
    src: '/images/site/real/coal-power-plant-domes.jpeg',
    alt: 'Utility-scale power infrastructure representing Chinese market solutions and project complexity.',
    position: 'center center',
  },
  'zh-cooperation': {
    src: '/images/site/real/home-thermal-night.jpeg',
    alt: 'Project delivery environment with ongoing power plant construction and industrial coordination.',
    position: 'center center',
  },
  'zh-insights': {
    src: '/images/site/real/gas-plant-substation-river.jpeg',
    alt: 'Industrial power facility background for the Chinese insights page.',
    position: 'center 45%',
  },
  'solution-compute-center': {
    src: '/images/site/real/gas-plant-substation-river.jpeg',
    alt: 'Power-intensive industrial site with substation and utility infrastructure relevant to compute center planning.',
    position: 'center 45%',
  },
  'solution-energy-upgrade': {
    src: '/images/site/real/coal-power-plant-domes.jpeg',
    alt: 'Existing power infrastructure asset suitable for energy project upgrade and complex industrial repurposing.',
    position: 'center center',
  },
  'solution-overseas': {
    src: '/images/site/real/power-plant-coastal-bangladesh.jpeg',
    alt: 'Overseas infrastructure deployment context with coastal plant systems, marine access, and large project footprint.',
    position: 'center 45%',
  },
  'project-power': {
    src: '/images/site/real/coal-power-plant-domes.jpeg',
    alt: 'Large power infrastructure project with multiple industrial systems, stacks, and high-complexity plant layout.',
    position: 'center center',
  },
  'project-solar': {
    src: '/images/site/real/solar-farm-grid-hungary.jpeg',
    alt: 'Utility-scale solar farm viewed from above with visible grid connection and real site works.',
    position: 'center center',
  },
  'project-bess': {
    src: '/images/site/real/gas-plant-substation-river.jpeg',
    alt: 'Critical infrastructure power site with substation and utility equipment supporting resilience-focused operations.',
    position: 'center 45%',
  },
  'home-solution-compute': {
    src: '/images/site/real/coal-power-plant-domes.jpeg',
    alt: 'Complex utility-scale plant with multiple systems and infrastructure interfaces suitable for project structuring.',
    position: 'center center',
  },
  'home-solution-energy': {
    src: '/images/site/real/power-plant-coastal-bangladesh.jpeg',
    alt: 'Large-scale power plant showing the physical scale and capital intensity behind financing readiness.',
    position: 'center 45%',
  },
  'home-solution-deployment': {
    src: '/images/site/real/home-thermal-night.jpeg',
    alt: 'Industrial delivery scene with cranes, power systems, and active construction work.',
    position: 'center center',
  },
  'enterprise-offgrid': {
    src: '/images/site/real/gas-plant-substation-river.jpeg',
    alt: 'Industrial power facility with on-site electrical infrastructure relevant to off-grid or dedicated power arrangements.',
    position: 'center center',
  },
  'enterprise-industrial': {
    src: '/images/site/real/power-plant-aerial-bangladesh.jpeg',
    alt: 'Industrial project environment with dense process equipment and operational utility infrastructure.',
    position: 'center center',
  },
  'enterprise-private': {
    src: '/images/site/real/solar-farm-desert.jpeg',
    alt: 'Remote power infrastructure site suitable for dedicated or privately structured energy arrangements.',
    position: 'center center',
  },
}
