import { ContentProps } from '@/app/utils/model';
import { Button } from '@/components/ui/button';

export const ProjectDescription = ({ data }: ContentProps) => {
  const {
    attributes: { description, location },
  } = data;
  return (
    <div className='flex md:pb-8 md:pt-4'>
      <div className='w-1/2 flex-col'></div>
      <div className='flex-col justify-between'>
        <h3 className='mb-8 mt-4 text-3xl uppercase text-secondary'>
          {`Расположен в районе ${location}`}
        </h3>
        <p className='text-sm text-gray-500'>{description}</p>
        <Button className='mt-10 bg-secondary px-6 hover:bg-primary'>
          Заказать обратный звонок
        </Button>
      </div>
    </div>
  );
};
