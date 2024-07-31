import { getStrapiMedia } from '@/app/utils/api-helpers'
import { ContentProps } from '@/app/utils/model'

import Image from 'next/image'
export const Disposition = ({ data }: ContentProps) => {
  const {
    attributes: { disposition, paymentPlans },
  } = data

  if (!disposition?.data?.attributes) {
    // do not render if there is no disposition
    return null
  }

  const {
    data: {
      attributes: { url, alternativeText },
    },
  } = disposition

  const imageUrl = getStrapiMedia(url)
  return (
    <div className='my-16 flex'>
      <div className='w-1/2 flex-col'>
        <h3 className='mb-8 mt-4 text-3xl uppercase text-secondary'>
          Планировка
        </h3>
        {imageUrl && (
          <Image
            width={500}
            height={500}
            src={imageUrl}
            alt={alternativeText || ''}
          />
        )}
      </div>
      <div className='flex-col justify-between'>
        <h3 className='mb-8 mt-4 text-3xl uppercase text-secondary'>
          План оплаты
        </h3>
        <ul>
          {paymentPlans?.map(({ id, value, description }: any) => (
            <li key={id} className='mb-10'>
              <span className='mr-6 text-4xl uppercase text-primary'>
                {value}
              </span>
              <span className=''>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
