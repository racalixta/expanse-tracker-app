import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputText = ({ label, ...props }: Props) => {
  return (
    <div className='flex flex-col w-full'>
      <label>{label}: </label>
      <input className='border-2 border-indigo-700 rounded-md px-4 py-2 h-10' {...props} />
    </div>
  )
}

