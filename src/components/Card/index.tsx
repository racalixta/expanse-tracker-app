import { Button } from "../Button"

interface Props {
  id: number,
  title: string,
  category: string,
  price: number,
}

export const Card = ({ id, title, category, price }: Props) => {
  return (
    <article className='bg-gray-100 px-4 py-2 rounded-md shadow-md h-auto relative flex flex-col gap-4'>

      

      <h2 className='font-bold text-xl text-indigo-700'>{title}</h2>

      <p className='px-4 font-semibold bg-green-200 self-start rounded-md'>{category}</p>

      <p className="font-semibold">R$ {price}</p>

      <footer className="flex justify-around items-center border-t border-indigo-600 py-2">
      <Button>Editar</Button>
      <Button >Excluir</Button>
      </footer>

  </article>
  )
}