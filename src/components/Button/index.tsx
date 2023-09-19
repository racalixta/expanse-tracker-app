import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button 
      {...props} 
      className='bg-indigo-700 h-10 border rounded-md w-full text-white font-semibold text-lg hover:bg-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed'
    >
      {children}
    </button>
  )
}