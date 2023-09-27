export interface PageInfo {
  title?: string
  subtitle?: string
  seo?: SEODetails
}

// TODO: Add a more complete SEO interface
export interface SEODetails {
  title: string
  description: string
  image: string
  url: string
}
