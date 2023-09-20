import { Button } from "../Button"

interface Props {
  id: number,
  title: string,
  category: string,
  price: number,
}

export const Card = ({ id, title, category, price }: Props) => {
  return (
    <article className='bg-gray-100 p-4 rounded-md shadow-md h-48 relative flex flex-col gap-4'>

      <Button variant='ghost' className='absolute top-0 right-0'>X</Button>

      <h2 className='font-bold text-xl text-indigo-700'>{title}</h2>

      <p className='px-4 font-semibold bg-green-200 self-start rounded-md'>{category}</p>

      <p>R$ {price}</p>

  </article>
  )
}