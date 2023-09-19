import tw from "tailwind-styled-components";

export const TemplateContainer = tw.div`
  w-screen h-screen bg-gray-50 flex justify-center px-4
`;

export const TemplateContent = tw.section`
  w-full h-full max-w-screen-l grid grid-cols-2 justify-center items-center
`;

export const TemplateMain = tw.main`
  flex flex-col justify-center items-center gap-10
`;