import { getPageBySlug } from '@/app/utils/get-page-by-slug'
import { sectionRenderer } from '@/app/utils/section-renderer'

export default async function CatalogRoute() {
  try {
    const page = await getPageBySlug('catalog')
    if (page.error && page.error.status == 401)
      throw new Error(
        'Missing or invalid credentials. Have you created an access token using the Strapi admin panel?'
      )
    if (page.data && page.data.length === 0) return null
    const contentSections = page.data[0].attributes.contentSections
    return contentSections.map((section: any, index: number) =>
      sectionRenderer(section, index)
    )
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error('Missing or invalid credentials:', error)
  }
}
