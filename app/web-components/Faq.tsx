import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FaqProps {
  data: {
    title: string
    questions: { id: number; question: string; answer: string }[]
  }
}

export const Faq = ({ data }: FaqProps) => {
  const { title, questions } = data
  return (
    <section className='text-black-100 bg-background py-32'>
      <div className='mx-auto px-3 sm:container'>
        <h2 className='mb-6 text-left text-3xl uppercase text-secondary'>
          {title}
        </h2>

        <Accordion type='single' collapsible>
          {questions.map((question) => (
            <AccordionItem key={question.id} value={`item-${question.id}`}>
              <AccordionTrigger className='bg-faqBackground px-8 text-left text-base'>
                {question.question}
              </AccordionTrigger>
              <AccordionContent className='px-8 py-4 text-left text-sm text-gray-500'>
                <p>{question.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
