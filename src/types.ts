interface Site {
  website: string
  author: string
  title: string
  favicon?: string
  description?: string
  canonicalURL?: string
  ogImage?: string
  ogType?: string
}

interface HeadInfo {
  title: string
  description?: string
  author?: string
  keywords?: string[]
  canonicalURL?: string
  ogImage?: string
  ogType?: string
}

interface Link {
  name: string
  url: string
  icon?: string
}

interface Menu {
  name: string
  url?: string
  icon?: string
  children?: Link[]
}

export type { Site, HeadInfo, Menu }
