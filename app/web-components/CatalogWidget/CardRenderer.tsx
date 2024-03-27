'use client';
import { ShortProject } from '@/app/utils/model';
import { useState } from 'react';
import { CatalogCard } from '@/app/web-components/CatalogWidget/CatalogCard';
import { fetchAPI } from '@/app/utils/fetch-api';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface CardRendererProps {
  projects: ShortProject[];
}

async function getProjects(filters: any): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error('The Strapi API Token environment variable is not set.');

  const path = `/projects`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    fields: [
      'title',
      'shortDescription',
      'price',
      'square',
      'roomAmount',
      'bathroomAmount',
      'bedroomAmount',
      'cardHeaderTitle',
      'purpose',
    ],
    populate: {
      tags: {
        populate: {
          tag: {
            fields: ['name'],
          },
        },
      },
    },
    pagination: {
      start: 0,
      limit: 5,
    },
    filters: {
      $or: [...filters],
    },
  };
  return await fetchAPI(path, urlParamsObject, options);
}

const priceRange = [
  {
    title: 'До 250 000',
    value: '250000',
  },
  {
    title: '250 000 - 500 000',
    value: '500000',
  },
  {
    title: '500 000 - 1 000 000',
    value: '1000000',
  },
  {
    title: 'Больше 1 000 000',
    value: '1000001',
  },
];

interface FiltersProps {
  [key: string]: { [key: string]: string };
}

interface Props {
  setProjects: (data: ShortProject[]) => void;
}

const Filters = ({ setProjects }: Props) => {
  const [filters, setFilters] = useState<FiltersProps[]>([]);

  const onFilterChange = async (value: string, filterProperty: string) => {
    const newFilter = {
      [filterProperty]: {
        $eq: value,
      },
    };
    const newFilters = [
      ...filters.filter((filter) => !filter.hasOwnProperty(filterProperty)),
      newFilter,
    ];
    setFilters(newFilters);
  };

  const onPriceFilterChange = async (value: string) => {
    let newFilter = {
      price: {},
    };

    switch (value) {
      case '250000':
        newFilter.price = { $lte: 250000 };
        break;
      case '500000':
        newFilter.price = { $gt: 250000, $lte: 500000 };
        break;
      case '1000000':
        newFilter.price = { $gt: 500000, $lte: 1000000 };
        break;
      case '1000001':
        newFilter.price = { $gt: 1000000 };
        break;
    }
    const newFilters = [
      ...filters.filter((filter) => !filter.hasOwnProperty('price')),
      newFilter,
    ];
    setFilters(newFilters);
  };

  const handleSubmit = async () => {
    const fetchedProjects = await getProjects(filters);
    setProjects(fetchedProjects.data);
  };

  return (
    <div className='mb-6 mt-4 hidden flex-row gap-2 bg-projectCard p-6 md:flex'>
      <Select
        onValueChange={(value: string) => {
          onFilterChange(value, 'purpose');
        }}
      >
        <SelectTrigger className='max-[220px] focus:ring-0 focus:ring-transparent focus:ring-offset-transparent'>
          <SelectValue placeholder='Купить' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem defaultChecked value='buy'>
            Купить
          </SelectItem>
          <SelectItem value='sell'>Продать</SelectItem>
          <SelectItem value='rent'>Арендовать</SelectItem>
        </SelectContent>
      </Select>
      <Select
      // onValueChange={(value: string) => {
      //   onFilterChange(value, 'propertyType');
      // }}
      >
        <SelectTrigger className='max-[220px] focus:ring-0 focus:ring-transparent focus:ring-offset-transparent'>
          <SelectValue placeholder='Любая недвижимость' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem defaultChecked value='all'>
            Все типы
          </SelectItem>
        </SelectContent>
      </Select>
      <Select
      // onValueChange={(value: string) => {
      //   onFilterChange(value, 'area');
      // }}
      >
        <SelectTrigger className='max-[220px] focus:ring-0 focus:ring-transparent focus:ring-offset-transparent'>
          <SelectValue placeholder='Все районы' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem defaultChecked value='all'>
            Все
          </SelectItem>
        </SelectContent>
      </Select>
      <Select
        onValueChange={(value: string) => {
          onPriceFilterChange(value);
        }}
      >
        <SelectTrigger className='max-[220px] focus:ring-0 focus:ring-transparent focus:ring-offset-transparent'>
          <SelectValue placeholder='Цена' />
        </SelectTrigger>
        <SelectContent>
          {priceRange.map((priceRange) => (
            <SelectItem key={priceRange.value} value={priceRange.value}>
              {priceRange.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={handleSubmit} className='bg-secondary hover:bg-primary'>
        Показать предложения
      </Button>
    </div>
  );
};

export const CardRenderer = ({ projects }: CardRendererProps) => {
  const [projectsFromFilters, setProjectsFromFilters] =
    useState<ShortProject[]>(projects);

  const noProjectData = projectsFromFilters?.length === 0;
  return (
    <>
      {/*{Filters}*/}
      <Filters setProjects={setProjectsFromFilters} />
      <div className='grid grid-cols-1 justify-between gap-4 align-middle md:grid-cols-2 xl:gap-8'>
        {projectsFromFilters?.map((project: ShortProject) => (
          <CatalogCard key={project.id} data={project} />
        ))}
      </div>
      {noProjectData && (
        <div className='text-center text-xl text-gray-400'>Нет данных</div>
      )}
    </>
  );
};
