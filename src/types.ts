interface Site {
  website: string
  author: string
  title: string
  favicon?: string
  description?: string
  canonicalURL?: string
  ogImage?: string
  ogType?: string
  theme?: Theme
}

interface Theme {
  default: string
  dark: string
  light: string
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

export type { Site, HeadInfo }
