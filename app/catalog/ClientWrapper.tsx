'use client';
import { fetchAPI } from '@/app//utils/fetch-api';
import { CardRenderer } from '@/app/web-components/CatalogWidget/CardRenderer';
import { useCallback, useEffect, useState } from 'react';
import { Meta } from '@/app/utils/model';

const NEXT_PUBLIC_PAGE_LIMIT = 9;

export const CatalogClientWrapper = () => {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start: number, limit: number) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/projects`;
      const urlParamsObject = {
        sort: { createdAt: 'desc' },
        populate: {
          title: true,
          shortDescription: true,
          price: true,
          square: true,
          roomAmount: true,
          bathroomAmount: true,
          bedroomAmount: true,
          cardHeaderTitle: true,
          purpose: true,
          exteriorGallery: {
            fields: ['url'],
            start: 0,
            limit: 1,
          },
          tags: {
            populate: {
              tag: {
                fields: ['name'],
              },
            },
          },
        },
        pagination: {
          start: start,
          limit: limit,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);

      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData: any[]) => [...prevData, ...responseData.data]);
      }

      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  function loadMoreProjects(): void {
    const nextPosts = meta!.pagination.start + meta!.pagination.limit;
    fetchData(nextPosts, Number(NEXT_PUBLIC_PAGE_LIMIT));
  }

  useEffect(() => {
    fetchData(0, Number(NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  const noMoreProjects = meta
    ? meta?.pagination.start + meta?.pagination.limit >= meta?.pagination.total
    : false;
  return (
    <CardRenderer
      inCatalog
      projects={data}
      title={'Каталог'}
      motivateQuestion={'Узнайте больше о проектах'}
      fetchMore={loadMoreProjects}
      noMoreProjects={noMoreProjects}
      isLoading={isLoading}
    />
  );
};
