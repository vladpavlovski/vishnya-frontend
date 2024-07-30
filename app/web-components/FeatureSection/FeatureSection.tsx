'use client';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa6';
import { GiVineLeaf } from 'react-icons/gi';
import { FiMessageCircle } from 'react-icons/fi';
import { BsPersonStanding } from 'react-icons/bs';
interface Props {
  data: {
    title: string;
    subtitle: string;
    features: {
      id: number;
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

const getIcon = (icon: string) => {
  switch (icon) {
    case 'buildingOffice2':
      return BuildingOffice2Icon;
    case 'handShake':
      return FaHandshake;
    case 'leaf':
      return GiVineLeaf;
    case 'messageCircle':
      return FiMessageCircle;
    case 'personStanding':
      return BsPersonStanding;
    case 'supportAgent':
      return MdOutlineSupportAgent;
    default:
      return BuildingOffice2Icon;
  }
};

export const FeatureSection = ({ data }: Props) => {
  const { title, subtitle, features } = data;
  return (
    <section className='mx-auto max-w-7xl px-4 py-8'>
      <div className='mb-12 text-center'>
        <h2 className='text-sm font-semibold text-primary'>{subtitle}</h2>
        <h1 className='mt-2 text-4xl font-bold text-red-900'>{title}</h1>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {features.map((feature) => {
          const Icon = getIcon(feature.icon);
          return (
            <div className='p-6 text-center' key={feature.id}>
              <Icon className='mx-auto mb-4 h-20 w-20 text-primary' />
              <h3 className='text-xl font-semibold text-red-900'>
                {feature.title}
              </h3>
              <p className='mt-2 font-light text-gray-700'>
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
