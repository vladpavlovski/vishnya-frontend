import { fetchAPI } from '@/app/utils/fetch-api';

export async function getProjectBySlug(slug: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/projects`;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      exteriorGallery: {
        fields: ['url', 'alternativeText', 'caption'],
      },
      interiorGallery: {
        fields: ['url', 'alternativeText', 'caption'],
      },
      disposition: {
        fields: ['url', 'alternativeText', 'caption'],
      },
      paymentPlans: {
        populate: {
          paymentOption: {
            fields: ['value', 'description'],
          },
        },
      },
    },
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
