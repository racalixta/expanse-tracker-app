import { ButtonHTMLAttributes, ReactNode } from "react";
import tw from "tailwind-styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>  {
  children: ReactNode;
  variant?: 'ghost';
}

export const Button = ({ children, variant, ...props }: Props) => {
  if(variant === 'ghost') return (
    <GhostButton {...props}>
      {children}
    </GhostButton>
  )

  return (
    <MainButton {...props}>
      {children}
    </MainButton>
  )
}


export const BaseButton = tw.button`
  h-10 rounded-md text-white font-semibold px-4 text-lg  disabled:bg-gray-400 disabled:cursor-not-allowed w-auto 
`;

export const MainButton = tw(BaseButton)`
  bg-indigo-700 hover:bg-indigo-500
`;

export const GhostButton = tw(BaseButton)`
  bg-transparent text-indigo-700 hover:bg-indigo-200
`;
