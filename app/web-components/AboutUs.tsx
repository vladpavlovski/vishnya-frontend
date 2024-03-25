import { BlocksRenderer } from '@strapi/blocks-react-renderer';

interface AboutUsProps {
  data: {
    title: string;
    sectionTitle: string;
    advantage: {
      id: number;
      title: string;
      description: [];
      icon: string;
    }[];
  };
}
export const AboutUs = ({ data }: AboutUsProps) => {
  const { title, sectionTitle, advantage } = data;
  return (
    <section className='mx-auto max-w-7xl bg-background px-4 py-8 sm:px-6 md:py-16 lg:px-8'>
      <div className='py-12 text-center'>
        <h2 className='text-base font-semibold uppercase tracking-wide text-primary'>
          {sectionTitle}
        </h2>
        <p className='mt-2 text-3xl leading-8 tracking-tight text-secondary sm:text-4xl'>
          {title}
        </p>
      </div>
      <div className='md:mt-10'>
        <ul className='gap-8 md:grid md:grid-cols-2 lg:grid-cols-3'>
          {advantage.map((advantage, index) => (
            <li key={advantage.id}>
              <div className='space-y-4'>
                {/* Place for an icon */}
                <div className='space-y-1 text-lg font-medium leading-6'>
                  <h3 className='mb-4 text-center uppercase text-secondary'>
                    {advantage.title}
                  </h3>
                  <p className='text-center text-sm text-gray-500'>
                    <BlocksRenderer content={advantage.description} />
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
