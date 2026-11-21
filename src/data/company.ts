// Single source of truth for company contact facts used across the site.
// Keep in sync with PRODUCT.md (Operating Context).

type Localized = { sk: string; en: string }

export const company = {
  legalName: 'Švehla a Blaško s.r.o.',
  address: {
    street: 'Kočovská 2583/22',
    city: '915 01 Nové Mesto nad Váhom',
    country: { sk: 'Slovensko', en: 'Slovakia' },
  },
  ids: { ico: '47419181', dic: 'SK2023864601' },
  email: 'info@svehlasro.sk',
  hours: { sk: 'Po–Pia 07:00–15:30', en: 'Mon–Fri 07:00–15:30 CET/CEST' },
  production: {
    name: 'Ing. Juraj Nemček',
    role: { sk: 'Výroba · výkresy a dopyty', en: 'Production · drawings and quotes' },
    email: 'vyroba@svehlasro.sk',
    phone: '+421 905 691 366',
  },
  owner: {
    name: 'Ing. Boris Blaško',
    role: { sk: 'Konateľ · obchod a spolupráca', en: 'Managing partner · business and contracts' },
    email: 'info@svehlasro.sk',
    phone: '+421 918 601 675',
  },
  // Second managing director. No email of his own was given; the contact page shows phone only.
  director: {
    name: 'Ján Švehla',
    role: { sk: 'Konateľ', en: 'Managing director' },
    email: undefined as string | undefined,
    phone: '+421 907 794 370',
  },
  // Reassurance for the moment a buyer sends a drawing: reply time, the languages the contacts
  // speak, how drawings are kept confidential. Pending from the client; each line renders in the
  // intake note only once it is filled in here, in both languages. Never guess them.
  assurances: {
    replyTime: undefined as Localized | undefined,
    languages: undefined as Localized | undefined,
    confidentiality: undefined as Localized | undefined,
  },
  // Google Maps place for the hall; used by the contact page map and its fallback link.
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.8721528963933!2d17.842833576841596!3d48.74613890859892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714a82d6f578e57%3A0x7dd63b0688b42144!2s%C5%A0vehla%20a%20Bla%C5%A1ko%20s.%20r.%20o.!5e0!3m2!1ssk!2ssk!4v1703425557175!5m2!1ssk!2ssk',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=%C5%A0vehla%20a%20Bla%C5%A1ko%20s.r.o.%20Ko%C4%8Dovsk%C3%A1%202583%2F22%20Nov%C3%A9%20Mesto%20nad%20V%C3%A1hom',
} as const

export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`

export const mailHref = (email: string, subject?: string) =>
  subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

/** Locale-aware internal link that respects the deploy base path. */
export const localizedPath = (locale: string, slug = '') => {
  const s = slug ? `/${slug.replace(/^\/+|\/+$/g, '')}` : ''
  // The default-locale home keeps its trailing slash: a base-path root without it 301s on GitHub Pages.
  if (locale === 'sk') return s ? `${basePath}${s}` : `${basePath}/`
  return `${basePath}/${locale}${s}`
}

export const assetPath = (path: string) => `${basePath}/${path.replace(/^\/+/, '')}`
